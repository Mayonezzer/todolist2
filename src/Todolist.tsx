import React from "react";
import {FilterValuesType} from "./App"
import  {useState} from 'react';

type TodolistPropsType ={
    shapka: string
    taski: Array<TaskType>
    removeTask: (taskId: string) => void
    /*changeFilter: (buttonName: FilterValuesType) => void*/
}

 export type TaskType = {
    taskId: string
    taskTitle: string
    isDone: boolean
}

export const Todolist = (props: TodolistPropsType) => {

    let [filter2, setFilter2] = useState <FilterValuesType> ('all')

    function changeFilter(buttonName: FilterValuesType) {
        setFilter2(buttonName);
    }

    let filteredTasks2 = props.taski;
    if (filter2 === 'completed') {
        filteredTasks2 = props.taski.filter (t => t.isDone === true)
    }
    if (filter2 === 'active') {
        filteredTasks2 = props.taski.filter (t => t.isDone === false)
    }

    return(
        <div>
            <h3>{props.shapka}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {filteredTasks2.map((t) =>{                  // removeTask бросает t.taskId в function removeTask как id
                    return(                                        // (можно назвать как угодно, главное правильно протипизировать
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
                <button onClick={ ()=>changeFilter('all') }>All</button>
                <button onClick={ ()=>changeFilter('active') }>Active</button>
                <button onClick={ ()=>changeFilter('completed') }>Completed</button>
            </div>
        </div>
    )
}