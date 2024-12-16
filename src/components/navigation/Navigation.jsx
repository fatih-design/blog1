import React from 'react';
import './Navigation.css';
import {NavLink} from 'react-router-dom';

function Navigation(props) {

    return (
        <>
           <nav>

               <ul>
                   <li><NavLink className = {({isActive}) => isActive? 'active-link': 'default-link'} to="/">Home</NavLink></li>
                   <li><NavLink className = {({isActive}) => isActive? 'active-link': 'default-link'} to="overzicht">Alle Post</NavLink></li>
                   <li><NavLink className = {({isActive}) => isActive? 'active-link': 'default-link'} to="nieuwepost">Nieuwe Post</NavLink></li>

               </ul>
            </nav>
        </>
    );

}

export default Navigation;
