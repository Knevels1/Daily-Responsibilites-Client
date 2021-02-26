import React from "react"
import { Route } from "react-router-dom"
import {TaskProvider} from "./tasks/TaskProvider"
import {TaskList} from "./tasks/TaskList"



export const ApplicationViews = (props) => {
    return (
        <>
            <TaskProvider>
                <Route exact path="/" render={
                    props => <TaskList {...props} />
                } />
            </TaskProvider>
        </>
    )
}