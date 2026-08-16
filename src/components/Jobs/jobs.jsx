import styles from "./jobs.module.css";
import { useEffect, useState } from "react";
import { FaCaretLeft, FaCaretRight, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RiWhatsappFill, RiMessengerFill } from "react-icons/ri";
import Slider from "./slider";

import img1 from "./jobsImages/img-1.webp";
import img2 from "./jobsImages/img-2.webp";
import img3 from "./jobsImages/img-3.webp";
import img4 from "./jobsImages/img-4.webp";
import img5 from "./jobsImages/img-5.webp";
import img6 from "./jobsImages/img-6.webp";

const sliderImages = [
  { url: img1, alt: "img1", id: 1 },
  { url: img2, alt: "img2", id: 2 },
  { url: img3, alt: "img3", id: 3 },
  { url: img4, alt: "img4", id: 4 },
  { url: img5, alt: "img5", id: 5 },
  { url: img6, alt: "img6", id: 6 },
];

function Jobs() {
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [animateLeft, setAnimateLeft] = useState(false);
  const [animateRight, setAnimateRight] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPosition}px`;
      document.body.style.width = "100%";
    }

    return () => {
      const currentTop = parseInt(document.body.style.top || "0", 10);
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      if (currentTop < 0) {
        window.scrollTo(0, scrollPosition);
      }
    };
  }, [isModalOpen, scrollPosition]);

  const openModal = (image) => {
    setScrollPosition(window.scrollY);
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
  };

  const nextImage = () => {
    if (!currentImage) return;
    const currentIndex = sliderImages.findIndex(
      (img) => img.id === currentImage.id,
    );
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + 1) % sliderImages.length;
    setCurrentImage(sliderImages[nextIndex]);
  };

  const prevImage = () => {
    if (!currentImage) return;
    const currentIndex = sliderImages.findIndex(
      (img) => img.id === currentImage.id,
    );
    if (currentIndex === -1) return;
    const prevIndex =
      (currentIndex - 1 + sliderImages.length) % sliderImages.length;
    setCurrentImage(sliderImages[prevIndex]);
  };

  const currentIndex = currentImage
    ? sliderImages.findIndex((img) => img.id === currentImage.id) + 1
    : 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setShowScrollUp(true);
      } else {
        setShowScrollUp(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <div className={styles.mainDiv}>
      <a
        href="https://api.whatsapp.com/send?phone=995322005555"
        target="_blank"
        rel="noreferrer"
      >
        <div className={styles.whatsAppIcon}>
          <RiWhatsappFill className={styles.whatsApp} />
        </div>
      </a>
      <a
        href="https://www.facebook.com/index.php"
        target="_blank"
        rel="noreferrer"
      >
        <div className={styles.massengerIcon}>
          <RiMessengerFill className={styles.massenger} />
        </div>
      </a>
      <Link to="/delivery">
        <div className={styles.gamoidzaxe}>Order Now</div>
      </Link>
      <div
        className={`${
          showScrollUp ? styles.showScrollUpDiv : styles.scrollUpDiv
        } ${styles.scrollUpDiv}`}
        onClick={scrollUp}
      >
        <div className={styles.scrollUpIcon}>^</div>
      </div>

      <div className={styles.mainContent}>
        <h1 className={styles.pageTitle}>Open Vacancies</h1>
        <p>We are currently hiring for the following positions:</p>
        <h2>Head Chef</h2>
        <ul className={styles.jobListings}>
          <li className={styles.jobCard}>
            <Link className={styles.jobLinks} to="#">The Golden Hearth</Link>
          </li>

          <li className={styles.jobCard}>
            <Link className={styles.jobLinks} to="#">Lumina Terrace</Link>
          </li>
          <li className={styles.jobCard}>
            <Link className={styles.jobLinks} to="#">Rustic Mill Tavern</Link>
          </li>

          <li className={styles.jobCard}>
            <Link className={styles.jobLinks} to="#">Brewers Courtyard</Link>
          </li>

          <li className={styles.jobCard}>
            <Link className={styles.jobLinks} to="#">Crimson Vineyards</Link>
          </li>

          <li className={styles.jobCard}>
            <Link className={styles.jobLinks} to="#">Grand Feast Hall</Link>
          </li>

          <li className={styles.jobCard}>
            <Link className={styles.jobLinks} to="#">Valley Riverhouse</Link>
          </li>

          <li className={styles.jobCard}>
            <Link className={styles.jobLinks} to="#">Pine and Stone Retreat</Link>
          </li>
        </ul>

        <p>We are currently hiring for the following positions:</p>

        <h2>Open Vacancies</h2>
      </div>

      <Slider images={sliderImages} openModal={openModal} />

      {/* Modal */}
      {isModalOpen && currentImage && (
        <div className={styles.modal} onClick={closeModal}>
          <button
            className={`${styles.prev} ${animateLeft ? styles.buttonDown : ""}`}
            onMouseDown={() => setAnimateLeft(true)}
            onMouseUp={() => setAnimateLeft(false)}
            onMouseLeave={() => setAnimateLeft(false)}
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            <FaCaretLeft />
          </button>

          <button
            className={`${styles.next} ${animateRight ? styles.buttonDown : ""}`}
            onMouseDown={() => setAnimateRight(true)}
            onMouseUp={() => setAnimateRight(false)}
            onMouseLeave={() => setAnimateRight(false)}
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            <FaCaretRight />
          </button>

          <div
            className={styles.outerModalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeModalButton}
              onClick={closeModal}
            >
              <FaTimes />
            </button>

            <div className={styles.modalContent}>
              <div className={styles.imageSlider}>
                <img
                  className={styles.modalImages}
                  src={currentImage.url}
                  alt={currentImage.alt}
                />
              </div>

              <div className={styles.countImages}>
                {currentIndex} of {sliderImages.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Jobs;
