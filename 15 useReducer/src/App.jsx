import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import TodoItemsContextProvider from "./store/todo-items-store";



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

  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems />
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
