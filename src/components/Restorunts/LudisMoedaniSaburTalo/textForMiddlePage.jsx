import FirstSlider from "./FirstSlider/FirstSlider";
import styles from "./textForMiddlePage.module.css";
import Adresses from "./Adresses";

function TextForMiddlePage({ images, openModal }) {
  return (
    <div className={styles.mainDiv}>
      <h1 className={styles.h2}>The Golden Hearth </h1>
      <p className={styles.p}>
        "A unique restaurant in the heart of the city, providing a gastronomic experience
        that combines European cuisine and traditional Georgian dishes. Located in a
        strategic position, the restaurant offers a unique atmosphere that blends European
        high-end dining with a traditional Georgian restaurant experience."
      </p>
      <FirstSlider images={images} openModal={openModal} />
      <p className={styles.p}>
        The menu focuses on high-quality European wines and traditional Georgian dishes.
        Specialties include stews, traditional Georgian dishes, and vegetarian options.
      </p>
      <p className={styles.p}>
        This is an ideal restaurant for a special occasion, blending European cuisine with traditional Georgian dishes.
      </p>
      <Adresses />
    </div>
  );
}

export default TextForMiddlePage;
