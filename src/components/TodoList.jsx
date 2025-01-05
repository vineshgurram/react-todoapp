import TodoItem from "./TodoItem"

export default function TodoList({ todos,setToDos }) {
    return (
        <div className="todo-list-wrapper">
            {todos.map((list, index) =>
            (
                <TodoItem list={list} todos={todos} setToDos={setToDos} key={index} />
            )
            )}
        </div>
    )
}