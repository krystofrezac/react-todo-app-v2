//Dependencies
import React, {Dispatch} from 'react';
import {connect} from 'react-redux';

//Actions
import TodoActions from '../../redux/actions/TodoActions';
import TodoFormActions from '../../redux/actions/TodoFormActions';

//Components
import TodosContainer from './TodosContainer';
import NavActions from "../../redux/actions/NavActions";

//Interfaces
interface propsI extends statePropsI, dispatchPropsI {
    history: {
        push: (add: string) => void;
    };
}

interface statePropsI {
    todos: [{
        id: string;
        category: string;
        date: number;
        done: number;
        description: string;
    }];
    filter: {
        value: string;
        checkBoxes: {
            incomplete: boolean;
            done: boolean;
        }
    }
}

interface dispatchPropsI {
    edit: (id: string) => void;
    delete: (id: string) => void;
    done: (id: string) => void;
}

const TodosReduxContainer = (props: propsI) => {

    const editCallback = (id: string) => {
        props.edit(id);
        props.history.push("/todoForm");
    };

    const deleteCallback = (id: string) => {
        props.delete(id);
    };

    const doneCallback = (todo: string) => {
        props.done(todo);
    };

    return (
        <React.Fragment>
            <TodosContainer todos={props.todos} filter={props.filter} edit={editCallback} delete={deleteCallback}
                            done={doneCallback}/>
        </React.Fragment>
    )
};

const mapStateToProps = (state: any): statePropsI => {
    return {
        todos: state.todos,
        filter: state.filter
    }
};
const mapDispatchToProps = (dispatch: Dispatch<any>): dispatchPropsI => {
    return {
        edit: (id: string) => {
            dispatch(TodoFormActions.setAction('edit'));
            dispatch(TodoFormActions.setEditId(id));
            dispatch(NavActions.setId("add"));
        },
        delete: (id: string) => {
            dispatch(TodoActions.deleteTodo(id));
        },
        done: (id: string) => {
            dispatch(TodoActions.doneTodo(id));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosReduxContainer);