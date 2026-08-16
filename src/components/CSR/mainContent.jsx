import styles from "./mainContent.module.css";
import { Link } from "react-router-dom";
import Masonry from "react-masonry-css";

import Img1 from "./CSRImages/Img1.webp";
import Img2 from "./CSRImages/Img2.webp";
import Img3 from "./CSRImages/Img3.webp";
import Img4 from "./CSRImages/Img4.webp";
import Img5 from "./CSRImages/Img5.webp";
import Img6 from "./CSRImages/Img6.webp";
import Img7 from "./CSRImages/Img7.webp";
import Img8 from "./CSRImages/Img8.webp";
import Img9 from "./CSRImages/Img9.webp";
import Img10 from "./CSRImages/Img10.webp";
import Img11 from "./CSRImages/Img11.webp";
import Img12 from "./CSRImages/Img12.webp";
import Img13 from "./CSRImages/Img13.webp";
import Img14 from "./CSRImages/Img14.webp";

function MainContent() {
  // სვეტების რაოდენობა ეკრანის ზომების მიხედვით
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    768: 2,
    500: 1,
  };

  return (
    <div className={styles.mainContent}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles.myMasonryGrid}
        columnClassName={styles.myMasonryGridColumn}
      >
        <div className={styles.divForFlexOfBlogs}>
          <div className={styles.blogItem}>
            <img className={styles.blogItemImage} alt="Blog Image" src={Img1} loading="lazy" />
          </div>
          <div className={styles.blogItemText}>
            <Link className={styles.blogItemTextLink} to="#">
              <h2 className={styles.blogItemTextTitle}>
                "Sumbuli Group's" New Year Support for Families with Children
                with Disabilities
              </h2>
            </Link>
            <p className={styles.blogItemTextDate}>08.10.2025</p>
            <p className={styles.blogItemTextDescription}>
              For us, social responsibility is not just a one-time help - it is
              a constant involvement and support for families with special
              needs.
            </p>
            <button className={styles.blogItemButn}>
              <Link className={styles.blogItemTextLink} to="#">
                Read More
              </Link>
            </button>
          </div>
        </div>

        <div className={styles.divForFlexOfBlogs}>
          <div className={styles.blogItem}>
            <img className={styles.blogItemImage} alt="Blog Image" src={Img2} loading="lazy" />
          </div>
          <div className={styles.blogItemText}>
            <Link className={styles.blogItemTextLink} to="#">
              <h2 className={styles.blogItemTextTitle}>
                Social Responsibility: "Sumbuli Group's" Assistance to a Family
                Living in Kaspi
              </h2>
            </Link>
            <p className={styles.blogItemTextDate}>08.10.2025</p>
            <p className={styles.blogItemTextDescription}>
              "Sumbuli Group" continues its activities based on social
              responsibility and will actively support families and public
              initiatives that need social support and assistance in the future.
            </p>
            <button className={styles.blogItemButn}>
              <Link className={styles.blogItemTextLink} to="#">
                Read More
              </Link>
            </button>
          </div>
        </div>

        <div className={styles.divForFlexOfBlogs}>
          <div className={styles.blogItem}>
            <img className={styles.blogItemImage} alt="Blog Image" src={Img3} loading="lazy" />
          </div>
          <div className={styles.blogItemText}>
            <Link className={styles.blogItemTextLink} to="#">
              <h2 className={styles.blogItemTextTitle}>
                Support for Families within the Framework of Cooperation with
                "SOS Children's Village"
              </h2>
            </Link>
            <p className={styles.blogItemTextDate}>08.10.2025</p>
            <p className={styles.blogItemTextDescription}>
              "Sumbuli Group" continues its cooperation with "SOS Children's
              Village" and will be actively involved in initiatives aimed at
              supporting vulnerable families in the future.
            </p>
            <button className={styles.blogItemButn}>
              <Link className={styles.blogItemTextLink} to="#">
                Read More
              </Link>
            </button>
          </div>
        </div>

        <div className={styles.divForFlexOfBlogs}>
          <div className={styles.blogItem}>
            <img className={styles.blogItemImage} alt="Blog Image" src={Img4} loading="lazy" />
          </div>
          <div className={styles.blogItemText}>
            <Link className={styles.blogItemTextLink} to="#">
              <h2 className={styles.blogItemTextTitle}>
                Social Responsibility Initiative in Partnership with SOS
                Children's Village
              </h2>
            </Link>
            <p className={styles.blogItemTextDate}>08.10.2025</p>
            <p className={styles.blogItemTextDescription}>
              "Sumbuli Group" continues its activities based on social
              responsibility and will continue to support those who need help
              and support the most.
            </p>
            <button className={styles.blogItemButn}>
              <Link className={styles.blogItemTextLink} to="#">
                Read More
              </Link>
            </button>
          </div>
        </div>

        <div className={styles.divForFlexOfBlogs}>
          <div className={styles.blogItem}>
            <img className={styles.blogItemImage} alt="Blog Image" src={Img5} loading="lazy" />
          </div>
          <div className={styles.blogItemText}>
            <Link className={styles.blogItemTextLink} to="#">
              <h2 className={styles.blogItemTextTitle}>
                Social Responsibility Initiative in Partnership with SOS
                Children's Village
              </h2>
            </Link>
            <p className={styles.blogItemTextDate}>08.10.2025</p>
            <p className={styles.blogItemTextDescription}>
              "Sumbuli Group" continues its activities based on social
              responsibility and will continue to support those who need help
              and support the most.
            </p>
            <button className={styles.blogItemButn}>
              <Link className={styles.blogItemTextLink} to="#">
                Read More
              </Link>
            </button>
          </div>
        </div>

        <div className={styles.divForFlexOfBlogs}>
          <div className={styles.blogItem}>
            <img className={styles.blogItemImage} alt="Blog Image" src={Img6} loading="lazy" />
          </div>
          <div className={styles.blogItemText}>
            <Link className={styles.blogItemTextLink} to="#">
              <h2 className={styles.blogItemTextTitle}>
                "Sumbuli Group's" Assistance to the Elderly Nursing Home
              </h2>
            </Link>
            <p className={styles.blogItemTextDate}>08.10.2025</p>
            <p className={styles.blogItemTextDescription}>
              "Sumbuli Group" constantly strives to help those who need support
              the most within the framework of Corporate Social Responsibility
              (CSR).
            </p>
            <button className={styles.blogItemButn}>
              <Link className={styles.blogItemTextLink} to="#">
                Read More
              </Link>
            </button>
          </div>
        </div>

        <div className={styles.divForFlexOfBlogs}>
          <div className={styles.blogItem}>
            <img className={styles.blogItemImage} alt="Blog Image" src={Img7} loading="lazy" />
          </div>
          <div className={styles.blogItemText}>
            <Link className={styles.blogItemTextLink} to="#">
              <h2 className={styles.blogItemTextTitle}>
                "Sumbuli Group's" New Year Assistance to a Family of 11
              </h2>
            </Link>
            <p className={styles.blogItemTextDate}>08.10.2025</p>
            <p className={styles.blogItemTextDescription}>
              "Sumbuli Group" always tries to lend a hand to those who need
              support the most. As part of this year's New Year campaign, our
              team visited a family of 11.
            </p>
            <button className={styles.blogItemButn}>
              <Link className={styles.blogItemTextLink} to="#">
                Read More
              </Link>
            </button>
          </div>
        </div>

        <div className={styles.divForFlexOfBlogs}>
          <div className={styles.blogItem}>
            <img className={styles.blogItemImage} alt="Blog Image" src={Img8} loading="lazy" />
          </div>
          <div className={styles.blogItemText}>
            <Link className={styles.blogItemTextLink} to="#">
              <h2 className={styles.blogItemTextTitle}>
                "Sumbuli Group's" Assistance to the Elderly Nursing Home
              </h2>
            </Link>
            <p className={styles.blogItemTextDate}>08.10.2025</p>
            <p className={styles.blogItemTextDescription}>
              "Sumbuli Group" constantly strives to help those who need support
              the most within the framework of Corporate Social Responsibility
              (CSR).
            </p>
            <button className={styles.blogItemButn}>
              <Link className={styles.blogItemTextLink} to="#">
                Read More
              </Link>
            </button>
          </div>
        </div>

        <div className={styles.divForFlexOfBlogs}>
          <div className={styles.blogItem}>
            <img className={styles.blogItemImage} alt="Blog Image" src={Img9} loading="lazy" />
          </div>
          <div className={styles.blogItemText}>
            <Link className={styles.blogItemTextLink} to="#">
              <h2 className={styles.blogItemTextTitle}>
                "Sumbuli Group" Wished a Happy New Year to the Dzegvi Orphanage
              </h2>
            </Link>
            <p className={styles.blogItemTextDate}>08.10.2025</p>
            <p className={styles.blogItemTextDescription}>
              80 people live in the Dzegvi orphanage. Among them are children,
              the elderly, and people with psychosomatic disorders.
            </p>
            <button className={styles.blogItemButn}>
              <Link className={styles.blogItemTextLink} to="#">
                Read More
              </Link>
            </button>
          </div>
        </div>

        <div className={styles.divForFlexOfBlogs}>
          <div className={styles.blogItem}>
            <img
              className={styles.blogItemImage}
              alt="Blog Image"
              src={Img10}
              loading="lazy"
            />
          </div>
          <div className={styles.blogItemText}>
            <Link className={styles.blogItemTextLink} to="#">
              <h2 className={styles.blogItemTextTitle}>
                "Sumbuli Group's" New Year Assistance to a Family
              </h2>
            </Link>
            <p className={styles.blogItemTextDate}>08.10.2025</p>
            <p className={styles.blogItemTextDescription}>
              For the New Year, "Sumbuli Group" provided a family of 10 with
              winter supplies, a New Year's feast, and gifts.
            </p>
            <button className={styles.blogItemButn}>
              <Link className={styles.blogItemTextLink} to="#">
                Read More
              </Link>
            </button>
          </div>
        </div>

        <div className={styles.divForFlexOfBlogs}>
          <div className={styles.blogItem}>
            <img
              className={styles.blogItemImage}
              alt="Blog Image"
              src={Img11}
              loading="lazy"
            />
          </div>
          <div className={styles.blogItemText}>
            <Link className={styles.blogItemTextLink} to="#">
              <h2 className={styles.blogItemTextTitle}>
                Ukrainian Children Visited "Sumbuli Group"
              </h2>
            </Link>
            <p className={styles.blogItemTextDate}>08.10.2025</p>
            <p className={styles.blogItemTextDescription}>
              During the 2-day Georgian Corners Festival, "Sumbuli Group" hosted
              Ukrainian children.
            </p>
            <button className={styles.blogItemButn}>
              <Link className={styles.blogItemTextLink} to="#">
                Read More
              </Link>
            </button>
          </div>
        </div>

        <div className={styles.divForFlexOfBlogs}>
          <div className={styles.blogItem}>
            <img
              className={styles.blogItemImage}
              alt="Blog Image"
              src={Img12}
              loading="lazy"
            />
          </div>
          <div className={styles.blogItemText}>
            <Link className={styles.blogItemTextLink} to="#">
              <h2 className={styles.blogItemTextTitle}>
                "Sumbuli Group" Hosted Beneficiaries of the Chernovetskyi Fund
              </h2>
            </Link>
            <p className={styles.blogItemTextDate}>08.10.2025</p>
            <p className={styles.blogItemTextDescription}>
              At the Georgian Corners Festival, "Sumbuli Group" hosted
              beneficiaries of the Chernovetskyi Fund.
            </p>
            <button className={styles.blogItemButn}>
              <Link className={styles.blogItemTextLink} to="#">
                Read More
              </Link>
            </button>
          </div>
        </div>

        <div className={styles.divForFlexOfBlogs}>
          <div className={styles.blogItem}>
            <img
              className={styles.blogItemImage}
              alt="Blog Image"
              src={Img13}
              loading="lazy"
            />
          </div>
          <div className={styles.blogItemText}>
            <Link className={styles.blogItemTextLink} to="#">
              <h2 className={styles.blogItemTextTitle}>
                "Sumbuli Group" Will Help Beneficiaries of Crime Prevention
              </h2>
            </Link>
            <p className={styles.blogItemTextDate}>08.10.2025</p>
            <p className={styles.blogItemTextDescription}>
              The festival will be held in one of the main historical and
              tourist centers of the city, on Gorgasali Square.
            </p>
            <button className={styles.blogItemButn}>
              <Link className={styles.blogItemTextLink} to="#">
                Read More
              </Link>
            </button>
          </div>
        </div>

        <div className={styles.divForFlexOfBlogs}>
          <div className={styles.blogItem}>
            <img
              className={styles.blogItemImage}
              alt="Blog Image"
              src={Img14}
              loading="lazy"
            />
          </div>
          <div className={styles.blogItemText}>
            <Link className={styles.blogItemTextLink} to="#">
              <h2 className={styles.blogItemTextTitle}>
                "Sumbuli Group" Joins the "Become a Secret Santa" Campaign
              </h2>
            </Link>
            <p className={styles.blogItemTextDate}>08.10.2025</p>
            <p className={styles.blogItemTextDescription}>
              "Sumbuli Group" joins the "Become a Secret Santa" project of the
              Buckswood Volunteers Club, which aims to fulfill the wishes of
              socially vulnerable children.
            </p>
            <button className={styles.blogItemButn}>
              <Link className={styles.blogItemTextLink} to="#">
                Read More
              </Link>
            </button>
          </div>
        </div>
      </Masonry>
    </div>
  );
}

export default MainContent;
