import { useEffect, useRef, useState } from "react";
import styles from "./sivrceebi.module.css";
// FontAwesome ხატულების იმპორტი (გადიდება და ბმულზე გადასვლა)
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlassPlus,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

function Sivrceebi({ images, openModal }) {
  // --- რეფები (Refs) ინფორმაციის შესანახად რენდერებს შორის ---
  const wasDraggedForLink = useRef(false);
  const dragStartX = useRef(0);
  const sliderRef = useRef(null);

  // --- სთეითები (States) სლაიდერის მდგომარეობისთვის ---
  const [imageIndex, setImageIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);
  const [sliderWidth, setSlideWidth] = useState(0);
  const [translate, setTranslate] = useState(0);
  const [add, setAdd] = useState(0);

  // --- სთეითები მოძრაობის კონტროლისთვის ---
  const [isDragging, setIsDragging] = useState(false);
  const [isForward, setIsForward] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  // --- მუდმივი პარამეტრები ---
  const DRAG_THRESHOLD = 20;
  const GAP = 20;

  // 🔄 2. პოზიციის (Translate) განახლება ინდექსის მიხედვით
  useEffect(() => {
    const maxIndex = images.length - visibleSlides;
    let safeIndex = imageIndex;
    if (imageIndex > maxIndex) {
      safeIndex = Math.max(0, maxIndex);
      setImageIndex(safeIndex);
      setAdd(safeIndex);
    }
    if (!isDragging) {
      setTranslate(safeIndex * sliderWidth);
    }
  }, [sliderWidth, imageIndex, isDragging, images.length, visibleSlides]);

  // 🔄 3. რესპონსივ ლოგიკა (ეკრანის ზომის მიხედვით სურათების რაოდენობის და სიგანის გამოთვლა)
  useEffect(() => {
    function updateLayout() {
      if (!sliderRef.current) return;
      const containerWidth = sliderRef.current.getBoundingClientRect().width;
      const windowWidth = window.innerWidth;
      let slidesToShow = 3;
      if (windowWidth < 580)
        slidesToShow = 1; // მობილური
      else if (windowWidth < 740) slidesToShow = 2; // პლანშეტი

      setVisibleSlides(slidesToShow);

      const totalGapsWidth = GAP * (slidesToShow - 1);
      const newSlideWidth = (containerWidth - totalGapsWidth) / slidesToShow;
      setSlideWidth(newSlideWidth); // ვსვამთ თითოეული სურათის ზუსტ სიგანეს
    }

    updateLayout();
    window.addEventListener("resize", updateLayout); // ეკრანის გაწელვა/შეკუმშვის კონტროლი
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  // --- დამხმარე ფუნქცია მობილურის (Touch) და მაუსის (Mouse) კოორდინატების გასაერთიანებლად ---
  const getClientX = (e) => (e.touches ? e.touches[0].clientX : e.clientX);

  // --- ხელით გადათრევის (Drag) დაწყება ---
  const onMouseDown = (e) => {
    setIsDragging(true);
    dragStartX.current = getClientX(e);
    wasDraggedForLink.current = false;
  };

  // --- ხელით გადათრევის პროცესი ---
  const onMouseMove = (e) => {
    if (!isDragging) return;
    const currentX = getClientX(e);
    const delta = currentX - dragStartX.current;

    let newTranslate = imageIndex * sliderWidth - delta;
    const maxIndex = Math.max(0, images.length - visibleSlides);
    const maxTranslate = maxIndex * sliderWidth;

    // იცავს სლაიდერს საზღვრებიდან ზედმეტად გადავარდნისგან
    if (newTranslate < 0) newTranslate = 0;
    if (newTranslate > maxTranslate) newTranslate = maxTranslate;

    setTranslate(newTranslate);

    // თუ მაუსი 5 პიქსელზე მეტად განძრევდა, ესე იგი მომხმარებელი ათრევს სლაიდერს და ბმული არ უნდა გაიხსნას
    if (Math.abs(delta) > 5) {
      wasDraggedForLink.current = true;
    }
  };

  // --- ხელით გადათრევის დასრულება (მაუსის/თითის აშვება) ---
  const onMouseUp = (e) => {
    if (!isDragging) return;
    const currentX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const delta = currentX - dragStartX.current;

    let newIndex = imageIndex;
    // თუ გადათრევის მანძილმა გადააჭარბა ზღვარს (20px), გამოითვლება რამდენი სლაიდით გადავიდეს წინ/უკან
    if (Math.abs(delta) > DRAG_THRESHOLD) {
      const slidesToMove = Math.max(
        1,
        Math.round(Math.abs(delta) / sliderWidth),
      );
      newIndex =
        delta < 0 ? imageIndex + slidesToMove : imageIndex - slidesToMove;
    }

    const maxIndex = Math.max(0, images.length - visibleSlides);
    newIndex = Math.max(0, Math.min(newIndex, maxIndex)); // ვაზღვევთ საზღვრებში

    setAdd(newIndex);
    setImageIndex(newIndex);
    setTranslate(newIndex * sliderWidth);
    setIsDragging(false); // გადათრევა დასრულდა
  };

  const onMouseLeave = (e) => {
    if (isDragging) onMouseUp(e);
    setIsPaused(false);
  };

  // --- ფუნქცია: შემდეგ სურათზე გადასვლა ---
  function showNextImage() {
    const maxIndex = images.length - visibleSlides;
    if (imageIndex < maxIndex) {
      const newIndex = imageIndex + 1;
      setAdd(newIndex);
      setImageIndex(newIndex);
      setTranslate(newIndex * sliderWidth);
    } else {
      setIsForward(false); // თუ ბოლოში მივიდა, ბრუნდება უკან
    }
  }

  // --- ფუნქცია: წინა სურათზე გადასვლა ---
  function showPrevImage() {
    if (imageIndex > 0) {
      const newIndex = imageIndex - 1;
      setAdd(newIndex);
      setImageIndex(newIndex);
      setTranslate(newIndex * sliderWidth);
    } else {
      setIsForward(true); // თუ თავში მივიდა, ისევ მიდის წინ
    }
  }

  const preventImgDrag = (e) => e.preventDefault();

  // ბლოკავს კლიკს, თუ ელემენტი რეალურად გადაათრიეს და უბრალოდ არ დაუწკაპუნებიათ
  const handleClick = (e) => {
    if (wasDraggedForLink.current) {
      e.preventDefault();
      return;
    }
  };

  // --- მყარი გამოთვლები გვერდებისთვის ---
  const maxIndex = Math.max(0, images.length - visibleSlides);
  const dotsCount = Math.ceil(images.length / visibleSlides);

  return (
    <div className={styles.mainDiv} onDragStart={preventImgDrag}>
      {/* გარე კონტეინერი მაუსის/თითის ივენთებით */}
      <div
        className={styles.outerDiv}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onTouchStart={onMouseDown}
        onTouchMove={onMouseMove}
        onTouchEnd={onMouseUp}
        onTouchCancel={onMouseLeave}
      >
        {/* სლაიდერის მოძრავი ზოლი (Track) */}
        <div
          ref={sliderRef}
          className={styles.sliderDiv}
          style={{
            transform: `translateX(-${translate + GAP * add}px)`,
            transition: isDragging
              ? "none"
              : "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
          }}
        >
          {/* სურათების ციკლური დარენდერება */}
          {images.map(({ url, alt, id }) => (
            <div
              key={id}
              className={styles.mobileImageDiv}
              onDragStart={preventImgDrag}
              style={{ width: sliderWidth }}
            >
              {/* ჰოვერ ეფექტის კონტეინერი ხატულებით */}
              <div className={styles.divOnImage}>
                <div className={styles.iconsOnImageDiv}>
                  {/* გადიდების ხატულა (ხსნის მოდალურ ფანჯარას) */}
                  <div
                    className={styles.firstIconDiv}
                    onClick={() => {
                      if (!wasDraggedForLink.current)
                        openModal({ url, alt, id });
                    }}
                  >
                    <div className={styles.iconInner}>
                      <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
                    </div>
                  </div>
                  {/* ბმულზე გადასვლის ხატულა */}
                  <div className={styles.secondIconDiv}>
                    <div className={styles.iconInner}>
                      <FontAwesomeIcon icon={faUpRightFromSquare} />
                    </div>
                  </div>
                </div>
              </div>
              {/* უშუალოდ სურათის ტეგი */}
              <img
                className={styles.images}
                src={url}
                alt={alt}
                onDragStart={preventImgDrag}
              />
            </div>
          ))}
        </div>
      </div>

      {/* 🔘 მართვის წერტილების (Pagination Dots) ბლოკი */}
      <div className={styles.dotsDiv}>
        {Array.from({ length: dotsCount }).map((_, i) => {
          const isActive =
            imageIndex === maxIndex
              ? i === dotsCount - 1
              : Math.floor(imageIndex / visibleSlides) === i;

          return (
            <div
              key={i}
              className={isActive ? styles.dotActive : styles.dot}
              onClick={() => {
                const newIndex = Math.min(i * visibleSlides, maxIndex);
                setImageIndex(newIndex);
                setAdd(newIndex);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Sivrceebi;
