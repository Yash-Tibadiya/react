import { useState } from "react";
import Item from "./Item";

const FoodItems = ({ items }) => {
  const [activeItems, setActiveItems] = useState([]);

  const onBuyButton = (item) => {
    if (!activeItems.includes(item)) {
      setActiveItems([...activeItems, item]);
    }
  };

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          items={item}
          bought={activeItems.includes(item)}
          buyItem={() => onBuyButton(item)}
        />
      ))}
    </ul>
  );
};

export default FoodItems;
