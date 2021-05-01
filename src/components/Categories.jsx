import { useContext, useState } from "react";
import { RadioContext } from "../contexts/RadioProvider";

import styles from "./css/category.module.css";

const Categories = () => {
  const { categories, filterByCategory, getAllPrograms } = useContext(
    RadioContext
  );
  const [label, setLabel] = useState(null);
  const handleClick = (id, category) => {
    filterByCategory(id);
    setLabel(category);
  };

  const clearResult = () => {
    getAllPrograms();
    setLabel(null);
  };

  return (
    <>
      <div className={styles.categoryWrapper}>
        <div className={styles.container}>
          {categories &&
            categories.map((category) => (
              <div
                className={styles.category}
                key={category.id}
                onClick={() => handleClick(category.id, category.name)}
              >
                <p className={styles.paragraph}>{category.name}</p>
              </div>
            ))}
        </div>
      </div>
      <div className={styles.filterinfo}>
        <h5 className={styles.filtertext}>
          Valt filter: <span>{label} </span>
        </h5>
        <button onClick={() => clearResult()}>Rensa filter</button>
      </div>
    </>
  );
};

export default Categories;
