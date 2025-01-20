import { useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const handleAddButtonClick = (e) => {
    e.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    onNewItem(todoName, todoDate);
  };

  return (
    <div className="container text-center">
      <form onSubmit={handleAddButtonClick} className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input type="date" ref={todoDateElement} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button">
            <BiMessageAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
