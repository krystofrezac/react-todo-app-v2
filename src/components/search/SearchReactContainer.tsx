//Dependencies
import React, {Dispatch} from 'react';
import {connect} from "react-redux";

//Actions
import FilterActions from '../../redux/actions/FilterActions';

//Components
import Search from './Search';

//Interfaces
interface statePropsI {
    filter: {
        value: string,
        checkBoxes: {
            incomplete: true,
            done: false,
        }
    },
}

interface checkBoxesI {
    incomplete: boolean;
    done: boolean;
}

interface dispatchPropsI {
    changeValue: (value: string) => void,
    changeCheckBoxes: (data: checkBoxesI) => void
}

interface propsI extends statePropsI, dispatchPropsI {

}


const SearchReactContainer = (props: propsI) => {
    const changeValueCallback = (value: string) => {
        props.changeValue(value);
    };
    const changeCheckBoxesCallback = (checkBoxes: checkBoxesI) => {
        props.changeCheckBoxes(checkBoxes);
    };
    return (
        <div id='SearchContainer'>
            <Search filter={props.filter} changeValue={changeValueCallback}
                    changeCheckBoxes={changeCheckBoxesCallback}/>
        </div>
    )
};

const mapStateToProps = (state: any) => {
    return {
        filter: state.filter
    }
};


const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        changeValue: (value: string) => {
            dispatch(FilterActions.changeFilterValue(value));
        },
        changeCheckBoxes: (checkBoxes: checkBoxesI) => {
            dispatch(FilterActions.changeFilterCheckBoxes(checkBoxes));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchReactContainer);