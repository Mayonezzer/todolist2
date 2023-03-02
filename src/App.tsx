import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {
    const shapkaTitle1: string = "Nazvanie1"
    const shapkaTitle2: string = "Nazvanie2"

    const tasks1 = [
        {taskId: 1, taskTitle: "html&css", isDone: true},
        {taskId: 2, taskTitle: "JS", isDone: false},
        {taskId: 3, taskTitle: "notJS", isDone: true},
    ]

    let [tasks2, setTasks2] = useState( [
        {taskId: 1, taskTitle: "11html&css", isDone: true},
        {taskId: 2, taskTitle: "11JS", isDone: true},
        {taskId: 3, taskTitle: "11notJS", isDone: false},
        {taskId: 4, taskTitle: "11notJS", isDone: false},
    ])

    function removeTask (id: number) {
        let filteredTasks = tasks2.filter(t=> t.taskId !== id)
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
