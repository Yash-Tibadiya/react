import { useState } from "react";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/container";
import FoodInput from "./components/FoodInput";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

function App() {
  // let foodItems = [];
  // let foodItems = ["Roti", "Milk", "Dal", "Rice", "Salad", "Butter", "Sabzi"];
  // let textToShow = "Food item entered by user";

  const [foodItems, setFoodItems] = useState([]);
  // const [foodItems, setFoodItems] = useState(["Roti", "Milk", "Dal", "Rice"]);
  const [taxtToShow, setTextToShow] = useState();

  //! parent handel the change in FoodInput
  const onKeyDown = (e) => {
    // console.log(e.target.value);
    //! not change the state so textToShow not change
    // textToShow = e.target.value;

    if(e.key === "Enter"){
      let newFoodItem = e.target.value;
      e.target.value= "";
      // setTextToShow(e.target.value);
      setFoodItems([...foodItems, newFoodItem]);
    }
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <p>{taxtToShow}</p>
        <ErrorMessage items={foodItems} />
        {/* <FoodInput handleOnChange={handleOnChange} /> */}
        <FoodInput handleKeyDown={onKeyDown} />
        <FoodItems items={foodItems} />
      </Container>
      {/* <Container>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quia, ex deleniti praesentium laborum blanditiis neque in dolorum nisi nulla minima repellendus earum perspiciatis quae ratione. Quas alias soluta accusamus dicta necessitatibus.</p>
      </Container> */}
    </>
  );
}

export default App;
