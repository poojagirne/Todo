import { useState } from "react";
import Todoapp from './Todoapp'
function Todocontainer()
{
    const[todos,settodos]=useState([{id:1,title:"learn react", done:false}])
    const[title,settitle]=useState("");


    const add=(e)=>
    {
    e.preventDefault();
    const newTodo= {id:Math.random(),title:title, done:false}
    const newtodolist=[...todos,newTodo];
    settodos(newtodolist)
    settitle("");
    }

    const handlecheckbox=(id)=>
    {
        const newtodolist=todos.map(todo=>{
            if(todo.id===id)
            return {
                ...todo,done:!todo.done
            }
            return todo;
        })
        console.log(newtodolist)
        settodos(newtodolist)
    }

    const deleteOne=(id)=>
    {
        const newval=todos.filter((val)=>
        {
            if(val.id===id)
            return false;
            return true;

        })
        console.log(newval)
        settodos(newval)
    }
    return(
        <div>
            <h1>Todo list</h1>

            <form onSubmit={add}>
            <input type="text" name="name" placeholder="enter the item" value={title} 
             onChange={(e)=>settitle(e.target.value)} required/>
            <button>add</button>
            </form>
            <hr></hr>
            <table style={{margin:'auto' ,textAlign:'center',border:'1px solid black',paddingRight:'100px',paddingLeft:'100px'}}>
            <tr>
               
            </tr>
                  <Todoapp deleteOne={deleteOne} todos={todos} handlecheckbox={handlecheckbox}/>
                </table>
        </div>
    )
}
export default Todocontainer;
