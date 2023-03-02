import React from "react";

type TodolistPropsType ={
    shapka: string
    taski: Array<TaskType>
    removeTask: Function
}

 export type TaskType = {
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
                {props.taski.map((t) =>{
                    return(
                        <li key={t.taskId}>
                            <button onClick={ () => {props.removeTask(t.taskId)}}>x</button>
                            <input type="checkbox" checked={t.isDone}/>
                            <span>{t.taskTitle}</span>
                        </li>
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