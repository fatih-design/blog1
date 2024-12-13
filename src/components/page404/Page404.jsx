import './Page404.css';
import {Link} from "react-router-dom";

function Page404(props) {

    return (
        <>
            <h1> De pagina die u zoekt bestaat helaas niet</h1>
            Breng me terug naar <Link to='/home'>Home</Link>
        </>
    );

}

export default Page404;
