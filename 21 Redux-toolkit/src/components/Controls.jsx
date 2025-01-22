import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";

const Controls = () => {
  const dispatch = useDispatch();
  const numberRef = useRef();

  //! increment counter by 1
  const handleIncrement = () => {
    dispatch(counterActions.incriment());
  };

  //! decrement counter by 1
  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  //! toggle privacy
  const handlePrivacyToggle = () => {
    dispatch(privacyActions.toggle());
  };

  //! add value to counter
  const handleAddition = () => {
    dispatch(counterActions.addition(numberRef.current.value));
    numberRef.current.value = "";
  };

  //! subtract value from counter
  const handleSubtraction = () => {
    dispatch(counterActions.subtraction(numberRef.current.value));
    numberRef.current.value = "";
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
