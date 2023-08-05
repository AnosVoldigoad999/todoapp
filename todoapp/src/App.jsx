import { useState } from "react"
import './App.css';
export default function App(){
    const [tasks, setTasks]=useState([]);
    const [todo, setTodo] = useState('');
    function idek(e){
        e.preventDefault();
        if(todo){
            
            setTasks([...tasks, {title:todo, id:Math.random()}])
            setTodo('');
            
        }
        
    }
    let one;
    function deleteTodo(id){
       one = tasks.filter(task=>task.id!==id);
       setTasks(one);
    }
    let todos=tasks.map(task=><li key={task.id}>{task.title}<button onClick={()=>deleteTodo(task.id)}>X</button></li>)

   return <>
    <div>
        <div>
            <h1>Todo App</h1>
        </div>
        <form  onSubmit={idek}>
        <input type="text" placeholder="type your task here" value={todo} onChange={(e)=>setTodo(e.target.value)} />
        </form>
        
    </div>
    <br />
    <div>
    {tasks.length===0 && 'no tasks yet'}
        <ul>{todos}</ul>
    </div>
    </> 
}