import { useState } from "react"
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
import styles from "./style1.module.css"

export default function Form({todos,setToDos}) {
    const [todo, setToDo] = useState({name:"",status:false});

    function handleOnSubmit(e) {
        e.preventDefault();
        if (todo.name.trim() === "") return;
        setToDos([...todos, todo]);
        setToDo({name:"",status:false});
    }

    return (
        <>
        {/* <h1 className={styles.header}>Todo list</h1> */}
            <form className="form" onSubmit={(e) => handleOnSubmit(e)}>
                <div className="input-box">
                    <input type="text" placeholder="Enter your task" onChange={(e) => setToDo({name:e.target.value,status:false})} value={todo.name} />
                </div>
                <div className="submit-box">
                    <button type="submit">Add</button>
                </div>
            </form>
        </>
    )
}