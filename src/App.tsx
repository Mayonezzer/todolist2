import React, {useState} from 'react';
import { v1 } from 'uuid';
import './App.css';
import {TaskType, Todolist} from "./Todolist";

export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {

    /*const shapkaTitle1: string = "Nazvanie1"*/
    const shapkaTitle2: string = "Nazvanie2"

   /* const tasks1 = [
        {taskId: 5, taskTitle: "html&css", isDone: true},
        {taskId: 6, taskTitle: "JS", isDone: false},
        {taskId: 7, taskTitle: "notJS", isDone: true},
    ]*/

    let [tasks2, setTasks2] = useState<Array<TaskType>>( [
        {taskId: v1(), taskTitle: "11html&css", isDone: true},
        {taskId: v1(), taskTitle: "11JS", isDone: true},
        {taskId: v1(), taskTitle: "11notJS", isDone: false},
        {taskId: v1(), taskTitle: "11notJS", isDone: false},
    ])

    /*let [filter2, setFilter2] = useState <FilterValuesType> ('all')

    function changeFilter(buttonName: FilterValuesType) { функция теперь здесь поэтому
                                                            убираем пропсы в баттоне
        setFilter2(buttonName);
    }

    let filteredTasks2 = tasks2; так как данные переносим в тудулист, юзаем tasks2 через пропсы
                                            !!!!! и маппим именно фильтрованные таски в тудулисте
    if (filter2 === 'completed') {
        filteredTasks2 = tasks2.filter (t => t.isDone === true)
    }
    if (filter2 === 'active') {
        filteredTasks2 = tasks2.filter (t => t.isDone === false)
    }*/

    function removeTask (id: string) {
        //setTasks2(tasks2.filter(t => t.taskId !== id)) короткий синтаксис
         /*filteredTasks2 = tasks2.filter(t => t.taskId !== id) более понятный синтаксис
         setTasks2(filteredTasks2) filterstasks2 исправляем на tasks2
         после переноса фильтров в тудулист*/
        tasks2 = tasks2.filter(t => t.taskId !== id)
        setTasks2(tasks2)

    }

    return (
        <div className="App">
          {/* <Todolist shapka={shapkaTitle1}
                     taski={tasks1}
                     removeTask = {removeTask}
                     changeFilter={changeFilter}

           />*/}
           <Todolist
               shapka={shapkaTitle2}
               taski={tasks2}
               removeTask={removeTask}
              /* changeFilter={changeFilter}*/
           />
        </div>
    );
}

export default App;

