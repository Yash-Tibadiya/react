import { useState } from "react";
import { BiMessageAdd } from "react-icons/bi";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleAddButtonClick = () => {
    onNewItem(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={(e) => setTodoName(e.target.value)}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            value={todoDate}
            onChange={(e) => setTodoDate(e.target.value)}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClick}
          >
            <BiMessageAdd />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
