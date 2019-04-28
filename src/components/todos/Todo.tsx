//Dependencies
import React from 'react';

//Icons
import EditIcon from '../../assets/icons/002-edit.svg';
import DoneIcon from '../../assets/icons/001-done.svg';
import DeleteIcon from '../../assets/icons/003-trash.svg';

//Interfaces

interface propsI {
    todo: {
        id: string;
        category: string;
        date: number;
        done: number;
        description: string;
    },
    done: (id: string) => void,
    edit: (id: string) => void,
    delete: (id: string) => void,
}

const Todo = (props: propsI) => {
    const date = props.todo.date - Date.now();
    const hours: number = Number((date / (1000 * 60 * 60)).toFixed(1));
    const days: number = Number((date / (1000 * 60 * 60 * 24)).toFixed(1));
    const years: number = Number((date / (1000 * 60 * 60 * 24 * 365)).toFixed(1));


    const renderDate = hours < 24 ? hours + 'h' : days < 365 ? days + 'd' : years + 'y';

    return (
        <div className="Todo">
            <div className="wrapper">
                <div className="category">{props.todo.category}</div>
                <div className="description">{props.todo.description}</div>
                <div className="date">{renderDate}</div>
                <div className="done">{props.todo.done}%</div>
                <div className="icons">
                    <img src={DoneIcon} alt="done" onClick={() => {
                        props.done(props.todo.id)
                    }}/>
                    <img src={EditIcon} alt="edit" onClick={() => {
                        props.edit(props.todo.id)
                    }}/>
                    <img src={DeleteIcon} alt="delete" onClick={() => {
                        props.delete(props.todo.id)
                    }}/>
                </div>
            </div>
        </div>
    )
};

export default Todo;