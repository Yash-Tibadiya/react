import Item from "./Item";

const FoodItems = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          items={item}
          //! parent handel the change in Item
          buyItem={() => {
            console.log(`${item} is buy`);
          }}
        />
      ))}
    </ul>
  );
};

export default FoodItems;
