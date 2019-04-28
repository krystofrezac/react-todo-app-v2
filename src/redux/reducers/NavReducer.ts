const initState = {
    selectedId: "todos"
};

//Interfaces
interface actionI {
    type:string,
    id: string
}

const navReducer = (state = initState, action: actionI) => {
    switch (action.type) {
        case "SET_SELECTED_ID_NAV":
            return {
                ...state,
                selectedId: action.id
            };
        default:
            return state;
    }
};

export default navReducer;