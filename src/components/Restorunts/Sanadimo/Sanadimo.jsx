import { Link } from "react-router-dom";
import { RiWhatsappFill, RiMessengerFill } from "react-icons/ri";
import styles from "./Sanadimo.module.css";
import { useEffect, useState } from "react";
import MainComponent from "../MainComponent";
import { FaCaretLeft, FaCaretRight, FaTimes } from "react-icons/fa";
import MainImage from "./sanadimoImages/MainImage.webp";
import featuredImage from "./sanadimoImages/featuredImage.webp";
import TextForMiddlePage from "./textForMiddlePage";
import ImageSlider from "./Sivrceebi/Sivrceebi.jsx"; // Sivrceebi-ს ნაცვლად
import {
  FIRST_SLIDER,
  SIVRCEEBI_SLIDER,
  IMAGES_RESTORANT,
} from "./sanadimoImageData"; // მონაცემების იმპორტი

// გაუმჯობესებული ლოგიკა მოდალის ნავიგაციისთვის
const getIndexAndLength = (currentImage) => {
  if (!currentImage) return { index: -1, total: 0, targetArray: [] }; // თუ სურათი არ არის, ვბრუნდებით

  // ვპოულობთ, რომელ მასივს ეკუთვნის მიმდინარე სურათი
  const allArrays = {
    first: FIRST_SLIDER,
    sivrceebi: SIVRCEEBI_SLIDER,
  };

  // ვეძებთ მასივის სახელს, რომელშიც currentImage.id მოიძებნა
  const targetArrayName = Object.keys(allArrays).find((key) =>
    allArrays[key].some((img) => img.id === currentImage.id),
  );

  // თუ ვიპოვეთ, ვიყენებთ შესაბამის მასივს
  const targetArray = targetArrayName ? allArrays[targetArrayName] : [];

  // ვპოულობთ ინდექსს და მასივის სიგრძეს
  const index = targetArray.findIndex((img) => img.id === currentImage.id) + 1;
  const total = targetArray.length;

  return { index, total, targetArray };
};

function Sanadimo() {
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

  // მიტანის სერვისის ღილაკის ფუნქცია
  const handleClick = (e) => {
    window.location.href = e.currentTarget.href;
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
          className={styles.a_sanadimo_1}
        >
          <div className={styles.whatsAppIcon}>
            <RiWhatsappFill className={styles.whatsApp} />
          </div>
        </a>
        <a
          href="https://www.facebook.com/index.php"
          target="_blank"
          rel="noreferrer"
          className={styles.a_sanadimo_1}
        >
          <div className={styles.massengerIcon}>
            <RiMessengerFill className={styles.massenger} />
          </div>
        </a>
        <Link to="/delivery" onClick={handleClick}>
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
      </div>

      {/* სივრცეები (სლაიდერი) */}
      <div className={styles.sivrceei}>
        <h1 className={styles.sectionTitle}>Spaces</h1>
        <ImageSlider images={SIVRCEEBI_SLIDER} openModal={openModal} />{" "}
        {/* ვიყენებთ ახალ კომპონენტს */}
      </div>

      {/* სხვა ობიექტები */}
      <div className={styles.restoruntSection}>
        <h1 className={styles.chveni_obieqtebi}>Other Objects</h1>
        <div className={styles.shortDivLine}></div>
        <MainComponent images={IMAGES_RESTORANT} isSpecial={true} />
      </div>

      {/* მოდალი */}
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
            <button className={styles.closeModalButton} onClick={closeModal}>
              <FaTimes />
            </button>

            <div className={styles.modalContent}>
              <div className={styles.imageSlider}>
                <img
                  className={styles.modalImages}
                  src={currentImage.url}
                  alt={currentImage.alt}
                  loading="lazy"
                />
              </div>

              {/* განახლებული დინამიური ქაუნთერი */}
              <div className={styles.countImages}>
                {index > 0 ? `${index} of ${total}` : ""}{" "}
                {/* ვალიდაცია, რომ მხოლოდ დადებითი ინდექსი გამოჩნდეს */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sanadimo;
