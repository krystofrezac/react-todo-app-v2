//Dependencies
import { combineReducers,createStore } from 'redux';

//Reducers
import todoReducer from './TodoReducer';
import todoFormReducer from './TodoFormReducer';
import filterReducer from './FilterReducer';
import navReducer from './NavReducer';

const rootReducer = combineReducers({
    todos:todoReducer,
    todoForm:todoFormReducer,
    filter:filterReducer,
    nav:navReducer,
});

const Store = createStore(rootReducer);

export default Store;