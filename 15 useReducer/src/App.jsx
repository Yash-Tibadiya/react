import { useState, useReducer } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { TodoItemsContext } from "./store/todo-items-store";

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newTodoItems;
};

function App() {
  //* const [todoItems, setTodoItems] = useState([]);
  
  //* const addNewItem = (itemName, itemDueDate) => {
    //*   setTodoItems((currValue) => [
      //*     ...currValue,
      //*     { name: itemName, dueDate: itemDueDate },
      //*   ]);
      //* };
      
      //* const deleteItem = (name) => {
        //*   setTodoItems(
  //*     todoItems.filter((item) => {
  //*       return item.name !== name;
  //*     })
  //*   );
  //* };
  
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);
  
  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems key={todoItems}></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
