import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import styles from "./jildoebi.module.css";
import { useRef, useState, useEffect } from "react";

function Jildoebi({ images, slideWidth = 190 }) {
  const dragStartX = useRef(0);
  const isDragging = useRef(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [translate, setTranslate] = useState(0);
  
  // დინამიური maxOffset ეკრანის ზომის მიხედვით
  const [maxOffset, setMaxOffset] = useState(5);

  const DRAG_THRESHOLD = 20;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        setMaxOffset(2); // მობილურზე 2 სურათი ჩანს, შესაბამისად ბოლომდე გადაახვევს
      } else if (window.innerWidth <= 880) {
        setMaxOffset(3); // ტაბლეტზე 3 ჩანს
      } else {
        setMaxOffset(5); // დესკტოპზე 5 ჩანს
      }
    };

    handleResize(); // პირველადი შემოწმება
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onMouseDown = (e) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    const delta = e.clientX - dragStartX.current;
    setTranslate(imageIndex * slideWidth - delta);
  };

  const onMouseUp = (e) => {
    if (!isDragging.current) return;
    let newIndex = imageIndex;
    const delta = e.clientX - dragStartX.current;
    const abs = Math.abs(delta);
    
    if (abs < DRAG_THRESHOLD) {
      newIndex = imageIndex;
    } else if (abs < slideWidth) {
      newIndex = delta < 0 ? imageIndex + 1 : imageIndex - 1;
    } else {
      const slidesToMove = Math.round(abs / slideWidth);
      newIndex = delta < 0 ? imageIndex + slidesToMove : imageIndex - slidesToMove;
    }

    if (newIndex < 0) newIndex = 0;
    if (newIndex > images.length - maxOffset) newIndex = images.length - maxOffset;
    
    setTranslate(newIndex * slideWidth);
    setImageIndex(newIndex);
    isDragging.current = false;
  };

  const onMouseLeave = (e) => {
    onMouseUp(e);
  };

  function nextImage() {
    if (imageIndex < images.length - maxOffset) {
      setTranslate((imageIndex + 1) * slideWidth);
      setImageIndex(imageIndex + 1);
    }
  }

  function prevImage() {
    if (imageIndex > 0) {
      setTranslate((imageIndex - 1) * slideWidth);
      setImageIndex(imageIndex - 1);
    }
  }

  const preventDrag = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.lastBlackDivAboveFooter}>
      <div className={styles.jildoebiOuterDiv1}>
        <div className={styles.jildoebiH1Div}>
          <h1 className={styles.jildoebi}>Awards</h1>
          <div className={styles.jildoebiLine}></div>
        </div>
        <div className={styles.jilodebiBtns}>
          <button onClick={prevImage} className={`${styles.Btn} ${styles.left}`}>
            <FaChevronLeft />
          </button>
          <button onClick={nextImage} className={`${styles.Btn} ${styles.right}`}>
            <FaChevronRight />
          </button>
        </div>
        <div
          className={styles.jildoebiOuterDiv}
          onDragStart={preventDrag}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
        >
          {images.map((img, index) => (
            <div
              key={index}
              style={{
                transform: `translateX(-${translate}px)`,
                transition: isDragging.current ? "none" : "transform 0.2s ease-in-out",
              }}
              className={styles.jildoebiImgDivs}
              onDragStart={preventDrag}
            >
              <img
                className={styles.images}
                src={img.url}
                alt={img.alt}
                onDragStart={preventDrag}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Jildoebi;