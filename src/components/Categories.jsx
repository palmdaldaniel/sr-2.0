import { useContext } from "react";
import { RadioContext } from "../contexts/RadioProvider";

import styles from "./css/category.module.css";

const Categories = () => {
  const { categories, filterByCategory, getAllPrograms } = useContext(RadioContext);

  const handleClick = (id) => {
    filterByCategory(id)
  }


  return (

    <div className={styles.categoryWrapper}>
      {categories &&
        categories.map((category) => (
          <div className={styles.category} key={category.id} onClick={() => handleClick(category.id)}>
            <p>{category.name}</p>
          </div>
        ))}
        <button onClick={()=> getAllPrograms()}>Clear result</button>
    </div>
   
  );
};

export default Categories;
