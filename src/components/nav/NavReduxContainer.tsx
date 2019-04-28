//Dependencies
import React, {Dispatch} from 'react';
import {connect} from 'react-redux';

//Components
import Nav from './Nav';

//Actions
import NavActions from '../../redux/actions/NavActions';

//Interfaces
interface propsI extends statePropsI, dispatchPropsI {
}

interface statePropsI {
    selectedId:string
}

interface dispatchPropsI {
    changeSelectedId: (id: string) => void
}

const NavReduxContainer = (props: propsI) => {
    const changeSelectedIdCallback = (id:string)=>{
        props.changeSelectedId(id);
    };
    return (
        <React.Fragment>
            <Nav changeSelectedId={changeSelectedIdCallback} selectedId={props.selectedId}/>
        </React.Fragment>
    )
};

const mapStateToProps = (state: any): statePropsI => {
    return {
        selectedId: state.nav.selectedId,
    }
};
const mapDispatchToProps = (dispatch: Dispatch<any>): dispatchPropsI => {
    return {
        changeSelectedId: (id: string) => {
            dispatch(NavActions.setId(id));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NavReduxContainer);