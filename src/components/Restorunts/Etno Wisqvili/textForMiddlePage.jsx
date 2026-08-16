import FirstSlider from "./FirstSlider/FirstSlider";
import styles from "./textForMiddlePage.module.css";

function TextForMiddlePage({ images, openModal }) {
  return (
    <div className={styles.mainDiv}>
      <h1 className={styles.h2}>Rustic Mill Tavern</h1>
      <p className={styles.p}>
         Welcome to Rustic Mill Tavern, where tradition meets taste in the heart of Tbilisi. Our restaurant offers a warm and inviting atmosphere, perfect for enjoying authentic Georgian cuisine made with the freshest local ingredients. Whether you're looking for a romantic dinner, a family meal, or a place to celebrate with friends, we have something for everyone. Join us for an unforgettable culinary experience.
      </p>
      <p className={styles.p}>
        Our menu features a wide variety of traditional Georgian dishes, including khachapuri, khinkali, and satsivi, as well as modern interpretations of classic recipes. We also offer a selection of Georgian wines and beers, as well as non-alcoholic beverages.
      </p>
      <br></br>
      <FirstSlider images={images} openModal={openModal} />
    </div>
  );
}

export default TextForMiddlePage;
