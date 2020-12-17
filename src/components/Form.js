import React from 'react'

function Form ({ setInputText, inputText, todos, setTodos }) {

    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    }
    const submitTodoHandler =(e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            { text: inputText,
            completed: false,
            id: Math.random() *1000 }
        ]);

        setInputText("");
      
    }
    return (
    <form>
<input  value={inputText} 
        onChange={inputTextHandler} 
        type="text" 
        className= "todo__input" />
<button onClick={submitTodoHandler} className="todo__button" type="submit"> 
Submit
</button>
        </form>
    )
}

export default Form 
