import './Posts.css';
import {Link, useParams} from 'react-router-dom';
import posts from '../../constants/data.json';
import formatDate from "../../helpers/formatDate.js";

function Posts() {

    const {id} = useParams();

    const post = posts.find((post) => post.id === parseInt(id));
    if (!post) {
        return <p>Post niet gevonden</p>;
    }
    // console.log(posts);

    return (
        <div className="post-details">
            <h1>{post.title}</h1>
            <p>{post.subtitle}</p>
            <p><strong>Geschreven door:</strong> {post.author} op {formatDate(post.created)}</p>
            <p>{post.content}</p>
            <p> <Link to="/overzicht" style={{color: "black"}}>Terug naar overzicht</Link></p>

                </div>

                // <div>
                //     <h1>Test</h1>
                //     <p>De dynamische parameter is: {id}</p>
                // </div>
                // useParams geeft een string terug - omzetten naar nummer: parsInt(id)
                )
                ;
            }

               export default Posts;
