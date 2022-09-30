const Todo = ({todo,oncomplete ,onDelete,onEdit}) => {
    return (  <div className="todo" key={todo.id}>
        <div  onClick={oncomplete} className={todo.isCompleted ?'completed':'text'}>{todo.text}</div>
        <div>
            <button onClick={onEdit}
            className='button' >
                Edit</button>
            <button className="remove button" onClick={onDelete}>Delete</button>
        </div>
    </div> );
}
 
export default Todo;