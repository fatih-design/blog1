import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NieuwePost() {
    const [formData, setFormData] = useState({
        title: '',
        subtitle: '',
        content: '',
        author: ''
    });
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const validate = () => {
        const newErrors = {};

        if (!formData.title) {
            newErrors.title = 'Titel is verplicht.';
        }
        if (!formData.subtitle) {
            newErrors.subtitle = 'Subtitel is verplicht.';
        }
        if (!formData.author) {
            newErrors.author = 'Auteur is verplicht.';
        }
        if (!formData.content) {
            newErrors.content = 'Bericht is verplicht.';
        } else if (formData.content.length < 300 || formData.content.length > 2000) {
            newErrors.content = 'Bericht moet tussen 300 en 2000 karakters lang zijn.';
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const calculateReadTime = (text) => {
            const wordCount = text.split(' ').length;
            return Math.ceil(wordCount / 100 * 0.3);
        };

        const newPost = {
            ...formData,
            created: new Date().toISOString(),
            comments: 0,
            shares: 0,
            readTime: calculateReadTime(formData.content)
        };

        console.log(newPost);
        navigate('/overzicht');
        setFormData({
            title: '',
            subtitle: '',
            content: '',
            author: ''
        });
        setErrors({});
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <> <div className="formulier">
            <form onSubmit={handleSubmit}>


            <div>
                <label htmlFor="title">Titel</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                />
                {errors.title && <p style={{ color: 'red' }}>{errors.title}</p>}
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
                {errors.subtitle && <p style={{ color: 'red' }}>{errors.subtitle}</p>}
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
                {errors.author && <p style={{ color: 'red' }}>{errors.author}</p>}
            </div>

            <div>
                <label htmlFor="content">Bericht</label>
                <textarea
                    id="content"
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                ></textarea>
                {errors.content && <p style={{ color: 'red' }}>{errors.content}</p>}
            </div>

            <button type="submit">Verzenden</button>
        </form>
        </div> </>
    );
}


export default NieuwePost;

