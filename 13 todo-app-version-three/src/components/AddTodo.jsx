import { useState } from "react";
import { BiMessageAdd } from "react-icons/bi";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleAddButtonClick = (e) => {
    e.preventDefault();
    onNewItem(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };

  return (
    <div className="container text-center">
      <form onSubmit={handleAddButtonClick} className="row kg-row">
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
            type="submit"
            className="btn btn-success kg-button"
          >
            <BiMessageAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
