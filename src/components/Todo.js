import React, {useState} from "react";

const Todo = () => {
    const [todoList, setTodoList] = useState([]);

    return (
        <div>
            <h2> My Todos </h2>

            {
                todoList && 
                <div>
                    {
                        todoList.map(todo => (
                            <p> {todo} </p>
                        ))
                    } 
                </div>
            }

            <button onClick={() => setTodoList([...todoList, "New Todo"])}> Add Todo </button>
        </div>
    )
}

export default Todo;