import React, { useState } from 'react';

const NewTask = ({ onAdd }) => {

    const [task, setTask] = useState('');

    function onChangeHandler(event) {
        setTask(event.target.value);
    }

    function onClickHandler() {
        if (task.trim() === '') {
            return;
        }
        onAdd(task);
        setTask('');
    }

    return (
        <div className='flex items-center gap-4'>
            <input
                type="text"
                className='w-64 px-2 py-1 rounded-sm bf-stone-200'
                onChange={onChangeHandler}
                value={task}
            />
            <button
                className='text-stone-700 hover:text-stone-500'
                onClick={onClickHandler}
            >
                Add task
            </button>
        </div>
    )
}

export default NewTask