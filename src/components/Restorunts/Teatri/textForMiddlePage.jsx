import FirstSlider from "./FisrtSlider/FisrtSlider";
import styles from "./textForMiddlePage.module.css";

function TextForMiddlePage({ images, openModal }) {
  return (
    <div className={styles.mainDiv}>
      <h1 className={styles.h2}>The Velvet Stage</h1>
      <p className={styles.p}>
        The new, exceptional,{" "}
        <a className={styles.a_1} href="#">
          unique project <b>„Theatria“</b>{" "}
        </a>
        is a multi-functional pavilion where you will encounter a completely new - SHOW
        & DINNER concept, which is the first in Georgia and the Caucasus.
      </p>
      <p className={styles.p}>
        The theater has created its own garden, a large team of chefs, who with their
        help, 400 people can be served simultaneously with food,
        a team of professionals equipped with technical equipment, who
        are responsible for the sound, lighting, stage and so on, for the service
        up to 70 people.
      </p>
      <p className={styles.p}>
        <a className={styles.a_1} href="#">
          {" "}
          <b>„Dinning Theatre”, „Show and Dinner” or „Show with Dinner”</b>
        </a>
      </p>
      <p className={styles.p}>
        The concept, which everyone talks about, because it seems simple at first glance,
        is difficult to implement. Here, equally important are: the show, gastronomy
        and service. The "Whisker Group" has become the first in this direction and took
        the risk to create something new, something that we want, that we understand, even though
        nothing has been implemented so far.
      </p>
      <br />
      <h2 className={styles.h2_1}>What happens at the theater?</h2>
      <br />
      <ul className={styles.teatri_ul_1}>
        <li className={styles.teatri_li_1}>American musical</li>
        <li className={styles.teatri_li_1}>Georgian cultural program</li>
        <li className={styles.teatri_li_1}>Concert</li>
        <li className={styles.teatri_li_1}>Corporate events</li>
        <li className={styles.teatri_li_1}>Private events/weddings</li>
      </ul>
      <FirstSlider images={images} openModal={openModal} />
      <p className={styles.p}>
        The theater has given birth to a new genre, and this space has become the favorite
        place for Georgian and foreign spectators, where their dreams are shared
        in a special Bohemian adventure.
      </p>
    </div>
  );
}

export default TextForMiddlePage;
