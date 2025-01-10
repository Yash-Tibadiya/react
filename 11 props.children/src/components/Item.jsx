import styles from "./Item.module.css";

const Item = ({ items, buyItem }) => {

  return (
    <li className={`${styles["kg-item"]} list-group-item`}>
      <span className={styles["kg-span"]}>{items}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={buyItem}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
