import { useState } from 'react'

export default function ToDoList(){
    const [tasks, setTasks] = useState(["Learn HTML","Learn CSS", "Learn Js","Learn Api's"]);
    const [newTask, setNewTask] = useState('');
  
    
  
    function handleInputChange(event){
      setNewTask(event.target.value);
    }
  
    function addTask(){
      if(newTask !== ""){
        setTasks(t=> [...t,newTask]);
        setNewTask("")
      }
    }
  
    function deleteTask(index){
  
    }

    return (
        <>
        <div className="wrapper">
        <h1 className='heading'>To do List</h1>
        <div className="flex-wrap">
        <input type="text" placeholder='Enter a task' onChange={handleInputChange} />
        <button onClick={addTask}>Add</button>
        </div>
    
        <div>
          <ol>
            {
              tasks.map(((task,index) =>
              <li key={index}>{task} <button onClick={deleteTask(index)}>Delete</button></li>))
            }
          </ol>
        </div>
        </div>
        </>
      )
}