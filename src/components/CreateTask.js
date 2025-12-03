import React, { useState, useContext } from "react";
import DataContext from "../context/DataContext";

const CreateTask = () => {
    const { onCreateTodo, validation, setValidation } = useContext(DataContext);
    const [todoValue, setTodoValue] = useState("");
    
    const onSubmitForm = (e) => {
        e.preventDefault();
        if(todoValue !== "") {
            onCreateTodo(todoValue);
            setTodoValue("");
            setValidation("");
            return
        }
        setValidation("ENTER A VALID TASK!");
        setTodoValue("");
    };

    return (
        <>
            <form className="create-todo" onSubmit={onSubmitForm}>
            <div className="circle"><div></div></div>
            <input name="create-todo" type="text" 
                placeholder="Create a new todo..." 
                value={todoValue}
                onChange={(e) => setTodoValue(e.target.value)}
            />
            
            </form>
            <p className="validation">{validation}</p>
        </>
        
    );
}

export default React.memo(CreateTask);