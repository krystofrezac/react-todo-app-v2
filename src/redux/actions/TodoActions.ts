//Interfaces
interface todoI {
    id:string;
    category: string;
    date: string;
    done: string;
    description: string;
}

const TodoActions = {
    addTodo: (todo: todoI) => {
        return {
            type: "ADD_TODO",
            todo
        }
    },
    editTodo: (todo: todoI) => {
        return {
            type: "EDIT_TODO",
            todo
        }
    },
    deleteTodo:(id:string)=>{
        return{
            type: "DELETE_TODO",
            id
        }
    },
    doneTodo:(id:string)=>{
        return{
            type: "DONE_TODO",
            id
        }
    }
};

export default TodoActions;