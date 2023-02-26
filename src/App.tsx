import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {
    const shapkaTitle1 = "nazvanie1"
    const shapkaTitle2 = "nazvanie2"

    const tasks1 = [
        {taskId: 1, taskTitle: "html&css", isDone: true},
        {taskId: 2, taskTitle: "JS", isDone: false},
        {taskId: 3, taskTitle: "notJS", isDone: true},
    ]

    const tasks2 = [
        {taskId: 1, taskTitle: "html&css", isDone: true},
        {taskId: 2, taskTitle: "JS", isDone: true},
        {taskId: 3, taskTitle: "notJS", isDone: false},
    ]

    return (
        <div className="App">
           <Todolist shapka={shapkaTitle1} taski={tasks1} />
           <Todolist shapka={shapkaTitle2} taski={tasks2} />
        </div>
    );
}

export default App;
