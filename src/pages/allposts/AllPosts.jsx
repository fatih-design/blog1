import './AllPosts.css';
import posts from '../../constants/data.json';
import formatDate from '../../helpers/formatDate.js';
import {Link} from "react-router-dom";
import Navigation from '../../components/navigation/Navigation';
import {useEffect, useState} from "react";
import axios from 'axios';


function AllPosts() {
const [posts,setPosts] = useState([]);
const [error, setError] = useState(null);

useEffect(()=> {
    async function fetchPosts() {
        try {
            const response = await axios.get('http://localhost:3000/posts');
            const posts = response.data;
            setPosts(posts);

        } catch(error){
            console.error(error);
            setError('er is een fout opgetreden');
        }
    }
    fetchPosts();
},[]);


    return (
        <>
            <header><h1>Overzicht</h1></header>
            <main>
                <div className="outer-container">
                    <div className="inner-container">
                    <h1>Overzicht Pagina</h1>

                        <article className="post-list">
                            {posts.slice().reverse().map((item) => (
                                <div key={item.id} className="post-list__item">
                                    <h2 className="post-list__title">{item.title}</h2>
                                    <h3 className="post-list__author">Door {item.author}</h3>
                                    <h4 className="post-list__comments-shares-link"> Commentaar: {item.comments} aantal || Aantal keer gedeeld: {item.shares} || <Link
                                        to={`/posts/${item.id}`} style={{color: "black"}}>Lees Verder</Link></h4>
                                    <p className="read-time">leestijd: {item.readTime} minuten</p>
                                </div>

                            ))}

                        </article>
                    </div>
                </div>
            </main>


        </>
    )
        ;

}

export default AllPosts;
