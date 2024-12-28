export default function TodoItem({ list }) {
    return (
        <div className="todo-item-wrapper" key={list}>
            {list}
        </div>
    )
}