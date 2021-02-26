import React, { useContext, useEffect } from "react"
import { TaskContext } from "./TaskProvider.js"
import { Task } from "./Task"
export const TaskList = (props) => {
    const { tasks, getTasks } = useContext(TaskContext)
    useEffect(() => {
        getTasks()
    }, [])
    return (
        <article className="taskList">
            {
                tasks.map(task => { if(task.complete == false){
                    return <Task key={task.id} task={task} />
                }
                })
            }
        </article>
    )
}