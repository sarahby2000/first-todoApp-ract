import Todo from "../Todo/Todo"
import React, { useState } from 'react';
import TodoForm from "../todoForm/toForm";

const TodoList = ({todos,oncomplete,onDelete,onUpdateTodo}) => {
    const [edit, setedit] = useState({id:null,
            text:'',
            isCompleted:false})
            console.log(edit)
    //    const deleteHandle=()=>{
        //     todos.remove()
        //    }

        const editTodo=(newValue)=>{
            onUpdateTodo(edit.id,newValue)
            setedit({id:null, text:''})
            console.log(edit.text)
        }
        
        const renderTodos=()=>{
    if(todos.length ===0) return <p>add some to dos</p>
    return(todos.map((todo)=>{
        return <Todo key={todo.id} todo={todo} oncomplete={()=>oncomplete(todo.id)}
        onDelete={()=>onDelete(todo.id)}
        onEdit={()=>setedit(todo)}
        />
    }))

}
    return ( 
        <div>
            {edit.id ?<TodoForm submitTodo={editTodo} edit={edit}/> :renderTodos()}
        </div>
     );
}
 
export default TodoList;