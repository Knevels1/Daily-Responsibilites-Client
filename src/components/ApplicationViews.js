import React from "react"
import { Route } from "react-router-dom"
import { TaskProvider } from "./tasks/TaskProvider"
import { TaskList } from "./tasks/TaskList"
import { CompletedTaskList } from "./tasks/CompletedTask"




export const ApplicationViews = (props) => {
    return (
        <>
            <TaskProvider>
                <Route exact path="/" render={
                    props => <TaskList {...props} />
                } />
            </TaskProvider>
            <TaskProvider>
                <Route exact path="/completed" render={
                    props => <CompletedTaskList {...props} />
                } />
            </TaskProvider>
        </>
    )
}