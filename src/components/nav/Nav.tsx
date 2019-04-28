//Dependencies
import React from 'react';
import {Link} from "react-router-dom";

//Icons
import TodoIcon from '../../assets/icons/006-list.svg';
import TodoSelectedIcon from '../../assets/icons/005-listBlue.svg';
import AddIcon from '../../assets/icons/007-plus.svg';
import AddSelectedIcon from '../../assets/icons/004-plusBlue.svg';
import SearchIcon from '../../assets/icons/008-search.svg';
import SearchSelectedIcon from '../../assets/icons/009-searchBlue.svg';

interface propsI{
    selectedId:string,
    changeSelectedId:(id:string)=>void
}

const Nav = (props:propsI) => {

    const clickHandler = (id: string) => {
        props.changeSelectedId(id);
    };

    const items = [
        {alt: "Todos", src: TodoIcon, selectedSrc: TodoSelectedIcon, id: "todos", adr: "/"},
        {alt: "Add", src: AddIcon, selectedSrc: AddSelectedIcon, id: "add", adr: "/todoForm"},
        {alt: "Search", src: SearchIcon, selectedSrc: SearchSelectedIcon, id: "search", adr: "/search"},
    ];
    const renderItems = items.map(item => {
        if (props.selectedId !== item.id) {
            return (
                <Link id={item.id} to={item.adr} key={item.id} onClick={() => clickHandler(item.id)}>
                    <img src={item.src} alt="Todos"/>
                </Link>
            )
        } else {
            return (
                <Link id={item.id} to={item.adr} key={item.id} className="selected"
                      onClick={() => clickHandler(item.id)}>
                    <img src={item.selectedSrc} alt="Todos"/>
                </Link>
            )
        }
    });

    return (
        <div id="Nav">
            <div id="wrapper">
                {renderItems}
            </div>
        </div>
    );
};

export default Nav;
