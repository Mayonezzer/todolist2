import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";

function App() {
    const shapkaTitle1: string = "Nazvanie1"
    const shapkaTitle2: string = "Nazvanie2"

    const tasks1 = [
        {taskId: 5, taskTitle: "html&css", isDone: true},
        {taskId: 6, taskTitle: "JS", isDone: false},
        {taskId: 7, taskTitle: "notJS", isDone: true},
    ]

    let [tasks2, setTasks2] = useState<Array<TaskType>>( [
        {taskId: 1, taskTitle: "11html&css", isDone: true},
        {taskId: 2, taskTitle: "11JS", isDone: true},
        {taskId: 3, taskTitle: "11notJS", isDone: false},
        {taskId: 4, taskTitle: "11notJS", isDone: false},
    ])

    /*let tasksForTodolist = tasks2;*/


    function removeTask (taskId: number) {
        let filteredTasks = tasks2.filter(t=> t.taskId !== taskId)
        setTasks2(filteredTasks)
    }

    return (
        <div className="App">
           <Todolist shapka={shapkaTitle1}
                     taski={tasks1}
                     removeTask = {removeTask}

           />
           <Todolist
               shapka={shapkaTitle2}
               taski={tasks2}
               removeTask={removeTask}
           />
        </div>
    );
}

export default App;
