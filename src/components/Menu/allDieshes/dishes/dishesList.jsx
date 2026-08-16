import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiWhatsappFill, RiMessengerFill } from "react-icons/ri";
import GridImages from "../../gridImages";
import TopFixedElement from "./topFixedElement";
import MainDishSection from "./mainDishSection";

import styles from "./dishesList.module.css";
import modalStyles from "./dishesList.module.css";

import MainImage from "../../menuImages/MainImage.webp";

import gridImg1 from "../../menuImages/img-15.webp";
import gridImg2 from "../../menuImages/img-16.webp";
import gridImg3 from "../../menuImages/img-17.webp";
import gridImg4 from "../../menuImages/img-18.webp";
import gridImg5 from "../../menuImages/img-19.webp";
import gridImg6 from "../../menuImages/img-20.webp";
import gridImg7 from "../../menuImages/img-21.webp";
import gridImg8 from "../../menuImages/img-22.webp";
import { FaTimes } from "react-icons/fa";

const GRID_IMAGES = [
  {
    url: gridImg1,
    alt: "Img Fifteen",
    route: "aboutus",
    title: "ლუდის მოედანი",
  },
  {
    url: gridImg2,
    alt: "Img Sixteen",
    route: "restorunts",
    title: "ლუდის მოედანი საბურთალო",
  },
  {
    url: gridImg3,
    alt: "Img Seventeen",
    route: "dilivery",
    title: "ეთნო წისქვილი",
  },
  {
    url: gridImg4,
    alt: "Img Eighteen",
    route: "menu",
    title: "წისქვილი ტერასა",
  },
  { url: gridImg5, alt: "Img Nineteen", route: "blog", title: "სანადიმო" },
  { url: gridImg6, alt: "Img Twenty", route: "csr", title: "ღვინის ეზო" },
  {
    url: gridImg7,
    alt: "Img Twenty-one",
    route: "jobs",
    title: "წყნეთის წისქვილი",
  },
  {
    url: gridImg8,
    alt: "Img Twenty-two",
    route: "contacts",
    title: "მცხეთის წისქვილი",
  },
];

function DishesList() {
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [isSliderSticky, setIsSliderSticky] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeMenu, setActiveMenu] = useState("main");

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  const openModal = () => {
    setScrollPosition(window.scrollY);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    function ShowScrollBox() {
      if (window.scrollY > 800) {
        setShowScrollUp(true);
      } else {
        setShowScrollUp(false);
      }

      if (window.scrollY >= 500) {
        setIsSliderSticky(true);
      } else {
        setIsSliderSticky(false);
      }
    }

    window.addEventListener("scroll", ShowScrollBox);
    return () => window.removeEventListener("scroll", ShowScrollBox);
  }, []);

  const ScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollToCategory = (e, id) => {
    e.preventDefault();

    const targetElement = document.getElementById(id);
    if (targetElement) {
      const offset = 200;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.mainDiv}>
      <a
        href="https://api.whatsapp.com/send?phone=995322005555"
        target="_blank"
        rel="noreferrer"
        className={styles.a_menu_1}
      >
        <div className={styles.whatsAppIcon}>
          <RiWhatsappFill className={styles.whatsApp} />
        </div>
      </a>
      <a
        href="https://www.facebook.com/index.php"
        target="_blank"
        rel="noreferrer"
        className={styles.a_menu_1}
      >
        <div className={styles.massengerIcon}>
          <RiMessengerFill className={styles.massenger} />
        </div>
      </a>
      <Link to="/dilivery">
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

      <div className={styles.mainImageDiv}>
        <img className={styles.mainImage} src={MainImage} alt="mainImage" />
        <div className={styles.divOnMainImageForCover}></div>
        <div className={styles.divForWhiteBoxOnImage}>
          <div className={styles.textOnMainImage}>
            Menu of Sumbuli restaurants
          </div>
          <div className={styles.divForLinkOnImage}>
            <Link to="/" className={styles.mtavariLink}>
              Main
            </Link>
            <span> » </span>
            <Link to="/restorunts" className={styles.obieqtebiLink}>
              Objects
            </Link>
          </div>
        </div>
      </div>

      <TopFixedElement
        isSticky={isSliderSticky}
        openModal={openModal}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />

      {/* ამ დივს ვიყენებ,TopFixedElement ელემენტის ქვევით. ჩნდება მაშინ როცა TopFixedElement ელემენტი გახდება fixed  */}
      <div
        className={`${styles.pseudoElement} ${isSliderSticky ? styles.activePseudo : ""}`}
      ></div>
      <MainDishSection menuType={activeMenu} />
      <GridImages images={GRID_IMAGES} />

      {isModalOpen && (
        <div className={modalStyles.modal}>
          <div
            className={modalStyles.outerModalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <h4 className={modalStyles.modal_dishes_h4_1}>All Categories</h4>
            <div className={modalStyles.categoriesContainer}>
              <button
                className={modalStyles.closeModalButton}
                onClick={closeModal}
              >
                <FaTimes />
              </button>
              <h5 className={modalStyles.sectionTitle}>Dishes</h5>
              <div className={modalStyles.gridContainer}>
                <Link to="#apetaizeri" className={modalStyles.modal_link} onClick={(e) => { closeModal(); handleScrollToCategory(e, 'apetaizeri'); }}><span className={modalStyles.modal_span_1}>Appetizer</span></Link>
                <Link to="#salatebi" className={modalStyles.modal_link} onClick={(e) => { closeModal(); handleScrollToCategory(e, 'salatebi'); }}><span className={modalStyles.modal_span_1}>Salads</span></Link>
                <Link to="#saziaro" className={modalStyles.modal_link} onClick={(e) => { closeModal(); handleScrollToCategory(e, 'saziaro'); }}><span className={modalStyles.modal_span_1}>To Share</span></Link>
                <Link to="#wvnianebi" className={modalStyles.modal_link} onClick={(e) => { closeModal(); handleScrollToCategory(e, 'wvnianebi'); }}><span className={modalStyles.modal_span_1}>Soups</span></Link>
                <Link to="#mtavariKerdzebi" className={modalStyles.modal_link} onClick={(e) => { closeModal(); handleScrollToCategory(e, 'mtavariKerdzebi'); }}><span className={modalStyles.modal_span_1}>Main Dishes</span></Link>
                <Link to="#mtwvadi" className={modalStyles.modal_link} onClick={(e) => { closeModal(); handleScrollToCategory(e, 'mtwvadi'); }}><span className={modalStyles.modal_span_1}>Mtsvadi</span></Link>
                <Link to="#qababi" className={modalStyles.modal_link} onClick={(e) => { closeModal(); handleScrollToCategory(e, 'qababi'); }}><span className={modalStyles.modal_span_1}>Kebab</span></Link>
                <Link to="#qinkali" className={modalStyles.modal_link} onClick={(e) => { closeModal(); handleScrollToCategory(e, 'qinkali'); }}><span className={modalStyles.modal_span_1}>Khinkali</span></Link>
                <Link to="#gumelidan" className={modalStyles.modal_link} onClick={(e) => { closeModal(); handleScrollToCategory(e, 'gumelidan'); }}><span className={modalStyles.modal_span_1}>From The Oven</span></Link>
                <Link to="#garniri" className={modalStyles.modal_link} onClick={(e) => { closeModal(); handleScrollToCategory(e, 'garniri'); }}><span className={modalStyles.modal_span_1}>Side Dishes</span></Link>
                <Link to="#deserti" className={modalStyles.modal_link} onClick={(e) => { closeModal(); handleScrollToCategory(e, 'deserti'); }}><span className={modalStyles.modal_span_1}>Desserts</span></Link>
              </div>

              <h5 className={modalStyles.sectionTitle}>Grill Menu</h5>
              <div className={modalStyles.gridContainer}>
                <Link to="#mtavariKerdzebi" className={modalStyles.modal_link} onClick={(e) => { setActiveMenu('grill'); closeModal(); setTimeout(() => handleScrollToCategory(e, 'mtavariKerdzebi'), 100); }}><span className={modalStyles.modal_span_1}>Appetizer</span></Link>
                <Link to="#fish" className={modalStyles.modal_link} onClick={(e) => { setActiveMenu('grill'); closeModal(); setTimeout(() => handleScrollToCategory(e, 'fish'), 100); }}><span className={modalStyles.modal_span_1}>Fish</span></Link>
                <Link to="#meat" className={modalStyles.modal_link} onClick={(e) => { setActiveMenu('grill'); closeModal(); setTimeout(() => handleScrollToCategory(e, 'meat'), 100); }}><span className={modalStyles.modal_span_1}>Meat</span></Link>
                <Link to="#garniri" className={modalStyles.modal_link} onClick={(e) => { setActiveMenu('grill'); closeModal(); setTimeout(() => handleScrollToCategory(e, 'garniri'), 100); }}><span className={modalStyles.modal_span_1}>Side Dishes</span></Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DishesList;
