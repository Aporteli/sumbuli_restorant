import styles from "./mainContent.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Img1 from "./blogImages/Img1.webp";
import Img2 from "./blogImages/Img2.webp";
import Img3 from "./blogImages/Img3.webp";
import Img4 from "./blogImages/Img4.webp";
import Img5 from "./blogImages/Img5.webp";



function MainContent() {
  return (
    <div className={styles.mainContent}>
      <div className={styles.divForFlexOfBlogs}>
        <div className={styles.blogItem}>
          <img className={styles.blogItemImage} alt="Blog Image" src={Img1} loading="lazy" />
        </div>
        <div className={styles.blogItemText}>
          <Link className={styles.blogItemTextLink} to="#">
            <h2 className={styles.blogItemTextTitle}>
              "Sumbuli Group" organized the "Georgian Wine and Corners Festival
              2026"
            </h2>
          </Link>
          <p className={styles.blogItemTextDate}>08.10.2025</p>
          <p className={styles.blogItemTextDescription}>
            "Georgian Wine and Corners Festival" is a project that revives the
            history of Georgia and promotes Georgian products and culture.
          </p>
          <Link className={styles.blogItemTextLink} to="#">
            Read More
          </Link>
        </div>
      </div>
      <div className={styles.divForFlexOfBlogs}>
        <div className={styles.blogItemText}>
          <Link className={styles.blogItemTextLink} to="#">
            <h2 className={styles.blogItemTextTitle}>
              Eggplant with Walnuts - A Complete Guide
            </h2>
          </Link>
          <p className={styles.blogItemTextDate}>08.10.2025</p>
          <p className={styles.blogItemTextDescription}>
            Eggplant with walnuts is a dish that you will find on every festive
            table or at simple family gatherings in Georgia.
          </p>
          <Link className={styles.blogItemTextLink} to="#">
            Read More
          </Link>
        </div>
        <div className={styles.blogItem}>
          <img className={styles.blogItemImage} alt="Blog Image" src={Img2} loading="lazy" />
        </div>
      </div>
      <div className={styles.divForFlexOfBlogs}>
        <div className={styles.blogItem}>
          <img className={styles.blogItemImage} alt="Blog Image" src={Img3} loading="lazy" />
        </div>
        <div className={styles.blogItemText}>
          <Link className={styles.blogItemTextLink} to="#">
            <h2 className={styles.blogItemTextTitle}>
              Pkhali Assortment - 5 Variations for Gourmets
            </h2>
          </Link>
          <p className={styles.blogItemTextDate}>08.10.2025</p>
          <p className={styles.blogItemTextDescription}>
            Pkhali assortment is a favorite dish for gourmets. In "Sumbuli" you
            will find delicious pkhali made from thistle, beetroot, leek, green
            beans, and spinach.
          </p>
          <Link className={styles.blogItemTextLink} to="#">
            Read More
          </Link>
        </div>
      </div>
      <div className={styles.divForFlexOfBlogs}>
        <div className={styles.blogItemText}>
          <Link className={styles.blogItemTextLink} to="#">
            <h2 className={styles.blogItemTextTitle}>
              Where to eat the best Tolma in Tbilisi?
            </h2>
          </Link>
          <p className={styles.blogItemTextDate}>08.10.2025</p>
          <p className={styles.blogItemTextDescription}>
            Our chefs prepare the traditional grape leaf tolma with strict
            adherence to the original recipe. The culinary team uses only fresh,
            local products, which plays a huge role in preserving the authentic
            old-fashioned taste of the dish.
          </p>
          <Link className={styles.blogItemTextLink} to="#">
            Read More
          </Link>
        </div>
        <div className={styles.blogItem}>
          <img className={styles.blogItemImage} alt="Blog Image" src={Img4} loading="lazy" />
        </div>
      </div>
      <div className={styles.divForFlexOfBlogs}>
        <div className={styles.blogItem}>
          <img className={styles.blogItemImage} alt="Blog Image" src={Img5} loading="lazy" />
        </div>
        <div className={styles.blogItemText}>
          <Link className={styles.blogItemTextLink} to="#">
            <h2 className={styles.blogItemTextTitle}>
              Everything You Need to Know About Georgian Chacha
            </h2>
          </Link>
          <p className={styles.blogItemTextDate}>08.10.2025</p>
          <p className={styles.blogItemTextDescription}>
            The tradition of making Georgian chacha dates back centuries and is
            an integral part of Georgian winemaking culture.
          </p>
          <Link className={styles.blogItemTextLink} to="#">
            Read More
          </Link>
        </div>
      </div>

    </div>
  );
}

function MainContent1() {
  return (
    <div className={styles.mainContent}>
      <div className={styles.divForFlexOfBlogs}>
        <div className={styles.blogItem}>
          <img className={styles.blogItemImage} alt="Blog Image" src={Img1} loading="lazy" />
        </div>
        <div className={styles.blogItemText}>
          <Link className={styles.blogItemTextLink} to="#">
            <h2 className={styles.blogItemTextTitle}>
              "Sumbuli Group" organized the "Georgian Wine and Corners Festival
              2026"
            </h2>
          </Link>
          <p className={styles.blogItemTextDate}>08.10.2025</p>
          <p className={styles.blogItemTextDescription}>
            "Georgian Wine and Corners Festival" is a project that revives the
            history of Georgia and promotes Georgian products and culture.
          </p>
          <Link className={styles.blogItemTextLink} to="#">
            Read More
          </Link>
        </div>
      </div>

      <div className={styles.divForFlexOfBlogs}>
        <div className={styles.blogItem}>
          <img className={styles.blogItemImage} alt="Blog Image" src={Img2} loading="lazy" />
        </div>
        <div className={styles.blogItemText}>
          <Link className={styles.blogItemTextLink} to="#">
            <h2 className={styles.blogItemTextTitle}>
              Eggplant with Walnuts - A Complete Guide
            </h2>
          </Link>
          <p className={styles.blogItemTextDate}>08.10.2025</p>
          <p className={styles.blogItemTextDescription}>
            Eggplant with walnuts is a dish that you will find on every festive
            table or at simple family gatherings in Georgia.
          </p>
          <Link className={styles.blogItemTextLink} to="#">
            Read More
          </Link>
        </div>
      </div>

      <div className={styles.divForFlexOfBlogs}>
        <div className={styles.blogItem}>
          <img className={styles.blogItemImage} alt="Blog Image" src={Img3} loading="lazy" />
        </div>
        <div className={styles.blogItemText}>
          <Link className={styles.blogItemTextLink} to="#">
            <h2 className={styles.blogItemTextTitle}>
              Pkhali Assortment - 5 Variations for Gourmets
            </h2>
          </Link>
          <p className={styles.blogItemTextDate}>08.10.2025</p>
          <p className={styles.blogItemTextDescription}>
            Pkhali assortment is a favorite dish for gourmets. In "Sumbuli" you
            will find delicious pkhali made from thistle, beetroot, leek, green
            beans, and spinach.
          </p>
          <Link className={styles.blogItemTextLink} to="#">
            Read More
          </Link>
        </div>
      </div>

      <div className={styles.divForFlexOfBlogs}>
        <div className={styles.blogItem}>
          <img className={styles.blogItemImage} alt="Blog Image" src={Img4} loading="lazy" />
        </div>
        <div className={styles.blogItemText}>
          <Link className={styles.blogItemTextLink} to="#">
            <h2 className={styles.blogItemTextTitle}>
              Where to eat the best Tolma in Tbilisi?
            </h2>
          </Link>
          <p className={styles.blogItemTextDate}>08.10.2025</p>
          <p className={styles.blogItemTextDescription}>
            Our chefs prepare the traditional grape leaf tolma with strict
            adherence to the original recipe. The culinary team uses only fresh,
            local products, which plays a huge role in preserving the authentic
            old-fashioned taste of the dish.
          </p>
          <Link className={styles.blogItemTextLink} to="#">
            Read More
          </Link>
        </div>
      </div>

      <div className={styles.divForFlexOfBlogs}>
        <div className={styles.blogItem}>
          <img className={styles.blogItemImage} alt="Blog Image" src={Img5} loading="lazy" />
        </div>
        <div className={styles.blogItemText}>
          <Link className={styles.blogItemTextLink} to="#">
            <h2 className={styles.blogItemTextTitle}>
              Everything You Need to Know About Georgian Chacha
            </h2>
          </Link>
          <p className={styles.blogItemTextDate}>08.10.2025</p>
          <p className={styles.blogItemTextDescription}>
            The tradition of making Georgian chacha dates back centuries and is
            an integral part of Georgian winemaking culture.
          </p>
          <Link className={styles.blogItemTextLink} to="#">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

function BlogContainer() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (windowWidth <= 990) {
    return <MainContent1 />;
  } else {
    return <MainContent />;
  }
}

export default BlogContainer;
