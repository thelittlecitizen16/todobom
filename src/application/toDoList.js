
import React, { useState } from 'react';
import TasksList from './taskList';
import AddTask from './AddTasks';



function ToDoList(props) {
    const [tasks, setTasks] = useState([]);

    function renderAllTasks(task) {
        let newTasks = [...tasks, task];
        setTasks(newTasks);
    }


    return (
        <div>
            <h1>TO Do List:</h1>
            <AddTask renderAllTasks={renderAllTasks} />
            <TasksList tasks={tasks} />
        </div>
    );
}

export default ToDoList;
