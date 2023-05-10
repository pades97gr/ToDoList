import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState("")

    const handleChange = e => {
        setValue(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (value) {
            editTodo(value, task.id);
            setValue("")
        }
        
    }

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type="text" className='todo-input' value={value}
            placeholder='Update Task' onChange={handleChange}/>
            <button type='submit' className='todo-btn'>Update Task</button>
        </form>
    )
}