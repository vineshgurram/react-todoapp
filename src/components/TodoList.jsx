import TodoItem from "./TodoItem"

export default function TodoList({ todos, setToDos }) {
    const sortedTodos = todos.slice().sort((a, b) => Number(a.status) - (b.status));
    // console.log(todos)
    return (
        <>
        <h2 className="sub-heading">Your Tasks</h2>
        <div className="todo-list-wrapper">
            {
                sortedTodos.length === 0
                    ? <h2 className="text-center sub-heading red">No Task are added</h2> :
                    sortedTodos.map((list, index) =>
                    (
                        <TodoItem list={list} todos={todos} setToDos={setToDos} key={index} />
                    )
                    )
            }

        </div>
        </>
    )
}