import "./Form.css";
import { BsPlusLg } from "react-icons/bs";
import { useState } from "react";
const Form = (props) => {
  const [inputToDo, setInputToDo] = useState("");

  const inputToDoHandler = (e) => {
    setInputToDo(e.target.value);
  }
  const addItemHandler=(e)=>{
    e.preventDefault();
    const toDoItem={
      id:Math.floor(Math.random() * 100),
      todo:inputToDo,
      completed:false
  }
  props.addIntoTodo(toDoItem)
  setInputToDo("")
  }

  const statusHandler=(e)=>{
props.setStatus(e.target.value)
  }
 

  return (
    <div>
      <form>
        <input
          type="text"
          className="todo-input"
          onChange={inputToDoHandler}
          value={inputToDo}
        />
        <button className="c" type="submit" onClick={addItemHandler}>
          <BsPlusLg />
        </button>
        <div className="select">
          <select name="todos" className="filter-todo" onChange={statusHandler}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
          
        </div>
      </form>
    </div>
  );
};
export default Form;
