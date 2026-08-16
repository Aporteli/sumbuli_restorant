import { useEffect, useRef, useState } from "react";
import styles from "./OurObjectsSlider.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

function OurObjectsSlider({ images }) {
  const wasDraggedForLink = useRef(false);
  const dragStartX = useRef(0);
  const sliderRef = useRef(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(5);
  const [slideWidth, setSlideWidth] = useState(0);
  const [translate, setTranslate] = useState(0);
  const [add, setAdd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isForward, setIsForward] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const DRAG_THRESHOLD = 20;
  const GAP = 20;

  useEffect(() => {
    if (isDragging || isPaused) return;
    const interval = setInterval(() => {
      if (isForward) {
        showNextImage();
      } else {
        showPrevImage();
      }
    }, 3000);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    const maxIndex = images.length - visibleSlides;
    let safeIndex = imageIndex;
    if (imageIndex > maxIndex) {
      safeIndex = maxIndex < 0 ? 0 : maxIndex;
      setImageIndex(safeIndex);
    }
    if (!isDragging) {
      setTranslate(imageIndex * slideWidth);
    }
  }, [slideWidth, imageIndex, isDragging]);

  useEffect(() => {
    function updateLayout() {
      if (!sliderRef.current) return;

      const containerWidth = sliderRef.current.getBoundingClientRect().width;
      const windowWidth = window.innerWidth;
      let slidesToShow = 5;
      if (windowWidth < 580) {
        slidesToShow = 1;
      } else if (windowWidth < 990) {
        slidesToShow = 2;
      } else if (windowWidth < 1150) {
        slidesToShow = 3;
      } else if (windowWidth < 1350) {
        slidesToShow = 4;
      }
      setVisibleSlides(slidesToShow);
      const totalGapsWidth = GAP * (slidesToShow - 1);
      const newSlideWidth = (containerWidth - totalGapsWidth) / slidesToShow;

      setSlideWidth(newSlideWidth);
    }

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const onMouseEnter = () => {
    setIsPaused(true);
  };

  const onMouseDown = (e) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
    wasDraggedForLink.current = false;
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    const delta = e.clientX - dragStartX.current;
    setTranslate(imageIndex * slideWidth - delta);
    if (Math.abs(delta) > 0) {
      wasDraggedForLink.current = true;
    }
  };

  const onMouseUp = (e) => {
    if (!isDragging) return;
    const delta = e.clientX - dragStartX.current;
    let newIndex = imageIndex;
    if (Math.abs(delta) < DRAG_THRESHOLD) {
      newIndex = imageIndex;
    } else if (Math.abs(delta) < slideWidth) {
      newIndex = delta < 0 ? imageIndex + 1 : imageIndex - 1;
    } else {
      const slidesToMove = Math.round(Math.abs(delta) / slideWidth);
      newIndex =
        delta < 0 ? imageIndex + slidesToMove : imageIndex - slidesToMove;
    }
    if (newIndex < 0) newIndex = 0;
    const maxIndex = images.length - visibleSlides;
    if (newIndex > maxIndex) newIndex = maxIndex;
    setAdd((prevAdd) => prevAdd + (newIndex - imageIndex));
    setImageIndex(newIndex);
    setTranslate(newIndex * slideWidth);
    setIsDragging(false);
  };

  const onMouseLeave = (e) => {
    onMouseUp(e);
    setIsPaused(false);
  };

  function showNextImage() {
    if (imageIndex < images.length - visibleSlides) {
      const newIndex = imageIndex + 1;
      setAdd((prevAdd) => prevAdd + 1);
      setImageIndex(newIndex);
      setTranslate(newIndex * slideWidth);
    } else {
      setIsForward(false);
    }
  }

  function showPrevImage() {
    if (imageIndex > 0) {
      const newIndex = imageIndex - 1;
      setAdd((prevAdd) => prevAdd - 1);
      setImageIndex(newIndex);
      setTranslate(newIndex * slideWidth);
    } else {
      setIsForward(true);
    }
  }

  const preventImgDrag = (e) => {
    e.preventDefault();
  };

  const handleClick = (e) => {
    if (wasDraggedForLink.current) {
      e.preventDefault(); // Prevents link opening on drag
      return;
    }

    // e.preventDefault();
    // window.location.href = e.currentTarget.href;
  };

  const onTouchStart = (e) => {
    onMouseDown(e);
  };

  const onTouchMove = (e) => {
    onMouseMove(e);
  };

  const onTouchEnd = (e) => {
    onMouseUp(e);
  };

  const onTouchCancel = (e) => {
    onMouseUp(e);
  };

  return (
    <div className={styles.mainDiv} onDragStart={preventImgDrag}>
      <div
        className={styles.outerDiv}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onTouchCancel={onTouchCancel}
      >
        <div
          ref={sliderRef}
          className={styles.sliderDiv}
          style={{
            transform: `translateX(-${translate + GAP * add}px)`,
            transition: isDragging ? "none" : "transform 0.3s ease-in-out",
          }}
        >
          {images.map(({ url, alt, route, title }, index) => (
            <div
              key={index}
              className={styles.flexDiv}
              style={{ flex: `0 0 ${slideWidth}px` }}
            >
              <Link to={route} onClick={handleClick}>
                <div
                  className={styles.textOnImages}
                  onMouseEnter={onMouseEnter}
                  onDragStart={preventImgDrag}
                  style={{
                    visibility:
                      isDragging &&
                      (index < imageIndex || index >= imageIndex + 5)
                        ? "hidden"
                        : "visible",
                  }}
                >
                  <div
                    className={styles.textNameOnImages}
                    onDragStart={preventImgDrag}
                    style={{
                      visibility:
                        isDragging &&
                        (index < imageIndex ||
                          index >= imageIndex + visibleSlides)
                          ? "hidden"
                          : "visible",
                    }}
                  >
                    {title}
                  </div>
                  <div
                    className={styles.metisNaxva}
                    onDragStart={preventImgDrag}
                    style={{
                      visibility:
                        isDragging &&
                        (index < imageIndex ||
                          index >= imageIndex + visibleSlides)
                          ? "hidden"
                          : "visible",
                    }}
                  >
                    See More
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

              <div
                className={styles.horizontalLine}
                onDragStart={preventImgDrag}
              ></div>
              <div
                className={styles.verticalLine}
                onDragStart={preventImgDrag}
              ></div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.btnContainer}>
        <button
          className={`${imageIndex === 0 ? styles.BtnStop : styles.Btn} ${
            styles.left
          }`}
          onClick={showPrevImage}
        >
          <FaChevronLeft />
        </button>
        <button
          className={`${
            imageIndex === images.length - visibleSlides
              ? styles.BtnStop
              : styles.Btn
          } ${styles.right}`}
          onClick={showNextImage}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default OurObjectsSlider;
