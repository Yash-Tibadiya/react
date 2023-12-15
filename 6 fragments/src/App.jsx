import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

function App() {
  let FoodItems = ["Roti", "Milk", "Dal", "Rice", "Salad", "Butter"];

  return (
    <>
      {/* when you remove div it give error so we use React.Fragment also use <> </> */}
      <h1>Healthy Food</h1>
      <ul className="list-group">
        {/* map method */}
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
