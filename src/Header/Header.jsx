import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";

function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const RESTAURANT_PATHS = [
    "/restorunts",
    "/wisqvili-terasa",
    "/etno-wisqvili",
    "/ludis-moedani",
    "/gvinis-ezo",
    "/sanadimo",
    "/wisqvili-mcxetashi",
    "/wisqvili-wknetshi",
    "/wisqvili-vakeshi",
    "/teatri",
  ];

  const DELIVERY_PATHS = [
    "/delivery",
    "/gamoidzaxe-ludisMoednidan",
    "/gamoidzaxe-tsknetidan",
    "/gamoidzaxe-mcxetidan",
  ];

  const MENIU_PATHS = ["/menu", "/menuList"];

  const NAV_LINKS = [
    { name: "About Us", path: "/aboutus" },
    {
      name: "Restaurants",
      path: "/restorunts",
      matchingPaths: RESTAURANT_PATHS,
    },
    { name: "Delivery", path: "/delivery", matchingPaths: DELIVERY_PATHS },
    { name: "Menu", path: "/menu", matchingPaths: MENIU_PATHS },
    { name: "Blog", path: "/blog" },
    { name: "CSR", path: "/csr" },
    { name: "Vacancy", path: "/jobs" },
    { name: "Contacts", path: "/contacts" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const checkIsActive = (path, matchingPaths) => {
    if (matchingPaths) {
      return matchingPaths.includes(location.pathname);
    }
    return location.pathname === path;
  };

  return (
    <header className={styles.header}>
      <div className={styles.wisqvili}>
        <Link
          to="/"
          onClick={closeMenu}
          className={`${location.pathname === "/" ? styles.active : ""} ${styles.sumbuli_icon} ${styles.engFont}`}
        >
          Sumbuli
        </Link>
      </div>

      <div className={styles.ndiv}>
        <nav className={`${isMenuOpen ? styles.open : ""} ${styles.nav}`}>
          <ul className={styles.ul}>
            {NAV_LINKS.map(({ name, path, matchingPaths }) => {
              const isActive = checkIsActive(path, matchingPaths);
              return (
                <li key={path} className={styles.header_li}>
                  <Link
                    to={path}
                    onClick={closeMenu}
                    className={`${isActive ? styles.active : ""} ${styles.engFont} ${styles.header_links}`}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            className={`${isMenuOpen ? styles.openBtn : ""} ${styles.navBarBtn}`}
            onClick={toggleMenu}
          >
            X
          </button>
        </nav>

        <div className={styles.icon}>
          <FontAwesomeIcon
            onClick={toggleMenu}
            icon={faBars}
            className={styles.fontaw}
          />
          <button className={styles.eng}>
            EN
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;