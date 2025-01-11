import { useState } from "react";
import Form from "./Form"
import TodoList from "./TodoList"
import Header from "./Header";
// import styles from "./style2.module.css"
export default function Todo() {
    const [todos, setToDos] = useState([]);
    const noOfCompletedTodos = todos.filter((todo)=> todo.status).length
    const noOfTotalTodos = todos.length;

    return (
        <>
            {/* <h1 className={styles.header}>Todo list</h1> */}
            <Header noOfCompletedTodos={noOfCompletedTodos} noOfTotalTodos={noOfTotalTodos}/>
            <section className="section">
                <div className="container">
                    <Form todos={todos} setToDos={setToDos} />
                    <TodoList todos={todos} setToDos={setToDos} />
                </div>
            </section>
        </>
    )
}