import TodoForm from "../todoForm/toForm";
import TodoList from "../todoList/todoList";
import React, { useState ,useEffect } from 'react';
import Navbar from "../Navbar/Navbar";
const TodoApp = () => {
    const [todos, setTodos] = useState([])
    const [filterd, setFilterd] = useState([])
    const [selectedOption, setSelectedOption] = useState('All')

    useEffect(() => {
        
        filtered(selectedOption.value)
    
    }, [todos,selectedOption])
    
    const addTodo=(input)=>{

        const newTodo={
            id:Math.floor(Math.random() *1000),
            text:input,
            isCompleted:false
        }
        setTodos([...todos,newTodo])
console.log(input)    }
const completeTodo=(id)=>{
    console.log(id)
    let index= todos.findIndex((finded)=>finded.id ===id)
    const selctedTodo={...todos[index]}
    selctedTodo.isCompleted=!selctedTodo.isCompleted
    const updatedTodos=[...todos]
    updatedTodos[index]=selctedTodo
    setTodos(updatedTodos)
    console.log()
}
const deleteTodo=(id)=>{
    let filteredTodos=todos.filter((t)=>t.id !==id)
    console.log(filteredTodos)
    setTodos(filteredTodos)

}
const updateTodo=(id ,newValue)=>{
    console.log(newValue)
    let index= todos.findIndex((finded)=>finded.id ===id)
    const selctedTodo={...todos[index]}
    selctedTodo.text=newValue
    const updatedTodos=[...todos]
    updatedTodos[index]=selctedTodo
    setTodos(updatedTodos)
}

const filtered=(status)=>{
    switch (status) {
        case 'completed':
            setFilterd(todos.filter((t)=>t.isCompleted))
            break;
        case 'unCompleted':
            setFilterd(todos.filter((t)=>!t.isCompleted))
            break;   
        default:
            setFilterd(todos)
            break;
    }
}
const selectHandler=(e)=>{
    setSelectedOption(e)
    filtered(e.value)
}
    return ( 
        <div>
            <Navbar unCompletedTodo={todos.filter((todoh)=>todoh.isCompleted===false)}
            onChange={selectHandler}
            // filteredTask={filtered}
            selectedOption={selectedOption}
            />
            to dos
            <TodoForm submitTodo={addTodo} />
            <TodoList 
            todos={filterd} 
            oncomplete={completeTodo} 
            onDelete={deleteTodo} 
            onUpdateTodo={updateTodo}
            />
        </div>
     );
}
 
export default TodoApp;