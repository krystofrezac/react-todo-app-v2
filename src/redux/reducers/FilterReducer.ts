const initState = {
    value: "",
    checkBoxes: {
        incomplete: true,
        done: false
    }
};

//Interfaces
interface actionI {
    type: string;
    action: string;
    id: string;
    value: string;
    checkBoxes: {
        incomplete: boolean;
        done: boolean;
    }
}

const todoFormReducer = (state = initState, action: actionI) => {
    let editedState = {...state};
    switch (action.type) {
        case 'CHANGE_FILTER_CHECKBOXES':
            editedState.checkBoxes = action.checkBoxes;
            return editedState;
        case 'CHANGE_FILTER_VALUE':
            editedState.value = action.value;
            return editedState;
        default:
            return state;
    }
};

export default todoFormReducer;