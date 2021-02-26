import React from "react"
import { Route } from "react-router-dom"
import { TaskProvider } from "./tasks/TaskProvider"
import { TaskList } from "./tasks/TaskList"
import { CompletedTaskList } from "./tasks/CompletedTaskList"
import { TaskForm } from "./tasks/TaskForm"




export const ApplicationViews = (props) => {
    return (
        <>
            <TaskProvider>
                <Route exact path="/" render={
                    props => <TaskList {...props} />
                } />
                <Route exact path="/completed" render={
                    props => <CompletedTaskList {...props} />
                } />
                <Route exact path="/create" render={
                    props => <TaskForm {...props} />
                } />
                <Route exact path="/create/:taskId(\d+)" render={
                    props => <TaskForm {...props} />
                } />
            </TaskProvider>
        </>
    )
}