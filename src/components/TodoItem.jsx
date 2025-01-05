export default function TodoItem({ list,todos,setToDos }) {
    function handleOnDelete(list){
        setToDos(todos.filter((todo)=>todo !== list));
    }
    return (
        <div className="todo-item-wrapper" key={list}>
            <h4 className="heading">{list.name}</h4>
            <button onClick={()=>handleOnDelete(list)}>Delete</button>
        </div>
    )
}