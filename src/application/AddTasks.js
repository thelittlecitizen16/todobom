
import React, {useState}  from 'react';

const buttonStyle = {
        backgroundColor: "#008CBA",
        border:"none",
        color: "white",
        padding: "9px 32px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px"
  };

  const inputStyle = {
    marginRight: "10px"
};



function AddTask(props) {
    const [taskValue,setTaskValue] =useState("");

    function handleChang(e) {
        setTaskValue(document.getElementById("taskValue").value);
      };
    return (
        <div>
         <input style={inputStyle} id ="taskValue" type="text" onChange={() =>handleChang(this)} />
        <button  style={buttonStyle} onClick={event => {props.renderAllTasks(taskValue)}}>Add</button>
        </div>
    );
}

export default AddTask;
