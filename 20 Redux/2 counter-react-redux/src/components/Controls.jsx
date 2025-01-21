import { useDispatch } from "react-redux";
import { useRef } from "react";

const Controls = () => {
  const dispatch = useDispatch();
  const numberRef = useRef();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleAddition = () => {
    dispatch({
      type: "ADDITION",
      payload: { number: numberRef.current.value },
    });
    numberRef.current.value = "";
  };

  const handleSubtraction = () => {
    dispatch({
      type: "SUBTRACTION",
      payload: { number: numberRef.current.value },
    });
    numberRef.current.value = "";
  };

  const handlePrivacyToggle = () => {
    dispatch({ type: "PRIVACY_TOGGLE" });
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary btn-lg px-4"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success btn-lg px-4"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handlePrivacyToggle}
        >
          Privacy Toggle
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-3">
        <input
          type="text"
          placeholder="Enter Number"
          style={{ width: "140px", textAlign: "center" }}
          ref={numberRef}
        />
        <button
          type="button"
          className="btn btn-info btn-lg px-4"
          onClick={handleAddition}
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger btn-lg px-4"
          onClick={handleSubtraction}
        >
          Subtract
        </button>
      </div>
    </>
  );
};

export default Controls;
