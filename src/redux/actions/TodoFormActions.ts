const TodoFormActions = {
    setAction: (action: string) => {
        return {
            type: "SET_ACTION",
            action
        }
    },
    setEditId: (id: string) => {
        return {
            type: "SET_EDIT_ID",
            id
        }
    }
};

export default TodoFormActions;