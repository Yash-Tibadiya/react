import { useSelector } from "react-redux";
import Bagitem from "../components/Bagitem";
import BagSummary from "../components/BagSummary";

const Bag = () => {
  const bagItems = useSelector((store) => store.bag);
  const Items = useSelector((store) => store.items);

  const cartItems = Items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {cartItems.map((item) => (
              <Bagitem key={item.id} item={item} />
            ))}
          </div>
          <BagSummary />
        </div>
      </main>
    </>
  );
};

export default Bag;
