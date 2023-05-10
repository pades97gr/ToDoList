import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")

    const handleChange = e => {
        setValue(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (value) {
            addTodo(value);
            setValue("")
        }
        
    }

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type="text" className='todo-input' value={value}
            placeholder='Add Task' onChange={handleChange}/>
            <button type='submit' className='todo-btn'>Add Task</button>
        </form>
    )
}