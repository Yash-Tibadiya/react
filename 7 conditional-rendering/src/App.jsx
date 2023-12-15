import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

function App() {
  // let FoodItems = ["Roti", "Milk", "Dal", "Rice", "Salad", "Butter"];
  let FoodItems = [];

  // if (FoodItems.length === 0) {
  //   return <h3>I am still hungry.</h3>;
  // }

  // let emptyMessage = FoodItems.length === 0 ? <h3>I am still hungry.</h3> : null;

  return (
    <>
      <h1>Healthy Food</h1>
      {/* {emptyMessage} */}
      {FoodItems.length === 0 && <h3>I am still hungry.</h3>}
      <ul className="list-group">
        {FoodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;

// if-else
// Ternary operators
// Logical operators
