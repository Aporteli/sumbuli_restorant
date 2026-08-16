import { Link } from "react-router-dom";
import styles from "./MainComponent.module.css";

// 1. მონაცემების გაერთიანება ერთ სტრუქტურაში
const LOCATIONS_DATA = [
  { title: "Order from Lumina Terrace", link: "/lumina-terrace" },
  { title: "Order from Grand Feast Hall", link: "/grand-feast-hall" },
  { title: "Order from Crimson Vineyards", link: "/crimson-vineyards" },
];

function MainComponent({ images, isSpecial }) {
  return (
    <div
      className={`${styles.mainDiv} ${isSpecial ? styles.mainDiv_for_all : ""}`}
    >
      {images?.map(({ url, alt, id }, index) => {
        const locationInfo = LOCATIONS_DATA[index] || {};
        return (
          <div className={styles.imageDiv} key={id || index}>
            <Link to={locationInfo.link || "#"}>
              <div className={styles.divOnImageDiv}>
                <div className={styles.MainTextOnImage}>
                  {locationInfo.title || "Unknown Location"}
                </div>
                <div className={styles.metisNaxva}>See More</div>
                <div className={styles.horizontalLine}></div>
                <div className={styles.verticalLine}></div>
              </div>
            </Link>
            <img className={styles.image} src={url} alt={alt} loading="lazy" />
          </div>
        );
      })}
    </div>
  );
}

export default MainComponent;
