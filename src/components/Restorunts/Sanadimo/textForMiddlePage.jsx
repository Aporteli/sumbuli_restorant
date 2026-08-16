import FirstSlider from "./FirstSlider/FirstSlider"
import styles from "./textForMiddlePage.module.css";
import Adresses from "./Adresses";

function TextForMiddlePage({ images, openModal }) {
  return (
    <div className={styles.mainDiv}>
      <h1 className={styles.h2}>Grand Feast Hall</h1>
      <FirstSlider images={images} openModal={openModal} />
      <Adresses />
    </div>
  );
}

export default TextForMiddlePage;
