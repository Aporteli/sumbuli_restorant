import styles from "./Adresses.module.css";
import {
  FaYoutube,
  FaGoogle,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaTripadvisor,
} from "react-icons/fa";

function Adresses() {
  return (
    <div className={styles.divForAdresses}>
      <div className={styles.addressSection}>
        <div className={styles.title}>Address</div>
        <a href="ddd" className={styles.a_wkneti_adr_1}>
          New York, 123 Main Street
        </a>
      </div>
      <div className={styles.phoneSection}>
        <div className={styles.title}>Phone</div>
        <a href="ddd" className={styles.a_wkneti_adr_1}>
          +1 555 123 4567
        </a>
      </div>
      <div className={styles.emailSection}>
        <div className={styles.title}>Email</div>
        <a href="ddd" className={styles.a_wkneti_adr_1}>
          info@pineandatone.com
        </a>
      </div>
      <div className={styles.workingHoursSection}>
        <div className={styles.title}>Working Hours</div>
        <a href="ddd" className={styles.a_wkneti_adr_1}>
          Restaurant working hours: 17:00 - 01:00 Kitchen working hours:
          17:00 - 23:00
        </a>
      </div>
      <div className={styles.socialSection}>
        <h3 className={styles.title}>Social Networks</h3>
        <div className={styles.iconsContainer}>
          <a href="#" className={styles.iconBox}>
            <FaYoutube />
          </a>
          <a href="#" className={styles.iconBox}>
            <FaFacebookF />
          </a>
          <a href="#" className={styles.iconBox}>
            <FaInstagram />
          </a>
          <a href="#" className={styles.iconBox}>
            <FaTiktok />
          </a>
          <a href="#" className={styles.iconBox}>
            <FaLinkedinIn />
          </a>
          <a href="#" className={styles.iconBox}>
            <FaTripadvisor />
          </a>
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noreferrer"
            className={styles.iconBox}
          >
            <FaGoogle />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Adresses;
