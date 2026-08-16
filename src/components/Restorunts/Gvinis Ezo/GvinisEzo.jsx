import { Link } from "react-router-dom";
import { RiWhatsappFill, RiMessengerFill } from "react-icons/ri";
import styles from "./GvinisEzo.module.css";
import modalStyles from "./GvinisEzo.module.css";
import { useEffect, useState } from "react";
import MainComponent from "../MainComponent";
import { FaCaretLeft, FaCaretRight, FaTimes } from "react-icons/fa";

import MainImage from "./gvinisEzoImages/MainImage.webp";
import featuredImage from "./gvinisEzoImages/featuredImage.webp";
import TextForMiddlePage from "./textForMiddlePage";
import Adresses from "./Adresses";
import Sivrceebi from "./Sivrceebi/Sivrceebi";

import Img1 from "./gvinisEzoImages/Img 1.webp";
import Img2 from "./gvinisEzoImages/Img 2.webp";
import Img3 from "./gvinisEzoImages/Img 3.webp";
import Img4 from "./gvinisEzoImages/Img 4.webp";

import Img6 from "./gvinisEzoImages/Img 6.webp";
import Img7 from "./gvinisEzoImages/Img 7.webp";
import Img8 from "./gvinisEzoImages/Img 8.webp";
import Img9 from "./gvinisEzoImages/Img 9.webp";

import Img12 from "../1Images/img-2.webp";
import Img13 from "../1Images/img-3.webp";
import Img14 from "../1Images/img-4.webp";
import Img15 from "../1Images/img-5.webp";
import Img16 from "../1Images/img-6.webp";
import Img17 from "../1Images/img-7.webp";
import Img18 from "../1Images/img-8.webp";
import Img19 from "../1Images/img-9.webp";
import Img20 from "../1Images/img-10.webp";

// მასივების გლობალური დეკლარაცია
const FIRST_SLIDER = [
  { url: Img1, alt: "Img four", id: 1 },
  { url: Img2, alt: "Img five", id: 2 },
  { url: Img3, alt: "Img six", id: 3 },
  { url: Img4, alt: "Img one", id: 4 },

];

const SIVRCEEBI_SLIDER = [
  { url: Img6, alt: "Img four", id: 6 },
  { url: Img7, alt: "Img five", id: 7 },
  { url: Img8, alt: "Img six", id: 8 },
  { url: Img9, alt: "Img five", id: 9 },
];

const IMAGES_RESTORANT = [
  { url: Img19, alt: "Img two", id: 19 },
  { url: Img12, alt: "Img five", id: 12 },
  { url: Img13, alt: "Img six", id: 13 },
  { url: Img14, alt: "Img one", id: 14 },
  { url: Img15, alt: "Img two", id: 15 },
  { url: Img16, alt: "Img two", id: 16 },
  { url: Img17, alt: "Img two", id: 17 },
  { url: Img18, alt: "Img two", id: 18 },
  { url: Img20, alt: "Img two", id: 20 },
];

// ვარიანტი 1: დინამიური მასივისა და ინდექსის პოვნა ID-ის მიხედვით
const getIndexAndLength = (currentImage) => {
  if (!currentImage) return { index: 0, total: 0, targetArray: [] };

  let targetArray = [];

  if (
    (currentImage.id >= 1 && currentImage.id <= 5) ||
    (currentImage.id >= 6 && currentImage.id <= 10)
  ) {
    targetArray = [...FIRST_SLIDER, ...SIVRCEEBI_SLIDER];
  }

  const index = targetArray.findIndex((img) => img.id === currentImage.id) + 1;
  const total = targetArray.length;

  return { index, total, targetArray };
};

function GvinisEzo() {
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [animateLeft, setAnimateLeft] = useState(false);
  const [animateRight, setAnimateRight] = useState(false);

  // ბოდის სქროლის მართვა მოდალის გახსნა/დახურვისას
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

  // ნავიგაცია მოდალში: შემდეგი და წინა სურათი
  const nextImage = () => {
    const { targetArray } = getIndexAndLength(currentImage);
    if (!targetArray.length) return;
    const currentIndex = targetArray.findIndex(
      (img) => img.id === currentImage.id,
    );
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + 1) % targetArray.length;
    setCurrentImage(targetArray[nextIndex]);
  };

  const prevImage = () => {
    const { targetArray } = getIndexAndLength(currentImage);
    if (!targetArray.length) return;
    const currentIndex = targetArray.findIndex(
      (img) => img.id === currentImage.id,
    );
    if (currentIndex === -1) return;
    const prevIndex =
      (currentIndex - 1 + targetArray.length) % targetArray.length;
    setCurrentImage(targetArray[prevIndex]);
  };

  useEffect(() => {
    function ShowScrollBox() {
      if (window.scrollY > 800) {
        setShowScrollUp(true);
      } else {
        setShowScrollUp(false);
      }
    }
    window.addEventListener("scroll", ShowScrollBox);
    return () => window.removeEventListener("scroll", ShowScrollBox);
  }, []);

  const ScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // მიმდინარე ინფორმაცია აქტიურ მასივზე
  const { index, total } = getIndexAndLength(currentImage);

  return (
    <div className={styles.container}>
      <div className={styles.mainDiv}>
        {/* --- მცურავი კონტაქტის ღილაკები --- */}
        <a
          href="https://api.whatsapp.com/send?phone=995322005555"
          target="_blank"
          rel="noreferrer"
          className={styles.a_gvinis_1}
        >
          <div className={styles.whatsAppIcon}>
            <RiWhatsappFill className={styles.whatsApp} />
          </div>
        </a>
        <a
          href="https://www.facebook.com/index.php"
          target="_blank"
          rel="noreferrer"
          className={styles.a_gvinis_1}
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
          onClick={ScrollUp}
        >
          <div className={styles.scrollUpIcon}>^</div>
        </div>

        {/* --- მთავარი სურათი --- */}
        <div className={styles.mainImageDiv}>
          <img className={styles.mainImage} src={MainImage} alt="mainImage" loading="lazy" />
          <div className={styles.divOnMainImageForCover}></div>
          <div className={styles.divForWhiteBoxOnImage}>
            <div className={styles.textOnMainImage}>
              Sumbuli Group Objects
            </div>
            <div className={styles.divForLinkOnImage}>
              <Link to="/" className={styles.navLink}>
                Main
              </Link>
              <span> » </span>
              <Link to="/restorunts" className={styles.navLink}>
                Objects
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* --- შუა სექცია --- */}
      <div className={styles.middleDiv}>
        <div className={styles.divForImageAndText}>
          <div className={styles.divForImageAndFrame}>
            <div className={styles.frameForImageInMiddleDiv}></div>
            <div className={styles.imageInFrameDiv}>
              <img
                className={styles.middleImage}
                src={featuredImage}
                alt="Terrace"
                loading="lazy"
              />
            </div>
          </div>
          <div className={styles.divForTextAndSlider}>
            <TextForMiddlePage images={FIRST_SLIDER} openModal={openModal} />
          </div>
        </div>
        <div className={styles.outerDivForAdresses}>
          <Adresses />
        </div>
      </div>

      {/* სივრცეები (სლაიდერი) */}
      <div className={styles.sivrceei}>
        <h1 className={styles.sectionTitle}>Spaces</h1>
        <Sivrceebi images={SIVRCEEBI_SLIDER} openModal={openModal} />
      </div>

      {/* სხვა ობიექტები */}
      <div className={styles.restoruntSection}>
        <h1 className={styles.chveni_obieqtebi}>Other Objects</h1>
        <div className={styles.shortDivLine}></div>
        <MainComponent images={IMAGES_RESTORANT} isSpecial={true} />
      </div>

      {/* მოდალი */}
      {isModalOpen && currentImage && (
        <div className={modalStyles.modal} onClick={closeModal}>
          <button
            className={`${modalStyles.prev} ${animateLeft ? modalStyles.buttonDown : ""}`}
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
            className={`${modalStyles.next} ${animateRight ? modalStyles.buttonDown : ""}`}
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
            className={modalStyles.outerModalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={modalStyles.closeModalButton}
              onClick={closeModal}
            >
              <FaTimes />
            </button>

            <div className={modalStyles.modalContent}>
              <div className={modalStyles.imageSlider}>
                <img
                  className={modalStyles.modalImages}
                  src={currentImage.url}
                  alt={currentImage.alt}
                  loading="lazy"
                />
              </div>

              {/* განახლებული დინამიური ქაუნთერი */}
              <div className={modalStyles.countImages}>
                {index} of {total}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GvinisEzo;
