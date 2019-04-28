//dependencies
import React from 'react';

//components
import Todo from './Todo';

//Interfaces
interface propsI {
    todos: [{
        id: string;
        category: string;
        date: number;
        done: number;
        description: string;
    }];
    edit: (id: string) => void;
    delete: (id: string) => void;
    done: (id: string) => void;
    filter: {
        value: string;
        checkBoxes: {
            incomplete: boolean;
            done: boolean;
        }
    };
}

interface todoI {
    id: string;
    category: string;
    date: number;
    done: number;
    description: string;
}

const TodosContainer = (props: propsI) => {
    const todos = props.todos;

    const editCallback = (id: string) => {
        props.edit(id);
    };

    const deleteCallback = (id: string) => {
        props.delete(id);
    };

    const doneCallback = (id: string) => {
        props.done(id);
    };

    const passedFilter = (todo: todoI) => {
        const categoryFilter = todo.category.indexOf(props.filter.value) > -1;
        const descriptionFilter = todo.description.indexOf(props.filter.value) > -1;
        const doneFilter = props.filter.checkBoxes.done ? 100 : 200;
        const incompleteFilter = props.filter.checkBoxes.incomplete ? 99 : 0;

        return ((categoryFilter || descriptionFilter) && (todo.done >= doneFilter || todo.done <= incompleteFilter));
    };

    todos.sort((todo: todoI, todo2: todoI): number => {
        if (todo.date < todo2.date) {
            return 1;
        } else if (todo.date === todo2.date) {
            return 0;
        } else {
            return -1;
        }
    });

    const renderTodo = todos.map(todo => {
        if (passedFilter(todo)) {
            return <Todo key={todo.id} todo={todo} edit={editCallback} delete={deleteCallback} done={doneCallback}/>
        } else {
            return null;
        }
    });
    return (
        <div id="TodosContainer">
            {renderTodo}
        </div>
    )
};

export default TodosContainer;