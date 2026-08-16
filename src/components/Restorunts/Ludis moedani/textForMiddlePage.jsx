import FirstSlider from "./FisrtSlider/FisrtSlider";
import styles from "./textForMiddlePage.module.css";

function TextForMiddlePage({ images, openModal }) {
  return (
    <div className={styles.mainDiv}>
      <h1 className={styles.h2}>Brewers Courtyard</h1>
      <p className={styles.p}>
        The summer festival "Brewers' Courtyard" is a strategic cooperative
        entrepreneur of the European beer industry and the traditional
        Georgian restaurant trade. It is co-organized by the European
        Beer Association and the Georgian Restaurant Trade. The
        inter-restaurant and freshly prepared terrace table offers
        like never before experiences that exceed expectations,
        comparable to world-class dining options.
      </p>
      <br></br>
      <FirstSlider images={images} openModal={openModal} />
      <p className={styles.p}>
          The main attraction at the menu is the high quality of European beers and
          grills, as well as traditional Georgian dishes and European cuisine.
          Stouts are also featured alongside European wines.
      </p>
      <p className={styles.p}>
        This is an ideal destination for those who want to try the best and most
        unique beer and food combinations during the summer festival.
      </p>
    </div>
  );
}

export default TextForMiddlePage;
