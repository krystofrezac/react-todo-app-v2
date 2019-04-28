const initState = [
    {id: "001", category: "Category1", description: "Description1", date: 1555691159844, done: 20},
];

//Interfaces
interface todoI {
    id: string;
    category: string;
    date: number;
    done: number;
    description: string;
}

interface editedStateI {
    [index: number]: todoI;

    push: (data: todoI) => void;
    splice: (x: number, y: number) => void;
}

interface actionI {
    type: string;
    todo: {
        id: string;
        category: string;
        date: string;
        done: number;
        description: string;
    };
    id: string;
    todos: editedStateI
}


const todoReducer = (state = initState, action: actionI) => {
    let editedState: editedStateI = [...state];
    let index;
    switch (action.type) {
        case 'ADD_TODO':
            let newTodo = {
                id: "",
                category: "",
                date: 0,
                done: 0,
                description: ""
            };

            newTodo.id = Math.random() + action.todo.category;
            newTodo.category = action.todo.category;
            newTodo.date = Date.parse(action.todo.date);
            newTodo.done = action.todo.done;
            newTodo.description = action.todo.description;

            editedState.push(newTodo);
            return editedState;
        case 'EDIT_TODO':
            let editedTodo = {
                id: "",
                category: "",
                date: 0,
                done: 0,
                description: ""
            };

            index = state.findIndex(todo => todo.id === action.todo.id);

            editedTodo.id = action.todo.id;
            editedTodo.category = action.todo.category;
            editedTodo.date = Date.parse(action.todo.date);
            editedTodo.done = action.todo.done;
            editedTodo.description = action.todo.description;

            editedState[index] = editedTodo;
            return editedState;
        case 'DELETE_TODO':
            index = state.findIndex(todo => todo.id === action.id);
            editedState.splice(index, 1);
            return editedState;
        case 'DONE_TODO':
            index = state.findIndex(todo => todo.id === action.id);
            editedState[index].done = 100;
            return editedState;
        case 'SET_TODOS':
            editedState = action.todos;
            return editedState;
        default:
            return state
    }
};

export default todoReducer;