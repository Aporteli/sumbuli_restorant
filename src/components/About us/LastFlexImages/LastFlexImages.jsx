import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlassPlus,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./LastFlexImages.module.css";

// ────────────────────────────────────────────────
// Desktop layout (>= 480px): 2 სურათი ერთად
// ────────────────────────────────────────────────
function DesktopGrid({ images, openModal }) {
  return (
    <div className={styles.outerDiv}>
      {images.map(({ url, alt, id }, index) => (
        <div key={index} className={styles.innerDiv}>
          <div className={styles.divForHover}>
            <div className={styles.iconsDiv}>
              <div
                className={styles.firstIconDiv}
                onClick={() => openModal({ url, alt, id })}
              >
                <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
              </div>
              <div className={styles.secondIconDiv}>
                <FontAwesomeIcon icon={faUpRightFromSquare} />
              </div>
            </div>
          </div>
          <img className={styles.images} src={url} alt={alt} loading="lazy" />
        </div>
      ))}
    </div>
  );
}

// ────────────────────────────────────────────────
// Mobile layout (< 480px): 1 სურათი ჩანს, drag
// ────────────────────────────────────────────────
function MobileSlider({ images, openModal }) {
  const dragStartX = useRef(0);
  const isDragging = useRef(false);
  const stopClickWhenDrag = useRef(false);
  const sliderRef = useRef(null);
  const translateRef = useRef(0);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [translate, setTranslate] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const DRAG_THRESHOLD = 20;

  useEffect(() => {
    function updateWidth() {
      if (sliderRef.current) {
        setSliderWidth(sliderRef.current.getBoundingClientRect().width);
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const onMouseDown = (e) => {
    isDragging.current = true;
    stopClickWhenDrag.current = false;
    dragStartX.current = e.touches ? e.touches[0].clientX : e.clientX;
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    stopClickWhenDrag.current = true;
    const currentX = e.touches ? e.touches[0].clientX : e.clientX;
    const delta = currentX - dragStartX.current;
    const newTranslate = imageIndex * sliderWidth - delta;
    translateRef.current = newTranslate;
    setTranslate(newTranslate);
  };

  const onMouseUp = (e) => {
    if (!isDragging.current) return;
    const currentX = e.changedTouches
      ? e.changedTouches[0].clientX
      : e.clientX;
    const delta = currentX - dragStartX.current;
    let newIndex = imageIndex;
    if (Math.abs(delta) > DRAG_THRESHOLD) {
      newIndex = delta < 0 ? imageIndex + 1 : imageIndex - 1;
    }
    newIndex = Math.max(0, Math.min(newIndex, images.length - 1));
    setImageIndex(newIndex);
    const newTranslate = newIndex * sliderWidth;
    translateRef.current = newTranslate;
    setTranslate(newTranslate);
    isDragging.current = false;
  };

  const onMouseLeave = (e) => {
    if (isDragging.current) onMouseUp(e);
  };

  const preventDrag = (e) => e.preventDefault();

  return (
    <div className={styles.mobileOuter} ref={sliderRef}>
      <div
        className={styles.mobileSliderDiv}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onTouchStart={onMouseDown}
        onTouchMove={onMouseMove}
        onTouchEnd={onMouseUp}
        onTouchCancel={onMouseUp}
        onDragStart={preventDrag}
      >
        <div
          className={styles.mobileFlexDiv}
          style={{
            transform: `translateX(-${translate}px)`,
            transition: isDragging.current ? "none" : "transform 0.3s ease-in-out",
          }}
        >
          {images.map(({ url, alt, id }, index) => (
            <div key={index} className={styles.mobileImageDiv} onDragStart={preventDrag}>
              <div className={styles.divForHover}>
                <div className={styles.iconsDiv}>
                  <div
                    className={styles.firstIconDiv}
                    onClick={() => {
                      if (!stopClickWhenDrag.current) openModal({ url, alt, id });
                    }}
                  >
                    <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
                  </div>
                  <div className={styles.secondIconDiv}>
                    <FontAwesomeIcon icon={faUpRightFromSquare} />
                  </div>
                </div>
              </div>
              <img className={styles.images} src={url} alt={alt} onDragStart={preventDrag} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.dotsDiv}>
        {images.map((_, i) => (
          <div
            key={i}
            className={imageIndex === i ? styles.dotActive : styles.dot}
            onClick={() => {
              setImageIndex(i);
              const newTranslate = i * sliderWidth;
              translateRef.current = newTranslate;
              setTranslate(newTranslate);
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────
// მთავარი კომპონენტი
// ────────────────────────────────────────────────
function LastFlexImages({ images, openModal, windowWidth }) {
  if (windowWidth >= 480) {
    return <DesktopGrid images={images} openModal={openModal} />;
  } else {
    return <MobileSlider images={images} openModal={openModal} />;
  }
}

export default LastFlexImages;