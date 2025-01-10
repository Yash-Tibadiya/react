import styles from "./Item.module.css";

const Item = ({ items }) => {
  return (
    <li className={`${styles["kg-item"]}`}>
      <span className={styles["kg-span"]}>{items}</span>
    </li>
  );
};

export default Item;
