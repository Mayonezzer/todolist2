import React from "react";
import {FilterValuesType} from "./App"

type TodolistPropsType ={
    shapka: string
    taski: Array<TaskType>
    removeTask: (taskId: number) => void
    changeFilter: (value: FilterValuesType) => void
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
                <button onClick={ ()=>{props.changeFilter('all')} }>All</button>
                <button onClick={ ()=>{props.changeFilter('active')} }>Active</button>
                <button onClick={ ()=>{props.changeFilter('completed')} }>Completed</button>
            </div>
        </div>
    )
}