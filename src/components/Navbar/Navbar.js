import React from 'react'
import Select from 'react-select'
const options = [
    { value: 'All', label: 'All' },
    { value: 'completed', label: 'completed' },
    { value: 'unCompleted', label: 'unCompleted' },
  ];
const Navbar = ({unCompletedTodo,selectedOption,onChange}) => {
   
    if(!unCompletedTodo.length)return <h3> Great Job.everything in order✌✔💌 </h3>

    return ( <header>
                <span>{unCompletedTodo.length}</span>
                <h2> to do is not</h2>
                <div>
                    <Select onChange={onChange}
                            value={selectedOption}
                            options={options}
className='select'                    />
                    {/* <select onChange={onSelect} value={status}>
                        <option value='All'>All</option>
                        <option value='completed'>completed</option>
                        <option value='unCompleted'>unCompleted</option>
                    </select> */}
                </div>
            </header> );
}
 
export default Navbar;