export default function TodoItem({ list,todos,setToDos }) {
    function handleOnDelete(list){
        setToDos(todos.filter((todo)=>todo !== list));
    }

    function handleOnComplete(name){
        // const completedTodos = todos.map((todo)=> todo.name === name ? {...todo, status: !name.status} : todo);
        // console.log(completedTodos)
        setToDos(todos.map((todo)=> todo.name === name ? {...todo, status: !todo.status} : todo));
    }
    return (
        <div className="todo-item-wrapper" key={list}>
            <h4 className={`heading ${list.status === true ? "completed": "" }`} onClick={()=> handleOnComplete(list.name)}>{list.name}</h4>
            <button onClick={()=>handleOnDelete(list)}>Delete</button>
        </div>
    )
}