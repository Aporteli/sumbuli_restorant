import { Link } from "react-router-dom";
import styles from "./gridImages.module.css";

// 1. მონაცემების გაერთიანება ერთ სტრუქტურაში
const LOCATIONS_DATA = [
  { title: "The Golden Hearth", link: "/menu-list" },
  { title: "Lumina Terrace", link: "/menu-list" },
  { title: "Rustic Mill Tavern", link: "/menu-list" },
  { title: "Brewers Courtyard", link: "/menu-list"},
  { title: "Crimson Vineyards", link: "/menu-list" },
  { title: "Grand Feast Hall", link: "/menu-list" },
  { title: "Valley Riverhouse", link: "/menu-list" },
  { title: "Pine & Stone Retreat", link: "/menu-list" },
];

function GridImages({ images, isSpecial }) {
  return (
    <div
      className={`${styles.mainDiv} ${isSpecial ? styles.mainDivForTerasa : ""}`}
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

export default GridImages;
