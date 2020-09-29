
import React, { useState } from 'react';
import NewTask from './task';

const ulStyle = {
    listStyle: "none"
};

function TasksList(props) {
    var tasks =props.tasks;
    var allTasks = tasks.map((task)=> {
        return(
            <NewTask place ={tasks.indexOf(task)} task={task}/> )
    })

    return (
        <div>
            <ul  style={ulStyle}>
        {allTasks}
            </ul>
        </div>
    );
}

export default TasksList;
