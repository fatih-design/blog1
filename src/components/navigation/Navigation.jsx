import React from 'react';
import './Navigation.css';
import {NavLink} from 'react-router-dom';

function Navigation() {

    return (

           <nav>

               <ul>
                   <li><NavLink className = {({isActive}) => isActive? 'active-link': 'default-link'} to="/">Home</NavLink></li>
                   <li><NavLink className = {({isActive}) => isActive? 'active-link': 'default-link'} to="AllPosts">Alle Post</NavLink></li>
                   <li><NavLink className = {({isActive}) => isActive? 'active-link': 'default-link'} to="NewPost">Nieuwe Post</NavLink></li>

               </ul>
            </nav>

    );

}

export default Navigation;
