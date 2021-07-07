import React from "react";

const Task = ({ task, onDelete ,index}) => {
    return (
        <div>
            <h3>
                {task.text}

                <i className="ui  red trash alternate outline icon"
                    style={{ cursor: 'pointer' }}
                    onClick={() => onDelete(index)} />

            </h3>
            <p>{task.day}</p>
        </div>
    )
}


export default Task;
