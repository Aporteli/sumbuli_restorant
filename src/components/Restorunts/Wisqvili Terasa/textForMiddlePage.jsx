import FirstSlider from "./FisrtSlider/FisrtSlider";
import styles from "./textForMiddlePage.module.css";

function TextForMiddlePage({images, openModal}) {

  return (
    <div className={styles.mainDiv}>
      <h1 className={styles.h2}>Lumina Terrace</h1>
      <p className={styles.p}>
        A unique culinary event "Lumina Terrace", one of the most prominent
        gastronomic events in the country, where Georgian cuisine is presented by
        the most renowned chefs of the summer season.
      </p>
      <br></br>
      <FirstSlider images={images} openModal={openModal}/>
      <p className={styles.p}>
        <b>A new restaurant with a new concept.</b>
      </p>
      <p className={styles.p}>
        A unique culinary event "Lumina Terrace", one of the most prominent
        gastronomic events in the country, where Georgian cuisine is presented by
        the most renowned chefs of the summer season.
      </p>
      <p className={styles.p}>
        Interior design, panoramic terrace, 800sq.m. garden terrace, live band, and
        well-trained service - this is a unique atmosphere that combines old traditions
        and modernity.
      </p>
      <p className={styles.p}>
        <b>
          The "Lumina Terrace" restaurant is open every Thursday, Friday, and
          Sunday from 21:00 - where you can enjoy a live band every week
        </b>
      </p>
    </div>
  );
}

export default TextForMiddlePage;
