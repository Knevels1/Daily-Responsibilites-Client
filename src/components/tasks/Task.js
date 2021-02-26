import React from "react"
import "./Task.css"
import  Button  from "react-bootstrap/Button"
export const Task = ({ task }) => (
    < section key={`task--${task.id}`} className="taskCard" >
        <div className="task__title">Title: {task.title}</div>
        <div className="task__content">Content: {task.content}</div>
        <div className="task__creationDate">Creation Date: {task.task_date}</div>
        <Button variant="outline-success"> Completed </Button>
        <Button variant="outline-warning"> Edit Task </Button>
        <Button variant="outline-danger"> Delete </Button>
    </section >
)