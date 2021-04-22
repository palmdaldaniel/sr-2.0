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
        {categories &&
          categories.map((category) => (
            <div
              className={styles.category}
              key={category.id}
              onClick={() => handleClick(category.id, category.name)}
            >
              <p>{category.name}</p>
            </div>
          ))}
        <button onClick={() => clearResult()}>Rensa</button>
      </div>

      <h5>Valt filter: {label} </h5>
    </>
  );
};

export default Categories;
