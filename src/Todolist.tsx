import React from "react";
import {FilterValuesType} from "./App"
import  {useState} from 'react';
import { v1 } from "uuid";

type TodolistPropsType ={
    shapka: string
    taski: Array<TaskType>
    /*removeTask: (taskId: string) => void*/
    setTasks2: any
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

    function removeTask (id: string) {
        //setTasks2(tasks2.filter(t => t.taskId !== id)) короткий синтаксис
        /*filteredTasks2 = tasks2.filter(t => t.taskId !== id) более понятный синтаксис
        setTasks2(filteredTasks2) filterstasks2 исправляем на tasks2
        после переноса фильтров в тудулист*/
        filteredTasks2 = props.taski.filter(t => t.taskId !== id)
        props.setTasks2(filteredTasks2)
    }

    const [newAddedTask, setNewAddedTask] = useState('')
    const addTask =(newAddedTask: string)=> {
        const newTask = {taskId: v1(), taskTitle: newAddedTask, isDone: false}
        props.setTasks2([...props.taski, newTask])
    }

    const onChangeInputHandler = (event: any) => {
        setNewAddedTask(event.currentTarget.value)
    }

    const OnKeyPressInputHandler = (event: any) => {
        if (event.ctrlKey && event.charCode===13) {
            addTask(newAddedTask);
            setNewAddedTask('')}
    }

    const onClickButtonHandler = (event:any) => {
        addTask(newAddedTask);
        setNewAddedTask('')
    }




    return(
        <div>
            <h3>{props.shapka}</h3>
            <div>
                <input value={newAddedTask} onChange={onChangeInputHandler} onKeyPress={OnKeyPressInputHandler} />
                <button onClick={onClickButtonHandler}>
                    +
                </button>

                  {/* onChange={(event)=> {
                         setNewAddedTask(event.currentTarget.value)
                         }}
                       onKeyPress={(event)=>{
                           if (event.ctrlKey && event.charCode===13) {
                               addTask(newAddedTask);
                               setNewAddedTask('')
                           }
                       }}
                <button onClick={()=> {
                    addTask(newAddedTask);
                    setNewAddedTask('')}}
                >+</button>*/}

            </div>
            <ul>
                {filteredTasks2.map((t) =>{                  // removeTask бросает t.taskId в function removeTask как id
                    return(                                        // (можно назвать как угодно, главное правильно протипизировать
                        <li key={t.taskId}>
                            <button onClick={ () => {removeTask(t.taskId)}}>x</button>
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