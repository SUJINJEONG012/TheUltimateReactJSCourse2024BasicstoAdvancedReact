import React from "react"; // eslint-disable-line no-unused-vars

const CreateTodo = ()=>{
    const tasks = 1;
    const countTasks = ()=>{
        if(tasks === 0){
            return "No tasks avilable"
        }else{
            return `Tasks : ${tasks}`;        
        }
    };

    return (
        <>
        <h1>Tasks : {countTasks()} </h1>
        <button>Add Task</button>
        </>
    )
}

export default CreateTodo;