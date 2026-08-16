import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiWhatsappFill, RiMessengerFill } from "react-icons/ri";
import GridImages from "./gridImages";

import styles from "./menu.module.css";

import gridImg1 from "./menuImages/img-15.webp"
import gridImg2 from "./menuImages/img-16.webp"
import gridImg3 from "./menuImages/img-17.webp"
import gridImg4 from "./menuImages/img-18.webp"
import gridImg5 from "./menuImages/img-19.webp"
import gridImg6 from "./menuImages/img-20.webp"
import gridImg7 from "./menuImages/img-21.webp"
import gridImg8 from "./menuImages/img-22.webp"

const GRID_IMAGES = [
  { url: gridImg1, alt: "Img Fifteen", route: "menu-list", title: "The Golden Hearth" }, 
  { url: gridImg2, alt: "Img Sixteen", route: "menu-list", title: "ლუდის მოედანი საბურთალო" }, 
  { url: gridImg3, alt: "Img Seventeen", route: "menu-list", title: "ეთნო წისქვილი" }, 
  { url: gridImg4, alt: "Img Eighteen", route: "menu-list", title: "წისქვილი ტერასა" },
  { url: gridImg5, alt: "Img Nineteen", route: "menu-list", title: "სანადიმო" },
  { url: gridImg6, alt: "Img Twenty", route: "menu-list", title: "ღვინის ეზო" }, 
  { url: gridImg7, alt: "Img Twenty-one", route: "menu-list", title: "წყნეთის წისქვილი" }, 
  { url: gridImg8, alt: "Img Twenty-two", route: "menu-list", title: "მცხეთის წისქვილი" },
];

// სურათების იმპორტები
import MainImage from "./menuImages/MainImage.webp";

function Menu() {
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
        <img className={styles.mainImage} src={MainImage} alt="mainImage" />
        <div className={styles.divOnMainImageForCover}></div>
        <div className={styles.divForWhiteBoxOnImage}>
          <div className={styles.textOnMainImage}>
            Sumbuli Objects
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

      <GridImages images={GRID_IMAGES}/>
    </div>
  );
}

export default Menu;
