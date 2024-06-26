import React from 'react'
import { useState } from 'react';

const AddTasks = () => {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
    // const [isChecked, setIsChecked] = useState(false);

    const addTask = () => {
        if (task.trim() === "") { return }

        setTasks([...tasks, { text: task, completed: false }]);
        setTask('');
    };

    const deleteTask = (taskDeleteIndex) => {

        let newTasks = tasks.filter(
            (_, index) => index !== taskDeleteIndex
        );

        setTasks(newTasks);

    };


    const toggleTaskCompletion = (taskIndex) => {
        let newTasks = tasks.map(
            (task, index) => index === taskIndex ? { ...task, completed: !task.completed } : task
        );
        setTasks(newTasks);
    }

    return (
        <div className='max-w-96 bg-emerald-200 p-4 rounded-md' >
            <input onChange={ (event) => setTask(event.target.value) }
                value={ task }
                className=' bg-neutral-400 rounded-lg mr-4' type="text" />
            <button onClick={ addTask } className=' bg-green-500 rounded-md px-3'  >Add Task</button>

            <div className=' ' >
                {
                    tasks.map((task, index) => {
                        return <div key={ index } className={ `p-2 my-2 flex flex-row justify-between ${task.completed ? 'bg-blue-200' : 'bg-white'}` }>   <p className=' ' > { task.text }</p>
                            <span className='  flex justify-between gap-4 flex-row'>
                                <input onChange={ () => toggleTaskCompletion(index) } type="checkbox" checked={ task.completed } />
                                <button onClick={ () => deleteTask(index) } >X</button> </span>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default AddTasks