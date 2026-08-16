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
      <div>
        <div>მისამართი</div>
        <a href="ddd" className={styles.a_moednidan_adr_1}>
         მცხეთა, კ. გამსახურდიას N7
        </a>
      </div>
      <div>
        <div>ტელეფონი</div>
        <a href="ddd" className={styles.a_moednidan_adr_1}>
          +995 577220 813
        </a>
      </div>
      <div>
        <div>ელ.ფოსტა</div>
        <a href="ddd" className={styles.a_moednidan_adr_1}>
          info@tsiskvili.ge / mtskheta@tsiskvili.ge
        </a>
      </div>
      <div>
        <div>სამუშაო საათები</div>
        <a href="ddd" className={styles.a_moednidan_adr_1}>
          11:00-22:30
        </a>
      </div>
      <div className={styles.socialSection}>
        <h3 className={styles.title}>სოციალურ ქსელებში</h3>
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
