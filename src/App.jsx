import './App.css'
// import logo from './assets/logo-white.png'
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/home/Home.jsx";
import NewPost from "./pages/newpost/NewPost.jsx";
import AllPosts from "./pages/allposts/AllPosts.jsx";
import Page404 from "./pages/page404/Page404.jsx";
import React from "react";
import Navigation from "./components/navigation/Navigation.jsx";
import Posts from "./components/posts/Posts.jsx";


function App() {
    return (

<>
            <Navigation/>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='NewPost' element={<NewPost />}/>
                <Route path='AllPosts' element={<AllPosts />}/>
                <Route path='posts/:id' element={<Posts />}/>
                <Route path='*' element={<Page404/>}/>
            </Routes>
</>

    )
}

export default App
