import { useState } from "react";
import Form from "./Form"
import TodoList from "./TodoList"
import Header from "./Header";
// import styles from "./style2.module.css"
export default function Todo() {
    const [todos, setToDos] = useState([]);

    return (
        <>
            {/* <h1 className={styles.header}>Todo list</h1> */}
            <Header />
            <section className="section">
                <div className="container">
                    <Form todos={todos} setToDos={setToDos} />
                    <h2 className="sub-heading">Your Tasks</h2>
                    <TodoList todos={todos} setToDos={setToDos} />
                </div>
            </section>
        </>
    )
}