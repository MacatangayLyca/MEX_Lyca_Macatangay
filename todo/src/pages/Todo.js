import React, { useEffect } from "react";
import TodoList from "../components/TodoList";

import { useLocation } from "react-router-dom";

export default function Todo(props) {
    const location = useLocation();

    useEffect(() => {
        console.log(location.pathname);
        console.log(location.state.username);
    }, [location]);
    return (
        <div className="todo-app">
            <TodoList username={location.state.username} />
        </div>
    );
}
