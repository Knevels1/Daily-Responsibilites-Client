import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item">
            <Link className="nav-link" to="/">All Tasks</Link>
            </li>
            <li className="navbar__item">
            <Link className="nav-link" to="/completed">Completed Tasks</Link>
            </li>
            <li className="navbar__item">
            <Link className="nav-link" to="/create">Add Task</Link>
            </li>
            {
                (localStorage.getItem("Task_user") !== null) ?
                    <div className="nav-item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("Task_user")
                                props.history.push({ pathname: "/" })
                            }}
                        >Logout</button>
                    </div> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }        </ul>
    )
}
