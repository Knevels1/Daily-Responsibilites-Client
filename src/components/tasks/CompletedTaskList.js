import React, { useContext, useEffect } from "react"
import { TaskContext } from "./TaskProvider.js"
import { Task } from "./Task"
export const CompletedTaskList = (props) => {
    const { tasks, getTasks } = useContext(TaskContext)
    useEffect(() => {
        getTasks()
    }, [])
    return (
        <article className="taskList">
            {
            
                tasks.map(task => {if(task.complete==true){

                    return <Task key={task.id} task={task} />
                } else return null
                })
            }
        </article>
    )
}