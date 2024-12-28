import { useState } from "react"
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
import styles from "./style1.module.css"

export default function Form() {
    const [todo, setToDo] = useState("");
    const [todos, setToDos] = useState([]);

    function handleOnSubmit(e) {
        e.preventDefault();
        setToDos([...todos, todo]);
        setToDo("");
    }

    return (
        <>
        {/* <h1 className={styles.header}>Todo list</h1> */}
            <form className="form" onSubmit={(e) => handleOnSubmit(e)}>
                <div className="input-box">
                    <input type="text" onChange={(e) => setToDo(e.target.value)} value={todo} />
                </div>
                <div className="submit-box">
                    <button type="submit">Add</button>
                </div>
            </form>
            
            {todos.map((list,index) =>
            (
                <TodoItem list={list} key={index} />
            )
            )}
        </>
    )
}