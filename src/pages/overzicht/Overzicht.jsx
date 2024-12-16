import './Overzicht.css';
import posts from '../../constants/data.json';
import formatDate from '../../helpers/formatDate.js';
import {Link} from "react-router-dom";
import Navigation from '../../components/navigation/Navigation';


function Overzicht() {

    return (
        <>
            <header><h1>Overzicht</h1></header>
            <main>
                <div className="outer-container">
                    <h1>Overzicht Pagina</h1>
                    <div className="inner-container">
                        <article>
                            {posts.map((item) => (
                                <div key={item.id} className="post-item">

                                    <h2>{item.title}</h2>
                                    {/*<date>{formatDate(item.created)}</date>*/}
                                    <h5>Door {item.author}</h5>

                                    {/*<h4>{item.subtitle}</h4>*/}
                                    {/*<p>{item.content}</p>*/}
                                    <span> Commentaar: {item.comments} aantal || Aantal keer gedeeld: {item.shares}  || <Link to={`/posts/${item.id}`} style={{color:"black"}}>Lees Verder</Link></span>
                                    {/*leestijd: {item.readTime} minuten ||*/}
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

export default Overzicht;
