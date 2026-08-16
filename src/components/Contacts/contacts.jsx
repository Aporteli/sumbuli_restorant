import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiWhatsappFill, RiMessengerFill } from "react-icons/ri";

import styles from "./contacts.module.css";

import MainImage from "./contactsImages/MainImage.webp";

function Contacts() {
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
          <div className={styles.textOnMainImage}>
            Sumbuli Group
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
      <div className={styles.dividerContainer}>
        <h1 className={styles.dividerTitle}>You Can Find Us Here</h1>
        <div className={styles.divider}></div>
      </div>

      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2958.5199573341156!2d41.6766121763375!3d42.13915897121426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDLCsDA4JzIxLjAiTiA0McKwNDAnNDUuMSJF!5e0!3m2!1sen!2sge!4v1783587727085!5m2!1sen!2sge"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        />
        <div className={styles.mapInfo}>
          <h2 className={styles.mapInfoTitle}>Our Location</h2>
          <p className={styles.mapInfoText}>Address: Tbilisi, Georgia</p>
          <p className={styles.mapInfoText}>Phone: +995 555 555 555</p>
        </div>
      </div>
      
    </div>
  );
}
export default Contacts;
