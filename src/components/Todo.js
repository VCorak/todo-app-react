import React from 'react'
import "./Todo.css";

function Todo({ text, todo, todos, setTodos }) {

    //events
    const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));

    }

    const checkHandler = () => {
        setTodos(todos.map((el) => {
            if(el.id === todo.id) {
                return {
                    ...el, completed: !el.completed
                }
                
            }
                return el;

        }))
    }

    return (
        <div className="todo">
            <li className={`todo__item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={checkHandler} className="check">Check</button>
            <button onClick={deleteHandler} className="delete">Delete</button>
            
        </div>
    )
}

export default Todo
