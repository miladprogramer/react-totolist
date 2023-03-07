import "./ToDo.css";
import { BsCheckLg } from "react-icons/bs";
import { BsTrashFill } from "react-icons/bs";

const ToDo = (props) => {
  const toDoItem = props.toDoItem;
  const setToDoItem = props.setToDoItem;
  const mapItem=props.mapItem;

  const deleteItem=(id)=>{
    
    setToDoItem((prevToDoItem)=>{
        return prevToDoItem.filter((item)=>{
          return  id !== item.id
        })
      })
  }
  
  const completeItem=()=>{
    console.log(toDoItem)
    setToDoItem(
      toDoItem.map((item) => {
    
        if(item.id === mapItem.id){
            return{
                ...item,
                completed:!item.completed,

            }
        }
        
        return item;
        
    })
    )
  }
  return (
    <div className="container">

          <div className="todo-container" >
            <li className={`todo-item ${mapItem.completed ? "completed" : ""}`} >{props.text}</li>
            <button className="check" type="submit" onClick={completeItem} >
              <BsCheckLg />
              
            </button>
            <button className="trash" type="submit" onClick={()=>deleteItem(props.id)}>
              <BsTrashFill />
            </button>
          
          </div>
       
    
     
    </div>
  );
};
export default ToDo;
