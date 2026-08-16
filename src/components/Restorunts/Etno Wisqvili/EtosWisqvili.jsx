import { Link } from "react-router-dom";
import { RiWhatsappFill, RiMessengerFill } from "react-icons/ri";
import styles from "./EtosWisqvili.module.css";
import modalStyles from "./EtosWisqvili.module.css";
import { useEffect, useState } from "react";
import MainComponent from "../MainComponent";
import { FaCaretLeft, FaCaretRight, FaTimes } from "react-icons/fa";

import MainImage from "./etnoImages/MainImage.webp";
import featuredImage from "./etnoImages/featuredImage.webp";
import TextForMiddlePage from "./textForMiddlePage";
import Adresses from "./Adresses";
import Sivrceebi from "./Sivrceebi/Sivrceebi";

import Img1 from "./etnoImages/Img 1.webp";
import Img2 from "./etnoImages/Img 2.webp";
import Img3 from "./etnoImages/Img 3.webp";
import Img4 from "./etnoImages/Img 4.webp";
import Img5 from "./etnoImages/Img 5.webp";

import Img12 from "../1Images/img-2.webp";
import Img13 from "../1Images/img-3.webp";
import Img14 from "../1Images/img-4.webp";
import Img15 from "../1Images/img-5.webp";
import Img16 from "../1Images/img-6.webp";
import Img17 from "../1Images/img-7.webp";
import Img18 from "../1Images/img-8.webp";
import Img19 from "../1Images/img-9.webp";
import Img20 from "../1Images/img-10.webp";

import Img21 from "./etnoImages/Img 12.webp";
import Img22 from "./etnoImages/Img 13.webp";
import Img23 from "./etnoImages/Img 14.webp";

import Img24 from "./etnoImages/Img 15.webp";
import Img25 from "./etnoImages/Img 16.webp";
import Img26 from "./etnoImages/Img 17.webp";

// მასივების გლობალური დეკლარაცია
const FIRST_SLIDER = [
  { url: Img1, alt: "Img four", id: 1 },
  { url: Img2, alt: "Img five", id: 2 },
  { url: Img3, alt: "Img six", id: 3 },
  { url: Img4, alt: "Img one", id: 4 },
  { url: Img5, alt: "Img two", id: 5 },
];

const SIVRCEEBI_SLIDER = [
  { url: Img21, alt: "Img four", id: 20 },
  { url: Img22, alt: "Img five", id: 21 },
  { url: Img23, alt: "Img six", id: 22 },
];

const MUSIC_PROGGRAM = [
  { url: Img24, alt: "Img four", id: 23 },
  { url: Img25, alt: "Img five", id: 24 },
  { url: Img26, alt: "Img six", id: 25 },
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
    (currentImage.id >= 1 && currentImage.id <= 11) ||
    (currentImage.id >= 20 && currentImage.id <= 22) ||
    (currentImage.id >= 23 && currentImage.id <= 25)
  ) {
    targetArray = [...FIRST_SLIDER, ...SIVRCEEBI_SLIDER, ...MUSIC_PROGGRAM];
  }

  const index = targetArray.findIndex((img) => img.id === currentImage.id) + 1;
  const total = targetArray.length;

  return { index, total, targetArray };
};

function EtosWisqvili() {
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
          className={styles.a_etno_1}
        >
          <div className={styles.whatsAppIcon}>
            <RiWhatsappFill className={styles.whatsApp} />
          </div>
        </a>
        <a
          href="https://www.facebook.com/index.php"
          target="_blank"
          rel="noreferrer"
          className={styles.a_etno_1}
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
             Sumbuli Objects
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
          <div className={styles.adressesOuter}>
            <h1 className={styles.adressesTitle}>
              Music and Cultural Program:
            </h1>
            <p className={styles.etos_text_p_1}>
              Every day, from 20:00 to midnight, free classical music and Georgian
              dance performances.
            </p>
            <Adresses />
          </div>
        </div>
      </div>

      {/* სივრცეები (სლაიდერი) */}
      <div className={styles.sivrceei}>
        <h1 className={styles.sectionTitle}>Events</h1>
        <Sivrceebi images={SIVRCEEBI_SLIDER} openModal={openModal} />
      </div>

      {/* მუსიკალური პროგრამა (სლაიდერი) */}
      <div className={styles.sliderMusic}>
        <h1 className={styles.sectionTitle}>Music Program</h1>
        <Sivrceebi images={MUSIC_PROGGRAM} openModal={openModal} />
      </div>

      {/* სხვა ობიექტები */}
      <div className={styles.restoruntSection}>
        <h1 className={styles.chveni_obieqtebi}>Our Objects</h1>
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

export default EtosWisqvili;
