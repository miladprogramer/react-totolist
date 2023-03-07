import ToDo from "./ToDo";

const ToDoList = (props) => {
  const toDoItem = props.todoItem;
  const setToDoItem = props.setToDoItem;
  const filteredTodo = props.filteredTodo;
  return (
    <div>
      <ul>
        {filteredTodo.map((item) => (
           
          <ToDo
            key={item.id}
            id={item.id}
            setToDoItem={setToDoItem}
            toDoItem={toDoItem}
            text={item.todo}
            mapItem={item}
          />
        
        ))}
        
      </ul>
    </div>
  );
};
export default ToDoList;
