import { useEffect, useRef, useState } from "react";
import styles from "./imageSlider.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function ImageSlider({ images }) {
  const dragStartX = useRef(0);
  const initialTranslate = useRef(0);
  const dragDelta = useRef(0);
  const sectionRef = useRef(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [translate, setTranslate] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // დრაგის მგრძნობელობა პიქსელებში
  const DRAG_THRESHOLD = 20;

  useEffect(() => {
    function updateWidth() {
      if (sectionRef.current) {
        const containerWidth = sectionRef.current.getBoundingClientRect().width;
        setSlideWidth(containerWidth);
        setTranslate(imageIndex * (containerWidth + 20));
      }
    }

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [imageIndex]);

  const onMouseDown = (e) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
    initialTranslate.current = translate;
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    const delta = e.clientX - dragStartX.current;
    dragDelta.current = delta;
    setTranslate(initialTranslate.current - delta);
  };

  const onMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    let newIndex = imageIndex;
    if (dragDelta.current < -DRAG_THRESHOLD && imageIndex < images.length - 1) {
      newIndex = imageIndex + 1;
    } else if (dragDelta.current > DRAG_THRESHOLD && imageIndex > 0) {
      newIndex = imageIndex - 1;
    }
    
    setImageIndex(newIndex);
    setTranslate(newIndex * (slideWidth + 20));
    dragDelta.current = 0;
  };

  const onMouseLeave = () => {
    if (isDragging) {
      onMouseUp();
    }
  };

  const showNextImage = () => {
    if (imageIndex < images.length - 1) {
      const newIndex = imageIndex + 1;
      setImageIndex(newIndex);
      setTranslate(newIndex * (slideWidth + 20));
    }
  };

  const showPrevImage = () => {
    if (imageIndex > 0) {
      const newIndex = imageIndex - 1;
      setImageIndex(newIndex);
      setTranslate(newIndex * (slideWidth + 20));
    }
  };

  const preventImgDrag = (e) => {
    e.preventDefault();
  };

  return (
    <section className={styles.section} aria-label="Image Slider">
      <div className={styles.outerDiv} ref={sectionRef}>
        <div
          className={styles.sliderDiv}
          style={{
            transform: `translateX(-${translate}px)`,
            transition: isDragging ? "none" : "transform 0.3s ease-in-out",
          }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
        >
          {images.map(({ url, alt }, index) => (
            <div
              key={url}
              className={styles.imageContainer}
              style={{
                visibility:
                  isDragging && index !== imageIndex ? "hidden" : "visible",
              }}
            >
              <img
                src={url}
                alt={alt}
                aria-hidden={imageIndex !== index}
                className={styles.imgSliderImg}
                onDragStart={preventImgDrag}
                loading="lazy"
              />
              {/* ბუნდოვანი გადასაფარებელი ფონი (Hover ეფექტი) */}
              <div className={styles.divOnImage} />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={showPrevImage}
        className={`${styles.imgSliderBtn} ${styles.left}`}
        aria-label="View Previous Image"
        disabled={imageIndex === 0}
      >
        <FaChevronLeft aria-hidden />
      </button>
      <button
        onClick={showNextImage}
        className={`${styles.imgSliderBtn} ${styles.right}`}
        aria-label="View Next Image"
        disabled={imageIndex === images.length - 1}
      >
        <FaChevronRight aria-hidden />
      </button>
      <div id="after-image-slider-controls" />
    </section>
  );
}