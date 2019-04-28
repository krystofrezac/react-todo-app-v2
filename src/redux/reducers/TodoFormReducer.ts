const initState = {
    action: "add",
    editId:null
};

//Interfaces
interface actionI{
    type:string;
    action:string;
    id:string;
}

const todoFormReducer = (state = initState, action:actionI) => {
    switch (action.type) {
        case "SET_ACTION":
            return {
                ...state,
                action:action.action,
            };
        case "SET_EDIT_ID":
            return {
                ...state,
                editId:action.id,
            };
        default:
            return state;
    }
};

export default todoFormReducer;