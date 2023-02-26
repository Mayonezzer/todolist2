import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {
    return (
        <div className="App">
           <Todolist title={"nazvanie1"} />
           <Todolist title={"nazvanie2"} />
        </div>
    );
}

export default App;
