import { Link } from "react-router-dom";
import styles from "./BlogsAndNews.module.css";

function BlogsAndNews({ images }) {
  return (
    <div className={styles.gridDiv}>
      {images.map(({ url, alt, route }, index) => (
        <div key={index} className={styles[`div${index}`]}>
          <img
            className={`${styles.url} ${styles[`img${index}`]}`}
            src={url}
            alt={alt}
          />
          <Link to={route}>
            <div className={styles.textOnImages}>
              {index === 2 ? (
                <>
                  <div className={styles.dateDiv}>12.05.2026</div>
                  <div className={styles.lastTextNameOnImages}>
                    <span className={styles.span1}>
                      Hidden Dining Gems in the Heart of the City
                    </span>
                    <span className={styles.span2}>
                      Finding the perfect spot to dine isn't just about the food; 
                      it's about the atmosphere, the stories, and the memories you create. 
                      Discover our curated list of secret culinary locations.
                    </span>
                    <span className={styles.span3}>Read More</span>
                  </div>
                </>
              ) : (
                ""
              )}
              <div className={styles.textNameOnImages}>
                <div className={styles.dateDiv1_2}>
                  {index === 0 || index === 1 ? "10.05.2026" : ""}
                </div>
                {index === 0
                  ? "Modern Interior Trends: Blending Heritage with Innovation"
                  : index === 1
                  ? "A Foodie's Guide to Authentic Local Flavors and Crusts"
                  : ""}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogsAndNews;