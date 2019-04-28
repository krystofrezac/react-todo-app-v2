//Dependencies
import React from 'react';

//Interfaces
interface checkBoxesI {
    incomplete: boolean;
    done: boolean;
}

interface propsI {
    filter: {
        value: string,
        checkBoxes: {
            incomplete: true,
            done: false,
            [key: string]: boolean
        }
    },
    changeValue: (value: string) => void,
    changeCheckBoxes: (value: checkBoxesI) => void,
}

interface eI {
    target: {
        value: string;
        id: string;
    }
}

const Search = (props: propsI) => {
    const valueChangeHandler = (e: eI) => {
        props.changeValue(e.target.value);
    };

    const checkBoxesChangeHandler = (e: eI) => {
        const checkBoxes = props.filter.checkBoxes;
        checkBoxes[e.target.id] = !checkBoxes[e.target.id];
        props.changeCheckBoxes(checkBoxes);
    };

    return (
        <div id='Search'>
            <input value={props.filter.value} type="text" placeholder='Filter' onChange={valueChangeHandler}/>
            <div className='checkBoxes'>
                <input id='incomplete' type='checkbox' checked={props.filter.checkBoxes.incomplete} onChange={checkBoxesChangeHandler}/>
                <div>Incomplete todos</div>
                <input id='done' type='checkbox' checked={props.filter.checkBoxes.done} onChange={checkBoxesChangeHandler}/>
                <div>Done todos</div>
            </div>
        </div>
    )
};

export default Search;