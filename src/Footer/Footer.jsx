import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <h1 className={styles.wisqvili}>
        <Link to="/" className={styles.a_footer_wisqvili}>
          SUMBULI
        </Link>
      </h1>

      <div className={styles.footeFisrtDiv}>
        <span>
          <Link to="/aboutus" className={styles.a_footer_1}>
            About us{" "}
          </Link>
          <span>/</span>{" "}
        </span>

        <span>
          <Link to="/restorunts" className={styles.a_footer_1}>
            Restoraunts{" "}
          </Link>
          <span>/</span>{" "}
        </span>

        <span>
          <Link to="/delivery" className={styles.a_footer_1}>
            Delivery{" "}
          </Link>
          <span>/</span>
        </span>

        <span>
          <Link to="/menu" className={styles.a_footer_1}>
            Menu
          </Link>
          <span>/</span>{" "}
        </span>

        <span>
          <Link to="/csr" className={styles.a_footer_1}>
            CSR{" "}
          </Link>
          <span>/</span>
        </span>

        <span>
          <Link to="/contacts" className={styles.a_footer_1}>
            Contacts
          </Link>
        </span>
      </div>
      <div className={styles.footeSecondDiv}>
        <span>info@sumbuli.ge </span>
        <span>+995 032 2 00...</span>
        <span>Guliasvili 28/12/a, Tbilisi, Georgia</span>
      </div>
    </div>
  );
}

export default Footer;
