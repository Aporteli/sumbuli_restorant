import { Link } from "react-router-dom";
import styles from "./MainComponent.module.css";

// 1. მონაცემების გაერთიანება ერთ სტრუქტურაში
const LOCATIONS_DATA = [
  { title: "The Golden Hearth", link: "/golden-hearth" },
  { title: "Lumina Terrace", link: "/lumina-terrace" },
  { title: "Rustic Mill Tavern", link: "/rustic-mill-tavern" },
  { title: "Brewers Courtyard", link: "/brewers-courtyard" },
  { title: "Crimson Vineyards", link: "/crimson-vineyards" },
  { title: "Grand Feast Hall", link: "/grand-feast-hall" },
  { title: "Valley Riverhouse", link: "/valley-riverhouse" },
  { title: "Pine & Stone Retreat", link: "/pine-and-stone-retreat" },
  { title: "The Velvet Stage", link: "/the-velvet-stage" },
];

function MainComponent({ images, isSpecial }) {
  return (
    <div
      className={`${styles.mainDiv} ${isSpecial ? styles.mainDivForTerasa : ""}`}
    >
      {/* ვამოწმებთ images არსებობს თუ არა (images?.map), რომ აპლიკაცია არ გაითიშოს შეცდომის დროს */}
      {images?.map(({ url, alt, id }, index) => {
        // ვიღებთ კონკრეტული ინდექსის მონაცემს (თუ არ არსებობს, ცარიელ ობიექტს ვაბრუნებთ)
        const locationInfo = LOCATIONS_DATA[index] || {};

        return (
          <div className={styles.imageDiv} key={id || index}>
            {/* Link ახლა მუშაობს ბუნებრივად, გვერდის გადატვირთვის გარეშე */}
            <Link to={locationInfo.link || "#"}>
              <div className={styles.divOnImageDiv}>
                <div className={styles.MainTextOnImage}>
                  {locationInfo.title || "უცნობი ლოკაცია"}
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
