import React from "react";

type TodolistPropsType ={
    shapka: string
    taski: Array<TaskType>
}

type TaskType = {
    taskId: number
    taskTitle: string
    isDone: boolean
}

export const Todolist = (props: TodolistPropsType) => {
    return(
        <div>
            <h3>{props.shapka}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.taski.map((el) =>{
                    return(
                        <li key={el.taskId}><input type="checkbox" checked={el.isDone}/> <span>{el.taskTitle}</span></li>
                    )
                })}
               {/*выше переделываем в map - <li><input type="checkbox" checked={props.taski[0].isDone}/> <span>{props.taski[0].taskTitle}</span></li> */}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}