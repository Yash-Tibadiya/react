import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/container";
import FoodInput from "./components/FoodInput";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

function App() {
  // let foodItems = [];
  let foodItems = ["Roti", "Milk", "Dal", "Rice", "Salad", "Butter", "Sabzi"];

    //! parent handel the change in FoodInput
    const handleOnChange = (e) => {
      console.log(e.target.value);
    };


  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <ErrorMessage items={foodItems} />
        <FoodInput handleOnChange={handleOnChange} />
        <FoodItems items={foodItems} />
      </Container>
      {/* <Container>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quia, ex deleniti praesentium laborum blanditiis neque in dolorum nisi nulla minima repellendus earum perspiciatis quae ratione. Quas alias soluta accusamus dicta necessitatibus.</p>
      </Container> */}
    </>
  );
}

export default App;
