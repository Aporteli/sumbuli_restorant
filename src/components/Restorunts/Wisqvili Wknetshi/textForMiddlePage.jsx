import FirstSlider from "./FirstSlider/FirstSlider";
import styles from "./textForMiddlePage.module.css";
import Adresses from "./Adresses";

function TextForMiddlePage({ images, openModal }) {
  return (
    <div className={styles.mainDiv}>
      <h1 className={styles.h2}>Pine And Atone</h1>
      <p className={styles.p}>
        <b>"Pine And Atone" is a favorite place for guests in all seasons.</b>
      </p>
      <p className={styles.p}>
        Going out of town, lunch or dinner, a glass of wine and enjoying beautiful views
        is the best way to relax.
      </p>
      <br></br>
      <FirstSlider images={images} openModal={openModal} />
      <div className={styles.outerDivForAdresses}>
        <div className={styles.adressesOuter}>
          <h1 className={styles.adressesTitle}>Musical Program:</h1>
          <p className={styles.wkneti_music_prog_p}>
            <b>Every day except Monday 20:00-22:00:</b>
          </p>
          <p className={styles.wkneti_music_prog_p}>The "Trio" band.</p>
          <Adresses />
        </div>
      </div>
    </div>
  );
}

export default TextForMiddlePage;
