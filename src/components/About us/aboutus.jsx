import { Link } from "react-router-dom";
import Img1 from "./1imgs/img-1.webp";
import Img2 from "./1imgs/img-2.webp";
import Img3 from "./1imgs/img-3.webp";
import Img4 from "./1imgs/img-4.webp";
import Img5 from "./1imgs/img-5.webp";
import Img6 from "./1imgs/img-6.webp";
import styles from "./aboutus.module.css";
import FirstFlexImages from "./FisrtFlexImages/FirstFlexImages";
import LastFlexImages from "./LastFlexImages/LastFlexImages";
import { useEffect, useState } from "react";
import { RiWhatsappFill, RiMessengerFill } from "react-icons/ri";
import modalStyles from "./FisrtFlexImages/FirstFleximages.module.css";
import { FaCaretLeft, FaCaretRight, FaTimes } from "react-icons/fa";

const IMAGES = [
  { url: Img4, alt: "Img four", id: 1 },
  { url: Img5, alt: "Img five", id: 2 },
  { url: Img6, alt: "Img six", id: 3 },
];

const IMAGES_FOR_MODAL = [
  { url: Img4, alt: "Img four", id: 1 },
  { url: Img5, alt: "Img five", id: 2 },
  { url: Img6, alt: "Img six", id: 3 },
  { url: Img2, alt: "Img one", id: 4 },
  { url: Img3, alt: "Img two", id: 5 },
];

const IMAGES_2 = [
  { url: Img2, alt: "Img one", id: 4 },
  { url: Img3, alt: "Img two", id: 5 },
];

function Aboutus() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [animateLeft, setAnimateLeft] = useState(false);
  const [animateRight, setAnimateRight] = useState(false);
  const [showScrollUp, setShowScrollUp] = useState(false);

  // სურათების ID-ების შესაბამისი კლასების რუკა (Lookup Object)
  const imageClassMap = {
    1: modalStyles.firstImage,
    2: modalStyles.secondImage,
    3: modalStyles.thirdImage,
    4: modalStyles.forthImage,
    5: modalStyles.fifthImage,
  };

  useEffect(() => {
    function showScrollBox() {
      setShowScrollUp(window.scrollY > 800);
    }
    window.addEventListener("scroll", showScrollBox);
    return () => window.removeEventListener("scroll", showScrollBox);
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ბოდის სქროლის მართვა მოდალის გახსნა/დახურვისას
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPosition}px`;
      document.body.style.width = "100%";
    }

    return () => {
      const currentTop = parseInt(document.body.style.top || "0", 10);
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      if (currentTop < 0) {
        window.scrollTo(0, scrollPosition);
      }
    };
  }, [isModalOpen, scrollPosition]);

  const openModal = (image) => {
    setScrollPosition(window.scrollY);
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
  };

  const nextImage = () => {
    if (!currentImage) return;
    const currentIndex = IMAGES_FOR_MODAL.findIndex(
      (img) => img.id === currentImage.id,
    );
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + 1) % IMAGES_FOR_MODAL.length;
    setCurrentImage(IMAGES_FOR_MODAL[nextIndex]);
  };

  const prevImage = () => {
    if (!currentImage) return;
    const currentIndex = IMAGES_FOR_MODAL.findIndex(
      (img) => img.id === currentImage.id,
    );
    if (currentIndex === -1) return;
    const prevIndex =
      (currentIndex - 1 + IMAGES_FOR_MODAL.length) % IMAGES_FOR_MODAL.length;
    setCurrentImage(IMAGES_FOR_MODAL[prevIndex]);
  };

  const ScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.mainDiv}>
      <a
        href="https://api.whatsapp.com/send?phone=995322005555"
        target="_blank"
        rel="noreferrer"
        className={styles.a_sanadimo_1}
      >
        <div className={styles.whatsAppIcon}>
          <RiWhatsappFill className={styles.whatsApp} />
        </div>
      </a>
      <a
        href="https://www.facebook.com/index.php"
        target="_blank"
        rel="noreferrer"
        className={styles.a_sanadimo_1}
      >
        <div className={styles.massengerIcon}>
          <RiMessengerFill className={styles.massenger} />
        </div>
      </a>
      <Link to="/delivery">
        <div className={styles.gamoidzaxe}>Order Now</div>
      </Link>
      <div
        className={`${
          showScrollUp ? styles.showScrollUpDiv : styles.scrollUpDiv
        } ${styles.scrollUpDiv}`}
        onClick={ScrollUp}
      >
        <div className={styles.scrollUpIcon}>^</div>
      </div>

      <div className={styles.mainImageDiv}>
        <img className={styles.mainImage} src={Img1} alt="mainImage" loading="lazy" />
        <div className={styles.divOnMainImageForCover}></div>
        <div className={styles.divForWhiteBoxOnImage}>
          <div className={styles.textOnMainImage}>Sumbuli Group</div>
          <div className={styles.divForLinkOnImage}>
            <Link to="/" className={styles.mtavariLink}>
              Main
            </Link>
            <span> » </span>
            <Link to="/restorunts" className={styles.obieqtebiLink}>
              Objects
            </Link>
          </div>
        </div>
      </div>

      {/* მთავარი კონტენტი */}
      <div className={styles.textDiv}>
        <h1 className={styles.about_us_text}>About us</h1>
        <FirstFlexImages
          images={IMAGES}
          openModal={openModal}
          windowWidth={windowWidth}
        />
        <div className={styles.about_us_div_2}>
          <h1 className={styles.h1}>History & Philosophy</h1>
          <p className={styles.about_text_p}>
            It all began in 2012 with a single, experimental kitchen tucked away
            in Tbilisi's historic quarter. Today, "Sumbuli" is no longer just a
            restaurant chain—it is a culinary laboratory and the leading force
            of High Gastronomy (Fine Dining) in Georgia.
            <br />
            <br />
            Over the course of 14 years, we have replaced conventional dining
            norms with a progressive vision where pure flavors, a Zero-Waste
            philosophy, and futuristic design seamlessly intertwine. "Sumbuli"
            has evolved into a destination for those who seek an intellectual
            culinary performance rather than just a dinner. Our relentless drive
            has been cemented by international acclaim and official
            recommendations from the Michelin Guide, proving that our
            avant-garde approach is truly unparalleled.
            <br />
            <br />
            The driving force behind our success is a collective of over 450
            industry visionaries—talented avant-garde chefs, master someliers,
            and service designers who recreate the anatomy of hospitality every
            single day.
          </p>

          <h1 className={styles.h1}>
            Today, the "Sumbuli Group" unites 6 revolutionary concept spaces:
          </h1>
          <ul className={styles.ul}>
            <li>
              <Link to="/golden-hearth" className={styles.about_links_rest}>
                The Golden Hearth
              </Link>
            </li>
            <li className={styles.about_links_li}>
              <Link to="/lumina-terrace" className={styles.about_links_rest}>
                Lumina Terrace
              </Link>
            </li>
            <li className={styles.about_links_li}>
              <Link
                to="/rustic-mill-tavern"
                className={styles.about_links_rest}
              >
                Rustic Mill Tavern
              </Link>
            </li>
            <li className={styles.about_links_li}>
              <Link to="/brewers-courtyard" className={styles.about_links_rest}>
                Brewers Courtyard
              </Link>
            </li>
            <li className={styles.about_links_li}>
              <Link to="/crimson-vineyards" className={styles.about_links_rest}>
                Crimson Vineyards
              </Link>
            </li>
            <li className={styles.about_links_li}>
              <Link to="/grand-feast-hall" className={styles.about_links_rest}>
                Grand Feast Hall
              </Link>
            </li>
            <li className={styles.about_links_li}>
              <Link to="/valley-riverhouse" className={styles.about_links_rest}>
                Valley Riverhouse
              </Link>
            </li>
            <li className={styles.about_links_li}>
              <Link
                to="/pine-and-stone-retreat"
                className={styles.about_links_rest}
              >
                Pine & Stone Retreat
              </Link>
            </li>
            <li className={styles.about_links_li}>
              <Link to="/the-velvet-stage" className={styles.about_links_rest}>
                The Velvet Stage
              </Link>
            </li>
          </ul>
          <br />
          <br />
          <h1 className={styles.h1}>Strategy & Vision</h1>
          <h2 className={styles.h2}>Mission</h2>
          <p className={styles.about_text_p}>
            We strive to unlock the ultimate potential of local agro-products
            through cutting-edge culinary techniques, such as molecular
            gastronomy and advanced fermentation. Our mission is to engineer the
            future of dining—one that respects nature while thrilling the modern
            epicurean.
          </p>

          <h2 className={styles.h2}>Vision</h2>
          <p className={styles.about_text_p}>
            To become a global gastronomic phenomenon, anchoring Georgia on the
            world culinary map as a premier hub for innovation, conceptual
            design, and sustainable luxury.
          </p>
          <h1 className={styles.h1}>Values</h1>
          <ul className={styles.about_ul_2}>
            <li className={styles.about_li_2}>
              Progressiveness: We don't follow trends; we set them. Constantly
              exploring and shattering culinary boundaries is in our DNA.
            </li>
            <li className={styles.about_li_2}>
              Eco-Responsibility: Our kitchens operate strictly on a
              Farm-to-Table ethos, ensuring absolute environmental mindfulness
              and zero waste.
            </li>
            <li className={styles.about_li_2}>
              Aestheticism: Visual perfection in everything—from the minimalist
              architectural interiors to the plating design on the table.
            </li>
            <li className={styles.about_li_2}>
              Individualism: Crafting tailored, deeply personalized sensory
              experiences that anticipate the unspoken desires of our guests.
            </li>
          </ul>

          <h1 className={styles.h1}>Strategic Goals</h1>
          <div className={styles.goals_container}>
            <table className={styles.goals_table}>
              <thead>
                <tr>
                  <th className={styles.th_focus}>Focus Area</th>
                  <th className={styles.th_plan}>Action Plan</th>
                </tr>
              </thead>
              <tbody>
                <tr className={styles.table_row}>
                  <td className={styles.th_focus}>Green Gastronomy</td>
                  <td className={styles.th_plan}>
                    Transitioning to 100% biodynamic produce by expanding our
                    proprietary network of organic micro-farms.
                  </td>
                </tr>
                <tr className={styles.table_row}>
                  <td className={styles.th_focus}>Green Gastronomy</td>
                  <td className={styles.th_plan}>
                    Digital Integration Integrating smart tech (interactive
                    table-mapping, AI-driven wine pairing) to elevate guest
                    comfort.
                  </td>
                </tr>
                <tr className={styles.table_row}>
                  <td className={styles.th_focus}>Green Gastronomy</td>
                  <td className={styles.th_plan}>
                    Global Expansion Launching the first international "Sumbuli"
                    flagship locations in Europe's culinary capitals (London,
                    Paris).
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h1 className={styles.h1}>Ultimate Goal:</h1>
          <p className={styles.about_text_p}>
            To serve as the absolute benchmark of culinary art, where dining
            transcends necessity and becomes a profound source of intellectual
            and emotional pleasure.
          </p>
        </div>
        <LastFlexImages
          images={IMAGES_2}
          openModal={openModal}
          windowWidth={windowWidth}
        />
      </div>

      {/* მოდალი */}
      {isModalOpen && currentImage && (
        <div className={modalStyles.modal} onClick={closeModal}>
          <button
            className={`${modalStyles.prev} ${animateLeft ? modalStyles.buttonDown : ""}`}
            onMouseDown={() => setAnimateLeft(true)}
            onMouseUp={() => setAnimateLeft(false)}
            onMouseLeave={() => setAnimateLeft(false)}
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            <FaCaretLeft />
          </button>

          <button
            className={`${modalStyles.next} ${animateRight ? modalStyles.buttonDown : ""}`}
            onMouseDown={() => setAnimateRight(true)}
            onMouseUp={() => setAnimateRight(false)}
            onMouseLeave={() => setAnimateRight(false)}
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            <FaCaretRight />
          </button>

          <div
            className={modalStyles.outerModalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={modalStyles.closeModalButton}
              onClick={closeModal}
            >
              <FaTimes />
            </button>

            <div className={modalStyles.modalContent}>
              <div
                className={
                  [4, 5].includes(currentImage.id)
                    ? modalStyles.imagesliderForLastTwoImg
                    : modalStyles.imageSlider
                }
              >
                <img
                  className={imageClassMap[currentImage.id] || ""}
                  src={currentImage.url}
                  alt={currentImage.alt}
                  loading="lazy"
                />
              </div>

              <div className={modalStyles.countImages}>
                {IMAGES_FOR_MODAL.findIndex(
                  (img) => img.id === currentImage.id,
                ) + 1}{" "}
                of {IMAGES_FOR_MODAL.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Aboutus;
