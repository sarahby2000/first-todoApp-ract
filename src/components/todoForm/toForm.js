import React, { useRef, useState ,useEffect} from 'react';


const TodoForm = (props) => {
    const [input, setInput] = useState('')
    const changeHandler=(e)=>{
        setInput(e.target.value)
    }
    const inputRef= useRef(null)
    useEffect(() => {
      inputRef.current.focus()
    
      
    },[])
    
    const submitHandler=(e)=>{
        e.preventDefault()
        if(!input){
            alert('enter a to do')
            return;
        }
        props.submitTodo(input)
        setInput('')
    }
    return ( <div>
        <form onSubmit={submitHandler}>
            <div className='formControl'>
                <input value={input} type='text' onChange={changeHandler}
                placeholder={props.edit ?'updated todo...' :'add todo...'}
                ref={inputRef}
                />
                <button className={`button ${props.edit?'updateTodo': 'addtodo'}`} type='submit'>{props.edit ?'Updated ' :'Add '}</button>
            </div>
        

            {/* {props.edit ?
            <>
            <input value={input} type='text' onChange={changeHandler}
            placeholder='updated todo...'
            ref={inputRef}
            />
            <button type='submit'>Update</button>
            </>
            :
            <>
            <input value={input} type='text' onChange={changeHandler}
            placeholder='add todo...'
            ref={inputRef}
            />
            <button type='submit'>Add</button>
            </>
            } */}
            
        </form>
        
    </div> );
}
 
export default TodoForm;