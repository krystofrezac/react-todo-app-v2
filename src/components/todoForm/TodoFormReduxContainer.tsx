//Dependencies
import React, { Dispatch } from 'react';
import { connect } from "react-redux";

//Actions
import TodoActions from '../../redux/actions/TodoActions';
import TodoFormActions from '../../redux/actions/TodoFormActions';
import NavActions from '../../redux/actions/NavActions';

//Components
import TodoForm from './TodoForm';

//Interfaces
interface statePropsI {
    action: string;
    editId: string;
    todo: todoI;
}
interface dispatchPropsI {
    add: (data: todoI) => void;
    edit: (data: todoI) => void;
    cancel : ()=>void;
}
interface propsI extends statePropsI, dispatchPropsI {
    history: {
        push: (adr: string) => void;
    }
}
interface todoI {
    id: string;
    category: string;
    date: string;
    done: string;
    description: string;

    [key: string]: string;
}

const TodoFormReduxContainer = (props: propsI) => {
    const submitHandler = (data:todoI) => {
        switch (props.action) {
            case "add":
                props.add(data);
                break;
            case 'edit':
                data.id = props.editId;
                props.edit(data);
                break;
            default:
                console.error("todoForm => unknown action");
                break;
        }
        props.history.push("/");
    };

    const cancelHandler = () => {
        props.cancel();
        props.history.push('/');
    };
    return (
        <React.Fragment>
            <TodoForm submit={submitHandler} action={props.action} todo={props.todo} cancel={cancelHandler} />
        </React.Fragment>
    );
};


//Mapping redux
const mapStateToProps = (state: any): statePropsI => {
    const todoIndex = state.todos.findIndex((todo: todoI) => todo.id === state.todoForm.editId);
    return {
        action: state.todoForm.action,
        todo: state.todos[todoIndex],
        editId: state.todoForm.editId,
    };
};
const mapDispatchToProps = (dispatch: Dispatch<any>): dispatchPropsI => {
    return {
        add: (todo: todoI) => {
            dispatch(TodoActions.addTodo(todo));
            dispatch(NavActions.setId("todos"));
        },
        edit: (todo: todoI) => {
            dispatch(TodoActions.editTodo(todo));
            dispatch(TodoFormActions.setAction('add'));
            dispatch(NavActions.setId("todos"));
        },
        cancel:()=>{
            dispatch(NavActions.setId("todos"));
            dispatch(TodoFormActions.setAction('add'));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoFormReduxContainer);