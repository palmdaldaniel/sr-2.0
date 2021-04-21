import { useContext } from "react";
import { ChannelContext } from "../contexts/ChannelProvider";

import styles from "./css/category.module.css";

const Categories = () => {
  const { categories } = useContext(ChannelContext);
  console.log(categories);
  return (
    <div className={styles.categoryWrapper}>
      <h1> Teman </h1>
      {categories &&
        categories.map((category) => (
          <div className={styles.category} key={category.id}>
            <p>{category.name}</p>
          </div>
        ))}
    </div>
  );
};

export default Categories;
