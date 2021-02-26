import React, { useContext } from "react"
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"
import { TaskContext } from "./TaskProvider"
import "./Task.css"
export const Task = ({ task }) => {
    const { completeTask, destroyTask } = useContext(TaskContext)


    if (task.complete == true) {
        return (
            < section key={`task--${task.id}`} className="taskCard" >
                <div className="task__title">Title: {task.title}</div>
                <div className="task__content">Content: {task.content}</div>
                <div className="task__creationDate">Creation Date: {task.task_date}</div>
                <Button variant="outline-danger" onClick={() => {
                    destroyTask(task.id)
                }}> Delete </Button>
            </section >
        )
    } else return (
        <section key={`task--${task.id}`} className="taskCard" >
            <div className="task__title">Title: {task.title}</div>
            <div className="task__content">Content: {task.content}</div>
            <div className="task__creationDate">Creation Date: {task.task_date}</div>
            <Button variant="outline-success" onClick={() => {
                completeTask(task.id)
            }}> Completed </Button>
            <Link key={task.id} id={task.id} to={{ pathname: `/create/${task.id}`, state: { selectedTask: task } }} >
                <Button variant="outline-warning"> Edit Task </Button>
            </Link>
            <Button variant="outline-danger" onClick={() => {
                destroyTask(task.id)
            }}> Delete </Button>
        </section>
    )
}