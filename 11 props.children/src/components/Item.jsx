import styles from "./Item.module.css";

const Item = ({ items, buyItem, bought }) => {
  return (
    <li
      className={`${styles["kg-item"]} list-group-item ${
        bought ? "active" : ""
      }`}
    >
      <span className={styles["kg-span"]}>{items}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={buyItem}
        disabled={bought} // Disable button if already bought
      >
        {bought ? "Bought" : "Buy"}
      </button>
    </li>
  );
};

export default Item;
