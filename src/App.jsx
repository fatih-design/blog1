import './App.css'
// import logo from './assets/logo-white.png'
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/home/Home.jsx";
import NieuwePost from "./pages/nieuwePost/NieuwePost.jsx";
import Overzicht from "./pages/overzicht/Overzicht.jsx";
import Page404 from "./pages/page404/Page404.jsx";
import React from "react";
import Navigation from "./components/navigation/Navigation.jsx";
import Posts from "./components/posts/Posts.jsx";


function App() {
    return (
        <div className="page-container">

            <Navigation/>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/nieuwePost' element={<NieuwePost />}/>
                <Route path='/overzicht' element={<Overzicht />}/>
                <Route path='/posts/:id' element={<Posts />}/>
                <Route path='*' element={<Page404/>}/>
            </Routes>

        </div>
    )
}

export default App
