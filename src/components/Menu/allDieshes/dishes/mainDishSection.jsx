import styles from "./mainDishSection.module.css";
import { useState, useEffect } from "react";

import Img1 from "./dishImages/Img1.webp";
import Img2 from "./dishImages/Img2.webp";
import Img14 from "./dishImages/Img14.webp";
import Img15 from "./dishImages/Img15.webp";
import Img21 from "./dishImages/Img21.webp";
import Img22 from "./dishImages/Img22.webp";
import Img25 from "./dishImages/Img25.webp";
import Img26 from "./dishImages/Img26.webp";
import Img34 from "./dishImages/Img34.webp";
import Img35 from "./dishImages/Img35.webp";
import Img38 from "./dishImages/Img38.webp";
import Img39 from "./dishImages/Img39.webp";
import Img41 from "./dishImages/Img41.webp";
import Img42 from "./dishImages/Img42.webp";
import Img43 from "./dishImages/Img43.webp";
import Img44 from "./dishImages/Img44.webp";
import Img47 from "./dishImages/Img47.webp";
import Img48 from "./dishImages/Img48.webp";
import Img49 from "./dishImages/Img49.webp";
import Img53 from "./dishImages/Img53.webp";
import Img54 from "./dishImages/Img54.webp";
import Img60 from "./dishImages/Img60.webp";
import Img61 from "./dishImages/Img61.webp";
import Img70 from "./dishImages/Img70.webp";
import Img71 from "./dishImages/Img71.webp";
import Img73 from "./dishImages/Img73.webp";
import Img74 from "./dishImages/Img74.webp";
import Img84 from "./dishImages/Img84.webp";
import Img85 from "./dishImages/Img85.webp";

import Icon1 from "./dishImages/icon_1.webp";

// მონაცემები დაყოფილი კატეგორიების მიხედვით
const menuData = [
  /* Appetizers */

  {
    categoryId: "apetaizeri",
    categoryTitle: "Appetizers",
    items: [
      { id: 1, title: "Spinach Pkhali", img: Img1, price: 17, icon: Icon1 },
      { id: 2, title: "Beetroot Pkhali", img: Img2, price: 17 },
    ],
  },

  /* Salads */

  {
    categoryId: "salatebi",
    categoryTitle: "Salads",
    items: [
      {
        id: 14,
        title: "Tomato Salad with Jonjoli",
        description: "Roasted pumpkin seeds, Kakhetian oil",
        img: Img14,
        price: 25,
      },
      {
        id: 15,
        title: "Green Salad",
        img: Img15,
        description:
          "Lettuce, green onion, green apple, olives, mustard dressing",
        price: 18,
      },
  
    ],
  },

  /* To Share */

  {
    categoryId: "saziaro",
    categoryTitle: "To Share",
    items: [
      
      {
        id: 21,
        title: "Pickles Board",
        description:
          "Cabbage, cucumber, pepper, green tomato, cauliflower, garlic",
        img: Img21,
        price: 25,
      },
      {
        id: 22,
        title: "Georgian Cheese Board",
        description: "Sulguni, Imeretian, smoked sulguni",
        img: Img22,
        price: 20,
      },
    ],
  },

  /* Soups */

  {
    categoryId: "wvnianebi",
    categoryTitle: "Soups",
    items: [
      
      { id: 25, title: "Chakaphuli", img: Img25, price: 25 },
      {
        id: 26,
        title: "Xashi",
        description: "Pickled Chinese cabbage",
        img: Img26,
        price: 30,
      },
    ],
  },

  /* Main Dishes */

  {
    categoryId: "mtavariKerdzebi",
    categoryTitle: "Main Dishes",
    items: [
      
      {
        id: 41,
        title: "Stewed Wood Mushrooms with Ghomi and Gurian Ajika Sauce",
        description: "",
        img: Img41,
        price: 28,
      },
      {
        id: 42,
        title: "Pelmeni in a Clay Pot with Parmesan",
        description: "",
        img: Img42,
        price: 24,
      },
    ],
  },

  /* BBQ (Mtsvadi) */

  {
    categoryId: "mtwvadi",
    categoryTitle: "Mtsvadi (BBQ)",
    items: [
      {
        id: 48,
        title: "Grilled Vegetables",
        description: "Bell pepper, zucchini, eggplant, mushrooms, tomato",
        img: Img48,
        price: 22,
      },
      {
        id: 49,
        title: "Kebab with Cheese",
        description: "Beef and pork, sulguni cheese, lavash, red onion",
        img: Img49,
        price: 27,
      },
    ],
  },

  /* Kebab */

  {
    categoryId: "qababi",
    categoryTitle: "Kebab",
    items: [
      
      {
        id: 53,
        title: "Assorted Kebab",
        description:
          "Kebab in lavash, kebab with cheese, chicken kebab, satsebeli",
        img: Img53,
        price: 68,
      },
      {
        id: 54,
        title: "Kebab Board",
        description:
          "Kebab in lavash, kebab with cheese, chicken kebab, satsebeli",
        img: Img54,
        price: 68,
      },
    ],
  },

  /* Khinkali */
  {
    categoryId: "qinkali",
    categoryTitle: "Khinkali",
    items: [
     
      {
        id: 60,
        title: "Potato Khinkali",
        description: "",
        img: Img60,
        price: 2.3,
      },
      {
        id: 61,
        title: "Khinkluka (Mini Khinkali)",
        description: "",
        img: Img61,
        price: 2.7,
      },
    ],
  },
  /* From the Oven */

  {
    categoryId: "gumelidan",
    categoryTitle: "From the Oven",
    items: [
      {
        id: 70,
        title: "Chvishtari",
        description: "(1 piece)",
        img: Img70,
        price: 10,
      },
      {
        id: 71,
        title: "Kakhetian Shoti",
        description: "",
        img: Img71,
        price: 4.5,
      },
    ],
  },

  /* Side Dishes */

  {
    categoryId: "garniri",
    categoryTitle: "Side Dishes",
    items: [
      {
        id: 73,
        title: "Mexican-style Potatoes",
        description: "",
        img: Img73,
        price: 17,
      },
      {
        id: 74,
        title: "French Fries",
        description: "",
        img: Img74,
        price: 13,
      },
    ],
  },

  /* Desserts */

  {
    categoryId: "deserti",
    categoryTitle: "Desserts",
    items: [
      {
        id: 84,
        title: "Cheesecake with Salted Caramel Sauce",
        description: "Cream cheese, lime zest",
        img: Img84,
        price: 18,
      },
      {
        id: 85,
        title: "Napoleon",
        description: "Puff pastry, custard",
        img: Img85,
        price: 17,
      },
    ],
  },
];

const grillMenuData = [
  {
    categoryId: "mtavariKerdzebi",
    categoryTitle: "Main Dishes",
    items: [
      {
        id: 34,
        title: "Khashlama",
        description: "Beef, garlic, celery",
        img: Img34,
        price: 55,
      },
      {
        id: 35,
        title: "Tolma in Grape Leaves",
        description: "Beef, pork, rice, matsoni sauce",
        img: Img35,
        price: 27,
      },
    ],
  },
  {
    categoryId: "fish",
    categoryTitle: "Fish",
    items: [
      
      {
        id: 38,
        title: "Fish",
        description: "",
        img: Img38,
        price: 38,
      },
      {
        id: 39,
        title: "Fish",
        description: "",
        img: Img39,
        price: 39,
      },
    ],
  },
  {
    categoryId: "meat",
    categoryTitle: "Meat",
    items: [
      {
        id: 43,
        title: "Meat",
        description: "",
        img: Img43,
        price: 43,
      },
      {
        id: 44,
        title: "Meat",
        description: "",
        img: Img44,
        price: 44,
      },
    ],
  },
  {
    categoryId: "garniri",
    categoryTitle: "Side Dishes",
    items: [
      {
        id: 47,
        title: "Side Dish",
        description: "",
        img: Img47,
        price: 47,
      },
      {
        id: 48,
        title: "Side Dish",
        description: "",
        img: Img48,
        price: 48,
      },
    ],
  },
];

export default function MainDishSection({ menuType }) {
  // სქროლის მდგომარეობის თრექინგი
  const [isFixed, setIsFixed] = useState(false);
  const [currentMenuData, setCurrentMenuData] = useState(menuData);

  useEffect(() => {
    if (menuType === "grill") {
      setCurrentMenuData(grillMenuData);
    } else {
      setCurrentMenuData(menuData);
    }
  }, [menuType]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    // ვუსმენთ სქროლის ივენთს
    window.addEventListener("scroll", handleScroll);

    // ვასუფთავებთ ივენთს კომპონენტის წაშლისას (Unmount)
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={isFixed ? styles.mainDivFixed : styles.mainDiv}>
      <div className={styles.container}>
        {currentMenuData.map((category) => (
          <div key={category.categoryId} className={styles.categorySection}>
            <h2 id={category.categoryId} className={styles.categoryHeading}>
              {category.categoryTitle}
            </h2>
            <div className={styles.menuGrid}>
              {category.items.map((item) => (
                <div key={item.id} className={styles.menuCard}>
                  <div className={styles.menuImgWrapper}>
                    <img
                      src={item.img}
                      alt={item.title}
                      className={styles.menuImg}
                    />
                  </div>
                  <div className={styles.menuInfo}>
                    <div>
                      <div className={styles.titleSection}>
                        <h3 className={styles.menuTitle}>{item.title}</h3>
                      </div>
                      {item.description && (
                        <p className={styles.menuDescription}>
                          {item.description}
                        </p>
                      )}
                    </div>

                    <div className={styles.pricBoxAndIcon}>
                      {item.icon ? (
                        <img
                          src={item.icon}
                          alt="icon"
                          className={styles.icon_dish_1}
                        />
                      ) : (
                        <div />
                      )}
                      <div className={styles.priceBox}>
                        {item.price}.<sup>00</sup>₾
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
