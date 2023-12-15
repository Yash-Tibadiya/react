import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

function App() {
  // let foodItems = [];
  let foodItems = ["Roti", "Milk", "Dal", "Rice", "Salad", "Butter", "Sabzi"];

  return (
    <>
      <h1 className="food-heading">Healthy Food</h1>
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </>
  );
}

export default App;
