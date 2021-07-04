import React from 'react';
import { useState } from 'react';

const AddTask = ({ onAdd }) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')


    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please Add a Task')
            return
        }

        onAdd({ text, day })

        setText('')
        setDay('')

    }

    return (
        <form className='ui form' onSubmit={onSubmit}>
            <div >
                <label>Task Name</label>
                <input
                    type='text'
                    placeholder='Add Task'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>

            <div >
                <label>Day & Time</label>
                <input
                    type='text' placeholder='Add Day & Time'
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <br />
            <div>
                <input type='submit' value='Save Task' className='ui primary large button' />
            </div>

        </form>
    );
}

export default AddTask;
