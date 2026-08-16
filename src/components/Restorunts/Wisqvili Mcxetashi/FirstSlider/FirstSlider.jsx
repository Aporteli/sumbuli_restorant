import { useEffect, useRef, useState } from "react";
import styles from "./FirstSlider.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlassPlus,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

function FirstSlider({ images, openModal }) {
  // --- რეფები (Refs) - ინახავენ მნიშვნელობებს, რომელთა ცვლილებაც ხელახალ რენდერს არ იწვევს ---
  const wasDraggedForLink = useRef(false);
  const dragStartX = useRef(0);
  const sliderRef = useRef(null);

  // --- სთეითები (States) - კომპონენტის დინამიური მდგომარეობა ---
  const [imageIndex, setImageIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);
  const [sliderWidth, setSlideWidth] = useState(0);
  const [translate, setTranslate] = useState(0);
  const [add, setAdd] = useState(0);
  // --- სთეითები მოძრაობისა და სტატუსის კონტროლისთვის ---
  const [isDragging, setIsDragging] = useState(false);
  const [isForward, setIsForward] = useState(true);
  const [isPaused, setIsPaused] = useState(false); // აპაუზებს ავტომატურ სრიალს (მაგალითად, როცა მაუსი სურათზეა მიტანილი)

  // --- კონსტანტები ---
  const DRAG_THRESHOLD = 20;
  const GAP = 20;

  // 🔄 1. ეფექტი: პოზიციის (Translate) განახლება სლაიდის ინდექსის მიხედვით
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

  // 🔄 2. ეფექტი: რესპონსივ ლოგიკა (ეკრანის ზომის მიხედვით სლაიდების რაოდენობის და სიგანის გამოთვლა)
  useEffect(() => {
    function updateLayout() {
      if (!sliderRef.current) return;
      const containerWidth = sliderRef.current.getBoundingClientRect().width;
      const windowWidth = window.innerWidth;
      let slidesToShow = 3;
      if (windowWidth < 580) slidesToShow = 1;
      else if (windowWidth < 740) slidesToShow = 2;

      setVisibleSlides(slidesToShow);

      const totalGapsWidth = GAP * (slidesToShow - 1);
      const newSlideWidth = (containerWidth - totalGapsWidth) / slidesToShow;
      setSlideWidth(newSlideWidth); // ვსვამთ თითოეული სურათის ინდივიდუალურ სიგანეს
    }

    updateLayout();
    window.addEventListener("resize", updateLayout); // უსმენს ბრაუზერის ზომის ცვლილებას
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  // დამხმარე ფუნქცია: აერთიანებს მობილურის თითის (Touch) და კომპიუტერის მაუსის (Mouse) კოორდინატებს
  const getClientX = (e) => (e.touches ? e.touches[0].clientX : e.clientX);

  // 🖱️ გადათრევის (Drag) დაწყება
  const onMouseDown = (e) => {
    setIsDragging(true);
    dragStartX.current = getClientX(e);
    wasDraggedForLink.current = false;
  };

  // 🖱️ გადათრევის პროცესი (მაუსის/თითის მოძრაობა)
  const onMouseMove = (e) => {
    if (!isDragging) return;
    const currentX = getClientX(e);
    const delta = currentX - dragStartX.current;

    setTranslate(imageIndex * sliderWidth - delta);

    if (Math.abs(delta) > 5) {
      wasDraggedForLink.current = true;
    }
  };

  // 🖱️ გადათრევის დასრულება (მაუსის/თითის აშვება)
  const onMouseUp = (e) => {
    if (!isDragging) return;
    const currentX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const delta = currentX - dragStartX.current;
    let newIndex = imageIndex;
    if (Math.abs(delta) > DRAG_THRESHOLD) {
      const slidesToMove = Math.max(
        1,
        Math.round(Math.abs(delta) / sliderWidth),
      );
      newIndex =
        delta < 0 ? imageIndex + slidesToMove : imageIndex - slidesToMove;
    }

    const maxIndex = Math.max(0, images.length - visibleSlides);
    newIndex = Math.max(0, Math.min(newIndex, maxIndex)); // ვაზღვევთ, რომ საზღვრებს არ გასცდეს

    setAdd(newIndex);
    setImageIndex(newIndex);
    setTranslate(newIndex * sliderWidth);
    setIsDragging(false); // გადათრევის რეჟიმი ითიშება
  };

  const onMouseLeave = (e) => {
    if (isDragging) onMouseUp(e);
    setIsPaused(false);
  };

  // ⏭️ ფუნქცია: შემდეგ სლაიდზე გადასვლა
  function showNextImage() {
    const maxIndex = images.length - visibleSlides;
    if (imageIndex < maxIndex) {
      const newIndex = imageIndex + 1;
      setAdd(newIndex);
      setImageIndex(newIndex);
      setTranslate(newIndex * sliderWidth);
    } else {
      setIsForward(false);
    }
  }

  // ⏮️ ფუნქცია: წინა სლაიდზე გადასვლა
  function showPrevImage() {
    if (imageIndex > 0) {
      const newIndex = imageIndex - 1;
      setAdd(newIndex);
      setImageIndex(newIndex);
      setTranslate(newIndex * sliderWidth);
    } else {
      setIsForward(true);
    }
  }

  const preventImgDrag = (e) => e.preventDefault();

  // ბლოკავს გადასვლას, თუ მომხმარებელმა ელემენტი რეალურად გადაათრია და უბრალოდ არ დაუკლიკებია
  const handleClick = (e) => {
    if (wasDraggedForLink.current) {
      e.preventDefault();
      return;
    }
  };

  // ზოგადი გამოთვლები სლაიდერისთვის
  const maxIndex = Math.max(0, images.length - visibleSlides);
  const dotsCount = Math.ceil(images.length / visibleSlides);

  return (
    <div className={styles.mainDiv} onDragStart={preventImgDrag}>
      {/* სლაიდერის გარე ჩარჩო, რომელიც უსმენს მაუსისა და მობილურის თითის მოძრაობებს */}
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
        {/* სლაიდერის უშუალო მოძრავი ხაზი (Track) */}
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
          {/* სურათების ბარათების დარენდერება ციკლში */}
          {images.map(({ url, alt, id }, index) => (
            <div
              key={index}
              className={styles.flexDiv}
              style={{ flex: `0 0 ${sliderWidth}px` }}
            >
              <Link onClick={handleClick}>
                {/* ჰოვერის ეფექტის მქონე ფენა სურათზე */}
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
              </Link>
              <img
                className={styles.images}
                src={url}
                alt={alt}
                onDragStart={preventImgDrag}
                loading="lazy"
                style={{
                  visibility:
                    isDragging &&
                    (index < imageIndex || index >= imageIndex + visibleSlides)
                      ? "hidden"
                      : "visible",
                }}
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

export default FirstSlider;
