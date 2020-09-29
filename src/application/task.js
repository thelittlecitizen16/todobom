import React from 'react';

const li = {
    cursor: "pointer",
    position: "relative",
    padding: "12px 8px 12px 40px",
    background: "#eee",
    fontSize: "18px",
    transition: "0.2s",
};


function CheckedTasks(place) {
    let tasks = document.getElementsByClassName('task');
    if (tasks[place].classList.contains("checked")) {
        tasks[place].style.background = "#eee";
        tasks[place].style.textDecoration = "none"
        tasks[place].classList.remove("checked");
    }
    else {
        tasks[place].style.background = "#008CBA";
        tasks[place].style.textDecoration = "line-through"
        tasks[place].classList.add("checked");
    }

}

function NewTask(props) {
    return (

        <li key={props.place} onClick={() => CheckedTasks(props.place)} style={li} className="todo stack-small" className="task">{props.task}</li>
    );
}


export default NewTask;
