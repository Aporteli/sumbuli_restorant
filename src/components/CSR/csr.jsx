import styles from "./csr.module.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiWhatsappFill, RiMessengerFill } from "react-icons/ri";

import MainImage from "./CSRImages/MainImage.webp";
import MainContent from "./mainContent";

function CSR() {
  const [showScrollUp, setShowScrollUp] = useState(false);

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

      <div className={styles.mainImageDiv}>
        <img className={styles.mainImage} src={MainImage} alt="mainImage" loading="lazy" />
        <div className={styles.divOnMainImageForCover}></div>
        <div className={styles.divForWhiteBoxOnImage}>
          <div className={styles.textOnMainImage}>CSR</div>
          <div className={styles.divForLinkOnImage}>
            <Link to="/" className={styles.mtavariLink}>
              Main
            </Link>
            <span> » </span>
            <Link to="/restorunts" className={styles.obieqtebiLink}>
              CSR
            </Link>
          </div>
        </div>
      </div>

      <MainContent />
    </div>
  );
}

export default CSR;
