import './App.css'
import logo from './assets/logo-white.png'
import {Routes,Route} from 'react-route-dom';
import Home from "./components/home/Home.jsx";
import NieuwePost from "./components/nieuwePost/NieuwePost.jsx";
import Overzicht from "./components/overzicht/Overzicht.jsx";
import Page404 from "./components/page404/Page404.jsx";



function App() {
    return (
        <div className="page-container">
            <img src={logo} alt="Company logo"/>
            <h1>Begin hier met het maken van jouw blog-applicatie!</h1>
            Navigatie
            <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/nieuwePost' element={<NieuwePost/>}/>
            <Route path='/overzicht' element={<Overzicht/>}/>
            <Route path='*' element={<Page404/>} />
            </Routes>

        </div>
    )
}

export default App
