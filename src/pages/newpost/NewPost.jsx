import React, {useState} from 'react';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function NewPost() {
    const [formData, setFormData] = useState({
        title: '',
        subtitle: '',
        content: '',
        author: '',
        created: new Date().toISOString(),
        readTime: '',
        comments: 0,
        shares: 0,

    });
    const [errors, setErrors] = useState("");


    // const navigate = useNavigate();

    // const validate = () => {
    //     const newErrors = {};
    //
    //     if (!formData.title) {
    //         newErrors.title = 'Titel is verplicht.';
    //     }
    //     if (!formData.subtitle) {
    //         newErrors.subtitle = 'Subtitel is verplicht.';
    //     }
    //     if (!formData.author) {
    //         newErrors.author = 'Auteur is verplicht.';
    //     }
    //     if (!formData.content) {
    //         newErrors.content = 'Bericht is verplicht.';
    //     } else if (formData.content.length < 300 || formData.content.length > 2000) {
    //         newErrors.content = 'Bericht moet tussen 300 en 2000 karakters lang zijn.';
    //     }


    // return newErrors;

const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:3000/posts',formData);
        setErrors("de post is succesvol toegevoegd");
        console.log(response.data);

    } catch (error) {
        console.error(error);
        setErrors('er is een fout opgetreden');
    }
};


// const newErrors = validate();
// if (Object.keys(newErrors).length > 0) {
//     setErrors(newErrors);
//     return;
// }

const calculateReadTime = (text) => {
    const wordCount = text.split(' ').length;
    return Math.ceil(wordCount / 100 * 0.3);
};


        return (

        // <div className="formulier">
        //     <form onSubmit={handleSubmit}>
        //         <div>
        //             <label htmlFor="title">Titel</label>
        //             <input
        //                 type="text"
        //                 id="title"
        //                 name="title"
        //                 value={formData.title}
        //                 onChange={handleChange}
        //                 required
        //             />
        //             {/*{errors.title && <p style={{ color: 'red' }}>{errors.title}</p>}*/}
        //         </div>
        //
        //         <div>
        //             <label htmlFor="subtitle">Subtitel</label>
        //             <input
        //                 type="text"
        //                 id="subtitle"
        //                 name="subtitle"
        //                 value={formData.subtitle}
        //                 onChange={handleChange}
        //             />
        //             {errors.subtitle && <p style={{color: 'red'}}>{errors.subtitle}</p>}
        //         </div>
        //
        //         <div>
        //             <label htmlFor="author">Auteur</label>
        //             <input
        //                 type="text"
        //                 id="author"
        //                 name="author"
        //                 value={formData.author}
        //                 onChange={handleChange}
        //             />
        //             {errors.author && <p style={{color: 'red'}}>{errors.author}</p>}
        //         </div>
        //
        //         <div>
        //             <label htmlFor="content">Bericht</label>
        //             <textarea
        //                 id="content"
        //                 name="content"
        //                 value={formData.content}
        //                 onChange={handleChange}
        //             ></textarea>
        //             {/*{errors.content && <p style={{ color: 'red' }}>{errors.content}</p>}*/}
        //         </div>
        //
        //         <button type="submit">Verzenden</button>
        //     </form>
        // </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">Titel
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        /></label>
                    </div>

                    <div>
                        <label htmlFor="subtitle">Subtitel</label>
                        <input
                            type="text"
                            id="subtitle"
                            name="subtitle"
                            value={formData.subtitle}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="author">Auteur</label>
                        <input
                            type="text"
                            id="author"
                            name="author"
                            value={formData.author}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="content">Bericht</label>
                        <textarea
                            id="content"
                            name="content"
                            value={formData.content}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <button type="submit">Verzenden</button>

                    {errors && <p style={{ color: 'red' }}>{errors}</p>}
                </form>
            </div>

        );

}


export default NewPost;

