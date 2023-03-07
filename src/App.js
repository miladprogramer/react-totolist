import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDosList";

function App() {
  const [todoItem, setToDoItem] = useState([]);
  const [status, setStatus] = useState(["all"]);
  const [filteredTodo, setFilteredTodo] = useState([]);

  useEffect(() => {
    getTodoFromLocal();
  }, []);

  useEffect(() => {
    filterTodoHandler();
    saveToLocal();
  }, [todoItem, status]);

 

  const saveToLocal = () => {
    localStorage.setItem("todoItem", JSON.stringify(todoItem));
  };
  const getTodoFromLocal = () => {
    const todoLocal = JSON.parse(localStorage.getItem("todoItem"));
    setToDoItem(todoLocal || []);
  };

  const addIntoTodo = (item) => {
    setToDoItem((prevAddIntoTodo) => {
      return [...prevAddIntoTodo, item];
    });
  };

  const filterTodoHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodo(todoItem.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodo(todoItem.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodo(todoItem);
        break;
    }
  };
  return (
    <div className="App">
      <h3>ToDo List</h3>

      <Form
        addIntoTodo={addIntoTodo}
        todoItem={todoItem}
        setToDoItem={setToDoItem}
        setStatus={setStatus}
      />
     
      <ToDoList
        todoItem={todoItem}
        setToDoItem={setToDoItem}
        filteredTodo={filteredTodo}
      />
   
    </div>
  );
}

export default App;
