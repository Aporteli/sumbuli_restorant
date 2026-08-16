import { Link } from "react-router-dom";
import { RiWhatsappFill, RiMessengerFill } from "react-icons/ri";
import styles from "./ludisMoednidan.module.css";
import { useEffect, useState } from "react";
import MainComponent from "../MainComponent.jsx";

import MainImage from "./ludisMoednidanImages/featuredImage.jpg";
import featuredImage from "./ludisMoednidanImages/MainImage.jpg";
import TextForMiddlePage from "./textForMiddlePage";

import Img1 from "../diliveryImages/img-2.webp";
import Img2 from "../diliveryImages/img-3.webp";
import Img3 from "../diliveryImages/img-4.webp";

const IMAGES_DELIVERY = [
  { url: Img1, alt: "Img two", id: 1 },
  { url: Img2, alt: "Img five", id: 2 },
  { url: Img3, alt: "Img six", id: 3 },
];

function LudisMoednidan() {
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
    <>
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
        <Link to="/dilivery">
          <div className={styles.gamoidzaxe}>გამოიძახე</div>
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
              წისქვილი ჯგუფის ობიექტები
            </div>
            <div className={styles.divForLinkOnImage}>
              <Link to="/" className={styles.navLink}>
                მთავარი
              </Link>
              <span> » </span>
              <Link to="/restorunts" className={styles.navLink}>
                ობიექტები
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
            <TextForMiddlePage />
          </div>
        </div>
      </div>

      <div className={styles.deliverySection}>
        <h1 className={styles.other_delivery}>ჩვენი ობიექტები</h1>
        <div className={styles.shortDivLine}></div>
        <MainComponent images={IMAGES_DELIVERY} isSpecial={true}/>
      </div>

    </>
  );
}

export default LudisMoednidan;
