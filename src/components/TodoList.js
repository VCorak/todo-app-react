import React from 'react'
import Todo from "./Todo";

function TodoList( { todos, setTodos } ) {
   
    return (
        <div className="todo__container">
            <ul className="todo__list">
              {todos.map((todo) => (
                  <Todo 
                  key={todo.id} 
                  text={todo.text}
                  setTodos={setTodos}
                  todos={todos}
                  todo={todo} />
              ))}
            </ul>
        </div>
    )
}

export default TodoList
