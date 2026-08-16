import FirstSlider from "./FirstSlider/FirstSlider";
import styles from "./textForMiddlePage.module.css";

function TextForMiddlePage({ images, openModal }) {
  return (
    <div className={styles.mainDiv}>
      <h1 className={styles.h2}>Crimson Vineyards</h1>
      <p className={styles.p}>
        Crimson Vineyards is a wine bar and restaurant located in the heart of Tbilisi, Georgia. It is a place where you can enjoy a wide selection of wines and Georgian cuisine in a cozy and intimate atmosphere.
      </p>
      {/* <br></br> */}
      <p className={styles.p}>
        The restaurant is known for its extensive wine list, which includes both Georgian and international wines. The menu features a variety of Georgian dishes, as well as international cuisine.
      </p>
      <br></br>
      <FirstSlider images={images} openModal={openModal} />
      <p className={styles.p}>
        <b>
           The restaurant is open from 12:00 to 23:00, and it is recommended to make a reservation in advance.
        </b>
      </p>
    </div>
  );
}

export default TextForMiddlePage;
