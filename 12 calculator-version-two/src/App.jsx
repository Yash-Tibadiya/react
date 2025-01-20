import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setValue("");
    } else if (buttonText === "=") {
      setValue(eval(value));
    } else {
      setValue(value + buttonText);
    }
  };

  return (
    <>
      <div className={styles.calculator}>
        <Display displayValue={value} />
        <ButtonsContainer onButtonClick={onButtonClick} />
      </div>
    </>
  );
}

export default App;
