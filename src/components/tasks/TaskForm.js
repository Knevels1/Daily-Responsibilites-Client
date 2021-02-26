import React, { useContext, useState, useEffect } from "react"
import {TaskContext} from "./TaskProvider"

export const TaskForm=(props)=>{
    const {tasks, getTasks, addTask, updateTask}=useContext(TaskContext)
    const [task, setTask]=useState({})
    
    useEffect(() => {
        getTasks()
        
	}, [])

    const editMode = props.match.params.hasOwnProperty("taskId")  // true or false

    const handleControlledInputChange = (event) => {
       
        const newTask = Object.assign({}, task)  
               
        newTask[event.target.name] = event.target.value  
        setTask(newTask)                                 
    }

    useEffect(()=>{
        getTaskInEditMode()
    },[tasks])

    const getTaskInEditMode=()=>{
        if(editMode){
            const taskId=parseInt(props.match.params.taskId)
            const selectedTask=tasks.find(t=>t.id===taskId)
            setTask(selectedTask)
        }
    }

    // making the new object on submit
    const constructNewTask=()=>{
        const user_id=parseInt(localStorage.getItem("rare_user_id"))
    
        if (editMode){
            const newTask={
            id:task.id,
            user_id:user_id,
            title: task.title,
            taskDate: task.task_date,
            content: task.content,
            complete: false
            }
            updateTask(newTask).then(props.history.push("/"))
        }
        else{
        const newTask={
            user_id:user_id,
            title: task.title,
            content: task.content,
        }
        addTask(newTask).then(props.history.push("/"))
        }
    }

    return(
        <>
            <p>New Task</p>
            <form className="taskForm">

                <fieldset>
                    <label> Title</label>
                    {task&&<input type="text" name="title" defaultValue={task.title}  onChange={handleControlledInputChange}></input>}
                </fieldset>

                <fieldset>
                    <label> Content</label>
                    {task&&<input type="text" name="content" defaultValue={task.content} onChange={handleControlledInputChange}></input>}
                </fieldset>


            </form>
            <button type="submit"
                onClick={event=>{
                    event.preventDefault()
                    constructNewTask()
                }}> submit

            </button>
        </>
    )
}