import FirstSlider from "./FirstSlider/FirstSlider";
import styles from "./textForMiddlePage.module.css";

function TextForMiddlePage({ images, openModal }) {
  return (
    <div className={styles.mainDiv}>
      <h1 className={styles.h2}>Valley Riverhouse</h1>
      <p className={styles.p}>
        <b>
          This historic city is one of the oldest in the country. Here you will find
          historic temples and landmarks, beautiful views from all sides, and it is
          visited by countless tourists throughout the year.
        </b>
      </p>
      <p className={styles.p}>
         The restaurant is located on the banks of the Aragvi River, offering a unique atmosphere and stunning views.
      </p>
      <p className={styles.p}>
        The complex features a wine cellar where you can taste various wines
        from the collection.
      </p>
      <p className={styles.p}>
        In addition to the main restaurant hall, the space includes a traditional
        house and a grill area where the chef prepares delicious dishes in front
        of the guests.
      </p>
      <br></br>
      <FirstSlider images={images} openModal={openModal} />
    </div>
  );
}

export default TextForMiddlePage;
