import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlassPlus,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./FirstFlexImages.module.css";

// ────────────────────────────────────────────────
// Desktop layout (>= 750px): ყველა სურათი ერთად
// ────────────────────────────────────────────────
function DesktopGrid({ images, openModal }) {
  return (
    <div className={styles.desktopGrid}>
      {images.map(({ url, alt, id }) => (
        <div key={id} className={styles.desktopImageDiv}>
          <div className={styles.divOnImage}>
            <div className={styles.iconsOnImageDiv}>
              <div
                className={styles.firstIconDiv}
                onClick={() => openModal({ url, alt, id })}
              >
                <div className={styles.iconInner}>
                  <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
                </div>
              </div>
              <div className={styles.secondIconDiv}>
                <div className={styles.iconInner}>
                  <FontAwesomeIcon icon={faUpRightFromSquare} />
                </div>
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
// Tablet layout (480px – 749px): 2 სურათი ჩანს
// ────────────────────────────────────────────────
function TabletSlider({ images, openModal }) {
  const stopClickWhenDrag = useRef(false);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const sliderRef = useRef(null);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [translate, setTranslate] = useState(0);

  const DRAG_THRESHOLD = 20;
  const GAP = 10;

  useEffect(() => {
    function updateWidth() {
      if (sliderRef.current) {
        const containerWidth = sliderRef.current.getBoundingClientRect().width;
        const totalGap = GAP * (2 - 1);
        setSliderWidth((containerWidth - totalGap) / 2);
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleImageClick = (image) => {
    if (stopClickWhenDrag.current) return;
    openModal(image);
  };

  const onMouseDown = (e) => {
    isDragging.current = true;
    dragStartX.current = e.touches ? e.touches[0].pageX : e.clientX;
    stopClickWhenDrag.current = false;
    if (sliderRef.current) sliderRef.current.style.cursor = "grabbing";
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    const currentX = e.touches ? e.touches[0].pageX : e.clientX;
    const delta = currentX - dragStartX.current;
    setTranslate(imageIndex * (sliderWidth + GAP) - delta);
    if (Math.abs(delta) > 5) stopClickWhenDrag.current = true;
  };

  const onMouseUp = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (sliderRef.current) sliderRef.current.style.cursor = "grab";
    const startTranslate = imageIndex * (sliderWidth + GAP);
    const delta = startTranslate - translate;
    let newIndex = imageIndex;
    if (Math.abs(delta) > DRAG_THRESHOLD) {
      newIndex = delta > 0 ? imageIndex - 1 : imageIndex + 1;
    }
    const maxIndex = images.length - 2;
    newIndex = Math.max(0, Math.min(newIndex, maxIndex));
    setImageIndex(newIndex);
    setTranslate(newIndex * (sliderWidth + GAP));
  };

  const onMouseLeave = (e) => {
    if (isDragging.current) onMouseUp(e);
  };

  const preventDrag = (e) => e.preventDefault();

  return (
    <div className={styles.sliderOuter} onDragStart={preventDrag}>
      <div
        ref={sliderRef}
        className={styles.tabletSliderDiv}
        style={{ cursor: isDragging.current ? "grabbing" : "grab" }}
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
        {images.map(({ url, alt, id }) => (
          <div
            key={id}
            onDragStart={preventDrag}
            className={styles.tabletImageDiv}
            style={{
              transform: `translateX(-${translate}px)`,
              transition: isDragging.current
                ? "none"
                : "transform 0.3s ease-in-out",
            }}
          >
            <div className={styles.divOnImage}>
              <div className={styles.iconsOnImageDiv}>
                <div
                  className={styles.firstIconDiv}
                  onClick={() => handleImageClick({ url, alt, id })}
                >
                  <div className={styles.iconInner}>
                    <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
                  </div>
                </div>
                <div className={styles.secondIconDiv}>
                  <div className={styles.iconInner}>
                    <FontAwesomeIcon icon={faUpRightFromSquare} />
                  </div>
                </div>
              </div>
            </div>
            <img
              className={styles.images}
              src={url}
              alt={alt}
              onDragStart={preventDrag}
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <div className={styles.dotsDiv}>
        {images.slice(0, images.length - 1).map((_, i) => (
          <div
            key={i}
            className={imageIndex === i ? styles.dotActive : styles.dot}
            onClick={() => {
              setImageIndex(i);
              setTranslate(i * (sliderWidth + GAP));
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────
// Mobile layout (< 480px): 1 სურათი ჩანს
// ────────────────────────────────────────────────
function MobileSlider({ images, openModal }) {
  const stopClickWhenDrag = useRef(false);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const sliderRef = useRef(null);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [translate, setTranslate] = useState(0);

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
    stopClickWhenDrag.current = false;
    isDragging.current = true;
    dragStartX.current = e.touches ? e.touches[0].clientX : e.clientX;
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    stopClickWhenDrag.current = true;
    const currentX = e.touches ? e.touches[0].clientX : e.clientX;
    const delta = currentX - dragStartX.current;
    setTranslate(imageIndex * sliderWidth - delta);
  };

  const onMouseUp = (e) => {
    if (!isDragging.current) return;
    const currentX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const delta = currentX - dragStartX.current;
    let newIndex = imageIndex;
    if (Math.abs(delta) > DRAG_THRESHOLD) {
      newIndex = delta < 0 ? imageIndex + 1 : imageIndex - 1;
    }
    newIndex = Math.max(0, Math.min(newIndex, images.length - 1));
    setImageIndex(newIndex);
    setTranslate(newIndex * sliderWidth);
    isDragging.current = false;
  };

  const onMouseLeave = (e) => {
    if (isDragging.current) onMouseUp(e);
  };

  const preventDrag = (e) => e.preventDefault();

  return (
    <div
      className={styles.mobileOuter}
      ref={sliderRef}
      onDragStart={preventDrag}
    >
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
            transition: isDragging.current
              ? "none"
              : "transform 0.3s ease-in-out",
          }}
        >
          {images.map(({ url, alt, id }) => (
            <div
              key={id}
              className={styles.mobileImageDiv}
              onDragStart={preventDrag}
            >
              <div className={styles.divOnImage}>
                <div className={styles.iconsOnImageDiv}>
                  <div
                    className={styles.firstIconDiv}
                    onClick={() => {
                      if (!stopClickWhenDrag.current)
                        openModal({ url, alt, id });
                    }}
                  >
                    <div className={styles.iconInner}>
                      <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
                    </div>
                  </div>
                  <div className={styles.secondIconDiv}>
                    <div className={styles.iconInner}>
                      <FontAwesomeIcon icon={faUpRightFromSquare} />
                    </div>
                  </div>
                </div>
              </div>
              <img
                className={styles.images}
                src={url}
                alt={alt}
                onDragStart={preventDrag}
                loading="lazy"
              />
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
              setTranslate(i * sliderWidth);
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────
// მთავარი კომპონენტი — windowWidth-ის მიხედვით
// ────────────────────────────────────────────────
function FirstFlexImages({ images, openModal, windowWidth }) {
  if (windowWidth >= 800) {
    return <DesktopGrid images={images} openModal={openModal} />;
  } else if (windowWidth >= 480) {
    return <TabletSlider images={images} openModal={openModal} />;
  } else {
    return <MobileSlider images={images} openModal={openModal} />;
  }
}

export default FirstFlexImages;
