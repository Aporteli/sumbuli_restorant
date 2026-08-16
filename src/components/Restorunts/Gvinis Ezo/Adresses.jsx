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
    <div className={`${styles.divForAdresses} ${styles.addressContainer}`}>
      <div className={styles.addressSection}>
        <div className={styles.title}>Address</div>
        <a href="ddd" className={styles.a_gvinis_adr_1}>
          Tbilisi, A. Cholokashvili N78/9
        </a>
      </div>
      <div className={styles.phoneSection}>
        <div className={styles.title}>Phone</div>
        <a href="ddd" className={styles.a_gvinis_adr_1}>
          +995 32 2...
        </a>
      </div>
      <div className={styles.emailSection}>
        <div className={styles.title}>Email</div>
        <a href="ddd" className={styles.a_gvinis_adr_1}>
          info@tsiskvili.ge / reservation@sumbuli.ge
        </a>
      </div>
      <div className={styles.workingHoursSection}>
        <div className={styles.title}>Working hours</div>
        <a href="ddd" className={styles.a_gvinis_adr_1}>
          Restaurant working hours: 17:00 - 01:00 
        </a>
      </div>
      <div className={`${styles.socialSection} ${styles.socialContainer}`}>
        <h3 className={styles.title}>Social Media</h3>
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
            href="https://www.google.com/maps/place/%E1%83%94%E1%83%97%E1%83%9C%E1%83%9D+%E1%83%AC%E1%83%98%E1%83%A1%E1%83%A5%E1%83%95%E1%83%98%E1%83%9A%E1%83%98+%E2%80%A2+Ethno+Tsiskvili/@41.771287,44.779815,17z/data=!3m1!4b1!4m6!3m5!1s0x40446d91e60380ed:0x43e7896ceb2cc479!8m2!3d41.771287!4d44.779815!16s%2Fg%2F1hf4f1gxh?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3Dhttps://maps.app.goo.gl/T4f8zP6p7Y8bS6vA9"
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
