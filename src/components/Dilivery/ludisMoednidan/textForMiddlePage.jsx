import styles from "./textForMiddlePage.module.css";
import Adresses from "./Adresses";

function TextForMiddlePage() {
  return (
    <div className={styles.mainDiv}>
      <h1 className={styles.h2}>გამოიძახე ლუდის მოედნიდან</h1>
      <Adresses />
    </div>
  );
}

export default TextForMiddlePage;
