import { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import styles from "./topFixedElement.module.css";

const mainCategories = [
  { title: "Appetizers", id: "apetaizeri" },
  { title: "Salads", id: "salatebi" },
  { title: "To Share", id: "saziaro" },
  { title: "Soups", id: "wvnianebi" },
  { title: "Main Dishes", id: "mtavariKerdzebi" },
  { title: "Mtsvadi", id: "mtwvadi" },
  { title: "Kebab", id: "qababi" },
  { title: "Khinkali", id: "qinkali" },
  { title: "From The Oven", id: "gumelidan" },
  { title: "Side Dishes", id: "garniri" },
  { title: "Desserts", id: "deserti" },
];

const grillCategories = [
  { title: "Main Dishes", id: "mtavariKerdzebi" },
  { title: "Fish", id: "fish" },
  { title: "Meat", id: "meat" },
  { title: "Side Dishes", id: "garniri" },
];

export default function TopFixedElement({
  isSticky,
  openModal,
  activeMenu,
  setActiveMenu,
}) {
  const sliderRef = useRef(null);
  const velocityRef = useRef(0);
  const animationRef = useRef(null);
  const buttonIntervalRef = useRef(null);
  const [categories, setCategories] = useState(mainCategories);

  useEffect(() => {
    if (activeMenu === "grill") {
      setCategories(grillCategories);
    } else {
      setCategories(mainCategories);
    }
  }, [activeMenu]);

  // --- მთავარი ანიმაციის ციკლი (სრიალი და შენელება) ---
  const animateScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    if (Math.abs(velocityRef.current) < 0.1) {
      velocityRef.current = 0;
      return;
    }
    slider.scrollLeft += velocityRef.current;
    if (!buttonIntervalRef.current) {
      velocityRef.current *= 0.94;
    }

    animationRef.current = requestAnimationFrame(animateScroll);
  };

  // ანიმაციის უსაფრთხო დაწყება
  const startAnimation = () => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    animationRef.current = requestAnimationFrame(animateScroll);
  };

  // --- მაუსის რგოლით (Wheel) სქროლვა ---
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleWheel = (e) => {
      e.preventDefault();
      velocityRef.current += e.deltaY * 0.05;
      startAnimation();
    };

    slider.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      slider.removeEventListener("wheel", handleWheel);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (buttonIntervalRef.current) clearInterval(buttonIntervalRef.current);
    };
  }, []);

  // --- ისრებზე დაჭერის (Hold და Click) ახალი ლოგიკა ---
  const handleArrowPress = (direction) => {
    if (buttonIntervalRef.current) clearInterval(buttonIntervalRef.current);
    const speedStep = direction === "left" ? -2 : 2;
    const initialImpulse = direction === "left" ? -10 : 10;
    velocityRef.current = initialImpulse;
    startAnimation();
    buttonIntervalRef.current = setInterval(() => {
      velocityRef.current = speedStep * 3;
    }, 50);
  };

  const handleArrowRelease = () => {
    // როგორც კი ღილაკს ხელს ავუშვებთ, ინტერვალს ვთიშავთ
    if (buttonIntervalRef.current) {
      clearInterval(buttonIntervalRef.current);
      buttonIntervalRef.current = null;
    }
  };

  // --- მაუსით/თითით გაწევის (Drag) ლოგიკა ---
  const handleMouseDown = (e) => {
    velocityRef.current = 0;
    if (animationRef.current) cancelAnimationFrame(animationRef.current);

    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseLeave = () => {
    setIsDragging(false);
    handleArrowRelease();
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    handleArrowRelease();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = x - startX;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleScrollToCategory = (e, id) => {
    e.preventDefault(); // გათიშეთ <a> თეგის სტანდარტული ქცევა

    const targetElement = document.getElementById(id);
    if (targetElement) {
      const offset = 200;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const resetScroll = () => {
    window.scrollTo({
      top: 300,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`${styles.headerWrapper} ${isSticky ? styles.stickyMode : ""}`}
    >
      <div className={styles.topHeader}>
        <div className={styles.topHeaderInner}>
          <h1 className={styles.title}>All Restorants Menu</h1>

          <div className={styles.twoButtons}>
            <div className={styles.topButtons}>
              <button
                onClick={() => setActiveMenu("main")}
                className={
                  activeMenu === "main" ? styles.activeLink : styles.navBtn
                }
              >
                Dishes
              </button>
            </div>

            <div className={styles.topButtons}>
              <button
                onClick={() => setActiveMenu("grill")}
                className={
                  activeMenu === "grill" ? styles.activeLink : styles.navBtn
                }
              >
                Grill Dishes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.sliderWrapper}>
          <div className={styles.arraws_slider}>
            {/* მარცხენა ისარი */}
            <button
              className={styles.arrowBtn}
              onMouseDown={() => handleArrowPress("left")}
              onMouseUp={handleArrowRelease}
              onMouseLeave={handleArrowRelease}
              onTouchStart={() => handleArrowPress("left")}
              onTouchEnd={handleArrowRelease}
            >
              <FaChevronLeft />
            </button>

            <div
              className={styles.sliderContainer}
              ref={sliderRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              {categories.map(({ title, id }, index) => (
                <a
                  href={`#${id}`}
                  key={index}
                  className={styles.categoryItem}
                  onDragStart={(e) => e.preventDefault()}
                  onClick={(e) => {
                    if (id === "apetaizeri") {
                      e.preventDefault();
                      resetScroll();
                    } else {
                      handleScrollToCategory(e, id);
                    }
                  }}
                >
                  {title}
                </a>
              ))}
            </div>

            {/* მარჯვენა ისარი */}
            <button
              className={styles.arrowBtn}
              onMouseDown={() => handleArrowPress("right")}
              onMouseUp={handleArrowRelease}
              onMouseLeave={handleArrowRelease}
              onTouchStart={() => handleArrowPress("right")}
              onTouchEnd={handleArrowRelease}
            >
              <FaChevronRight />
            </button>
          </div>
          <button onClick={() => openModal()} className={styles.allCatsBtn}>
            All Categories
          </button>
        </div>
      </div>
    </div>
  );
}
