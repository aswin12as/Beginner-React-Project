import { useState } from "react";
import "../style.css";

const Todo = () => {
    const [todos,setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = () => {

       setTodos((prevTodos)  => [...prevTodos,
        {
            text:inputValue,
            id:Date.now(),
        }
       ]);

       setInputValue("");
    };

    const removeTodo = (id) =>{
        setTodos((todos) => todos.filter((t) => t.id !== id));
    }

  return (
    <div className="container">
        <div className="input-container">
            <input type="text" 
                value={inputValue}
                placeholder="Enter new todo..." 
                onChange={e => setInputValue(e.target.value)}
            />
            <button onClick={handleSubmit} className="submit-btn">Submit</button>
        </div>

        <div className="todo-container">
            <ul id="list-container">
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span>{todo.text}</span>
                        <button  className="close" onClick={() => removeTodo(todo.id)}>
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Todo;