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
    const addTask = newTask => {
        return fetch("http://localhost:8000/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("Task_user")}`
            },
            body: JSON.stringify(newTask)
        })
            .then(newTask)
    }
    const completeTask = id => {
        return fetch(`http://localhost:8000/tasks/${id}`, {
            method: "PATCH",
            headers: {
                "Authorization": `Token ${localStorage.getItem("Task_user")}`,
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({"complete": true})
        })
        .then(getTasks)
    }
    const updateTask=(updatedTask)=>{
        return fetch(`http://localhost:8000/tasks/${updatedTask.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("Task_user")}`
            },
            body: JSON.stringify(updatedTask)
        })
            .then(getTasks)
    }
    const destroyTask = id => {
        return fetch(`http://localhost:8000/tasks/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("Task_user")}`
              }
        })
        .then(getTasks)
    }
    return (
        <TaskContext.Provider value={{tasks, setTasks, getTasks, completeTask, addTask, updateTask, destroyTask}}>
            {props.children}
        </TaskContext.Provider>
    )
}