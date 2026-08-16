import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import styles from "./WisqvilisMenu.module.css";
import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";

function WisqvilisMenu({ images }) {
  const [isDragging, setIsDragging] = useState(false);
  const [visibleSlides, setVisibleSlides] = useState(5);
  const [dragStartX, setDragStartX] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [translate, setTranslate] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [add, setAdd] = useState(0);

  const wasDraggedForLink = useRef(false);
  const sliderRef = useRef(null);

  const DRAG_THRESHOLD = 20;
  const GAP = 20;
  const AUTOPLAY_SPEED = 3000;

  const updateLayout = useCallback(() => {
    if (!sliderRef.current) return;
    const containerWidth = sliderRef.current.getBoundingClientRect().width;
    const windowWidth = window.innerWidth;
    
    let slidesToShow = 5;
    if (windowWidth < 580) slidesToShow = 1;
    else if (windowWidth < 990) slidesToShow = 2;
    else if (windowWidth < 1150) slidesToShow = 3;
    else if (windowWidth < 1350) slidesToShow = 4;

    setVisibleSlides(slidesToShow);
    const totalGapsWidth = GAP * (slidesToShow - 1);
    const newSlideWidth = (containerWidth - totalGapsWidth) / slidesToShow;
    setSlideWidth(newSlideWidth);
  }, []);

  useEffect(() => {
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, [updateLayout]);

  useEffect(() => {
    const maxIndex = Math.max(0, images.length - visibleSlides);
    let safeIndex = imageIndex;
    
    if (imageIndex > maxIndex) {
      safeIndex = maxIndex;
      setImageIndex(safeIndex);
    }
    
    if (!isDragging) {
      setTranslate(safeIndex * slideWidth);
    }
  }, [slideWidth, imageIndex, isDragging, images.length, visibleSlides]);

  // ერთიანი დამხმარე ფუნქცია მაუსის და სენსორის კოორდინატებისთვის
  const getClientX = (e) => (e.touches ? e.touches[0].clientX : e.clientX);

  const onDragStart = (e) => {
    setIsDragging(true);
    wasDraggedForLink.current = false;
    setDragStartX(getClientX(e));
  };

  const onDragMove = (e) => {
    if (!isDragging) return;
    const currentX = getClientX(e);
    const delta = currentX - dragStartX;
    setTranslate(imageIndex * slideWidth - delta);
    wasDraggedForLink.current = true;
  };

  const onDragEnd = (e) => {
    if (!isDragging) return;
    
    // მობილურზე თითის აშვებისას touch-ის ლოკაცია changedTouches-შია
    const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const delta = endX - dragStartX;
    
    let newIndex = imageIndex;
    const abs = Math.abs(delta);
    
    if (abs >= DRAG_THRESHOLD) {
      if (abs < slideWidth) {
        newIndex = delta < 0 ? imageIndex + 1 : imageIndex - 1;
      } else {
        const slidesToMove = Math.round(abs / slideWidth);
        newIndex = delta < 0 ? imageIndex + slidesToMove : imageIndex - slidesToMove;
      }
    }
    
    const maxIndex = Math.max(0, images.length - visibleSlides);
    newIndex = Math.max(0, Math.min(newIndex, maxIndex));
    
    setAdd((prev) => prev + (newIndex - imageIndex));
    setImageIndex(newIndex);
    setTranslate(newIndex * slideWidth);
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging || isPaused) return;
    
    const interval = setInterval(() => {
      if (isForward) {
        if (imageIndex < images.length - visibleSlides) {
          showNextImage();
        } else {
          setIsForward(false);
        }
      } else {
        if (imageIndex > 0) {
          showPrevImage();
        } else {
          setIsForward(true);
        }
      }
    }, AUTOPLAY_SPEED);

    return () => clearInterval(interval);
  }, [imageIndex, isDragging, isPaused, isForward, slideWidth, visibleSlides, images.length]);

  const showNextImage = () => {
    if (imageIndex < images.length - visibleSlides) {
      setTranslate((imageIndex + 1) * slideWidth);
      setImageIndex((prev) => prev + 1);
      setAdd((prev) => prev + 1);
    }
  };

  const showPrevImage = () => {
    if (imageIndex > 0) {
      setTranslate((imageIndex - 1) * slideWidth);
      setImageIndex((prev) => prev - 1);
      setAdd((prev) => prev - 1);
    }
  };

  const preventImgDrag = (e) => e.preventDefault();

  return (
    <div>
      <div className={styles.mainDiv} onDragStart={preventImgDrag}>
        <div
          className={styles.outerDiv}
          onMouseDown={onDragStart}
          onMouseMove={onDragMove}
          onMouseUp={onDragEnd}
          onMouseLeave={(e) => {
            onDragEnd(e);
            setIsPaused(false);
          }}
          onTouchStart={onDragStart}
          onTouchMove={onDragMove}
          onTouchEnd={onDragEnd}
          onTouchCancel={onDragEnd}
        >
          <div
            ref={sliderRef}
            className={styles.sliderDiv}
            style={{
              transform: `translateX(-${translate + GAP * add}px)`,
              transition: isDragging ? "none" : "transform 0.3s ease-in-out",
            }}
          >
            {images.map(({ url, alt, route, title }, index) => {
              const isHidden = isDragging && (index < imageIndex || index >= imageIndex + visibleSlides);
              
              return (
                <div
                  key={index} 
                  className={styles.flexDiv}
                  style={{ flex: `0 0 ${slideWidth}px` }}
                >
                  <Link
                    to={route}
                    onClick={(e) => {
                      if (wasDraggedForLink.current) {
                        e.preventDefault();
                      }
                    }}
                  >
                    <div
                      className={styles.textOnImages}
                      onMouseEnter={() => setIsPaused(true)}
                      onDragStart={preventImgDrag}
                      style={{ visibility: isHidden ? "hidden" : "visible" }}
                    >
                      <div
                        className={styles.textNameOnImage}
                        onDragStart={preventImgDrag}
                      >
                        {title || "დასახელების გარეშე"}
                      </div>
                      <div
                        className={styles.metisNaxva}
                        onDragStart={preventImgDrag}
                      >
                        See More
                      </div>
                      <div
                        className={styles.horizontalLine}
                        onDragStart={preventImgDrag}
                      ></div>
                      <div
                        className={styles.verticalLine}
                        onDragStart={preventImgDrag}
                      ></div>
                    </div>
                  </Link>
                  <img
                    className={styles.images}
                    src={url}
                    alt={alt}
                    onDragStart={preventImgDrag}
                    style={{ visibility: isHidden ? "hidden" : "visible" }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <button
        onClick={showPrevImage}
        className={`${imageIndex === 0 ? styles.BtnStop : styles.Btn} ${styles.left}`}
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={showNextImage}
        className={`${
          imageIndex >= images.length - visibleSlides
            ? styles.BtnStop
            : styles.Btn
        } ${styles.right}`}
      >
        <FaChevronRight />
      </button>
    </div>
  );
}

export default WisqvilisMenu;