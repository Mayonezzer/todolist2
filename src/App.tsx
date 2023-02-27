import React from 'react';
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

    const tasks2 = [
        {taskId: 1, taskTitle: "11html&css", isDone: true},
        {taskId: 2, taskTitle: "11JS", isDone: true},
        {taskId: 3, taskTitle: "11notJS", isDone: false},
        {taskId: 4, taskTitle: "11notJS", isDone: false},
    ]

    return (
        <div className="App">
           <Todolist shapka={shapkaTitle1} taski={tasks1} />
           <Todolist shapka={shapkaTitle2} taski={tasks2} />
        </div>
    );
}

export default App;
