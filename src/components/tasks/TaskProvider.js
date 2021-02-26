import React from "react"
import { useState } from "react"

export const TaskContext = React.createContext()

export const TaskProvider = (props) => {
    const [tasks, setTasks] = useState([])

    const getTasks = () => {
        return fetch("http://localhost:8000/tasks", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("Task_user")}`
              }
        })
        .then(r => r.json())
        .then(setTasks)
    }
    return (
        <TaskContext.Provider value={{tasks, setTasks, getTasks}}>
            {props.children}
        </TaskContext.Provider>
    )
}