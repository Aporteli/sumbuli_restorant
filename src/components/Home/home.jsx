import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiWhatsappFill, RiMessengerFill } from "react-icons/ri";

import Jildoebi from "./Jildoebi/jildoebi";
import ImageSlider from "./ImageSlider";
import OurObjectsSlider from "./OurObjectsSlider/OurObjectsSlider";
import WisqvilisMenu from "./WisqvilisMenu/wisqvilisMenu";
import BlogsAndNews from "./BlogsAndNews";
import styles from "./home.module.css";

import img1 from "./imgs/img-1.webp";
import img2 from "./imgs/img-2.webp";
import img3 from "./imgs/img-3.webp";
import img4 from "./imgs/img-4.webp";
import img5 from "./imgs/img-5.webp";
import img6 from "./imgs/img-6.webp";
import img7 from "./imgs/img-7.webp";
import img8 from "./imgs/img-8.webp";
import img9 from "./imgs/img-9.webp";
import img10 from "./imgs/img-10.webp";
import img11 from "./imgs/img-11.webp";
import img12 from "./imgs/img-12.webp";
import img13 from "./imgs/img-13.webp";
import img14 from "./imgs/img-14.webp";
import img15 from "./imgs/img-15.webp";
import img16 from "./imgs/img-16.webp";
import img17 from "./imgs/img-17.webp";
import img18 from "./imgs/img-18.webp";
import img19 from "./imgs/img-19.webp";
import img20 from "./imgs/img-20.webp";
import img21 from "./imgs/img-21.webp";
import img22 from "./imgs/img-22.webp";
import img23 from "./imgs/img-23.webp";
import img24 from "./imgs/img-24.webp";
import img25 from "./imgs/img-25.webp";
import img26 from "./imgs/img-26.webp";
import img27 from "./imgs/img-27.webp";
import img28 from "./imgs/img-28.webp";
import img29 from "./imgs/img-29.webp";
import img30 from "./imgs/img-30.webp";
import img31 from "./imgs/img-31.webp";

const IMAGES = [
  { url: img1, alt: "Img One" },
  { url: img2, alt: "Img Two" },
  { url: img3, alt: "Img Three" },
  { url: img4, alt: "Img Four" },
  { url: img5, alt: "Img Five" },
];

const IMAGES1 = [
  {
    url: img13,
    alt: "Img Thirteen",
    route: "/golden-hearth",
    title: "The Golden Hearth",
  },
  {
    url: img6,
    alt: "Img Six",
    route: "/lumina-terrace",
    title: "Lumina Terrace"
  },
  {
    url: img7,
    alt: "Img Seven",
    route: "/rustic-mill-tavern",
    title: "Rustic Mill "
  },
  {
    url: img8,
    alt: "Img Eight",
    route: "/brewers-courtyard",
    title: "Brewers Courtyard"
  },
  {
    url: img9,
    alt: "Img Nine",
    route: "/crimson-vineyards",
    title: "Crimson Vineyards"
  },
  {
    url: img10,
    alt: "Img Ten",
    route: "/grand-feast-hall",
    title: "Grand Feast Hall"
  },
  {
    url: img11,
    alt: "Img Eleven",
    route: "/valley-riverhouse",
    title: "Valley Riverhouse"
  },
  {
    url: img12,
    alt: "Img Twelve",
    route: "/pine-and-stone-retreat",
    title: "Pine & Stone Retreat"
  },
  {
    url: img14,
    alt: "Img Forheen",
    route: "/the-velvet-stage",
    title: "The Velvet Stage"
  },
];

const IMAGES2 = [
  {
    url: img15,
    alt: "Img Fifteen",
    route: "/menu-list",
    title: "The Golden Hearth",
  },
  {
    url: img16,
    alt: "Img Sixteen",
    route: "/menu-list",
    title: "Lumina Terrace",
  },
  {
    url: img17,
    alt: "Img Seventeen",
    route: "/menu-list",
    title: "Rustic Mill Tavern",
  },
  {
    url: img18,
    alt: "Img Eighteen",
    route: "/menu-list",
    title: "Brewers Courtyard",
  },
  {
    url: img19,
    alt: "Img Nineteen",
    route: "/menu-list",
    title: "Crimson Vineyards",
  },
  {
    url: img20,
    alt: "Img Twenty",
    route: "/menu-list",
    title: "Grand Feast Hall",
  },
  {
    url: img21,
    alt: "Img Twenty-one",
    route: "/menu-list",
    title: "Valley Riverhouse",
  },
  {
    url: img22,
    alt: "Img Twenty-two",
    route: "/menu-list",
    title: "Pine & Stone Retreat",
  },
];

const IMAGES3 = [
  { url: img23, alt: "Img Twenty-tree", route: "aboutus" },
  { url: img24, alt: "Img Twenty-four", route: "restorunts" },
  { url: img25, alt: "Img Twenty-five", route: "dilivery" },
];

const IMAGES4 = [
  { url: img26, alt: "Img Twenty-six" },
  { url: img27, alt: "Img Twenty-seven" },
  { url: img28, alt: "Img Twenty-eight" },
  { url: img29, alt: "Img Twenty-nine" },
  { url: img30, alt: "Img Thirty" },
  { url: img31, alt: "Img Thirty-one" },
];

function Home() {
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

  useEffect(() => {
    const savedScroll = sessionStorage.getItem("mainPageScroll");
    if (savedScroll !== null) {
      window.scrollTo(0, parseInt(savedScroll));
      sessionStorage.removeItem("mainPageScroll");
    }
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const ScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.mainDiv}>
      <a
        href="https://api.whatsapp.com/send?phone=995322005555"
        target="_blanck"
        className={styles.a_home_1}
      >
        <div className={styles.whatsAppIcon}>
          <RiWhatsappFill className={styles.whatsApp} />
        </div>
      </a>
      <a
        href="https://www.facebook.com/index.php"
        target="_blanck"
        className={styles.a_home_1}
      >
        <div className={styles.massengerIcon}>
          <RiMessengerFill className={styles.massenger} />
        </div>
      </a>

      {/* "გამოიძახე" შეიცვალა "Order Now"-ით */}
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

      <div className={styles.homePageMainDiv}>
        <ImageSlider images={IMAGES} />

        {/* "ჩვენი რესტორნები" შეიცვალა "Our Restaurants"-ით */}
        <h1 className={styles.home_h1}>Our Restaurants</h1>
        <div className={styles.shortDivLine}></div>

        <OurObjectsSlider images={IMAGES1} />

        {/* "ნამდვილი ქართული 2002 წლიდან" შეიცვალა */}
        <div className={styles.NavmdQartuli}>
          <div>Authentic Georgian</div>
          <div>Since 2002</div>
        </div>

        {/* "წისქვილი მენიუ" შეიცვალა "Tsiskvili Menu"-თი */}
        <h1 className={styles.home_h1}>Sumbuli Menu</h1>
        <div className={styles.shortDivLine}></div>

        <WisqvilisMenu images={IMAGES2} />

        {/* "შეუკვეთე ტრადიციული კერძები" შეიცვალა */}
        <div className={styles.NavmdQartuli}>
          <div>Order</div>
          <div>Traditional Dishes</div>
        </div>

        {/* "ბლოგები და სიახლეები" შეიცვალა "Blogs & News"-ით */}
        <h1 className={styles.home_1}>Blogs & News</h1>
        <div className={styles.shortDivLine}></div>
        <BlogsAndNews images={IMAGES3} />

        {/* "წისქვილი ჯგუფი ბლოგები და სიახლეები" შეიცვალა */}
        <div className={styles.NavmdQartuli}>
          <div>Sumbuli Group</div>
          <div>Blogs & News</div>
        </div>
      </div>
      <Jildoebi images={IMAGES4} />
    </div>
  );
}

export default Home;
