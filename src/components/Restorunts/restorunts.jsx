import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiWhatsappFill, RiMessengerFill } from "react-icons/ri";

import styles from "./restorunts.module.css";
import MainComponent from "./MainComponent";

// სურათების იმპორტები
import Img1 from "./1Images/Img-1.webp";
import Img2 from "./1Images/img-2.webp";
import Img3 from "./1Images/img-3.webp";
import Img4 from "./1Images/img-4.webp";
import Img5 from "./1Images/img-5.webp";
import Img6 from "./1Images/img-6.webp";
import Img7 from "./1Images/img-7.webp";
import Img8 from "./1Images/img-8.webp";
import Img9 from "./1Images/img-9.webp";
import Img10 from "./1Images/img-10.webp";

// 1. მონაცემები გატანილია კომპონენტის გარეთ მეხსიერების დასაზოგად
const IMAGES = [
  { url: Img9, alt: "img9", id: 8 },
  { url: Img2, alt: "img2", id: 1 },
  { url: Img3, alt: "img3", id: 2 },
  { url: Img4, alt: "img4", id: 3 },
  { url: Img5, alt: "img5", id: 4 },
  { url: Img6, alt: "img6", id: 5 },
  { url: Img7, alt: "img7", id: 6 },
  { url: Img8, alt: "img8", id: 7 },
  { url: Img10, alt: "img10", id: 9 },
];

function Restorunts() {
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
        <img className={styles.mainImage} src={Img1} alt="mainImage" />
        <div className={styles.divOnMainImageForCover}></div>
        <div className={styles.divForWhiteBoxOnImage}>
          <div className={styles.textOnMainImage}>
            Sumbuli Group Objects
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

      <MainComponent images={IMAGES} />
    </div>
  );
}

export default Restorunts;
