//Dependencies
import React, {useState} from 'react';

//Interfaces
interface todoI {
    id:string;
    category: string;
    date: string;
    done: string;
    description: string;

    [key: string]: string;
}
interface propsI {
    action: string;
    todo: todoI;
    submit: (inputs: todoI) => void;
    cancel: ()=>void;
}

const TodoForm = (props: propsI) => {

    let initInputs: todoI = {
        id:"",
        category: "",
        date: "",
        done: "",
        description: "",
    };

    if (props.action === "edit") {
        const date = new Date(props.todo.date);
        let formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}T${date.getHours()}:${date.getMinutes()}`;
        initInputs = {...props.todo};
        initInputs.date = formattedDate;
    }

    const [inputs, editInputs] = useState(initInputs);

    const onChange = (e: any) => {
        let editedInputs = {...inputs};
        editedInputs[e.target.id] = e.target.value;
        editInputs(editedInputs);
    };
    const submitHandler = (e: any) => {
        e.preventDefault();
        props.submit(inputs);
        editInputs(initInputs);
    };

    let submitValue = "";
    switch (props.action) {
        case 'add':
            submitValue = "Add";
            break;
        case 'edit':
            submitValue = "Edit";
            break;
        default:
            console.error("unknown action");
            break;
    }

    return (
        <div id="TodoForm">
            <form id="wrapper" onSubmit={submitHandler}>
                <input id="category" type="text" autoFocus required onChange={onChange} placeholder="Category"
                       defaultValue={initInputs.category}/>
                <input id="date" type="datetime-local" required onChange={onChange} placeholder="Date"
                       defaultValue={initInputs.date}/>
                <input id="done" type="number" min={0} max={100} required onChange={onChange} placeholder="Done %"
                       defaultValue={initInputs.done}/>
                <textarea id="description" required onChange={onChange} placeholder="Description"
                          defaultValue={initInputs.description}/>
                <div id="buttons">
                    <input id="submitButton" type="submit" value={submitValue}/>
                    <div id="cancelButton" onClick={props.cancel}>Cancel</div>
                </div>
            </form>
        </div>
    );
};

export default TodoForm;