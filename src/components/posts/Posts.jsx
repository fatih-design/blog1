import './Posts.css';
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import formatDate from "../../helpers/formatDate.js";
import { useEffect, useState } from "react";

function Posts() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchPost() {
            try {
                const response = await axios.get(`http://localhost:3000/posts/${id}`);
                const post = response.data;
                setPost({
                    title: post.title || 'onbekend',
                    subtitle: post.subtitle || 'onbekend',
                    created: post.created || 'onbekend',
                    author: post.author || 'onbekend',
                    readTime: post.readTime || 'onbekend',
                    comments: post.comments || 'onbekend',
                    shares: post.shares || 'onbekend',
                    content: post.content || 'Geen inhoud beschikbaar',
                });
            } catch (error) {
                console.error("Error fetching post details:", error);
                setError("Er is iets misgegaan met het ophalen van de berichten.");
            }
        }
        fetchPost();
    }, [id]);

    if (error) {
        return <p>{error}</p>;
    }

    if (!post) {
        return <p>Post wordt geladen...</p>;
    }

    return (
        <div className="post-details">
            <h1 className="post-details__title">{post.title}</h1>
            <p className="post-details__subtitle">{post.subtitle}</p>
            <p className="post-details__author-created">
                <strong>Geschreven door:</strong> {post.author} op {formatDate(post.created)}
            </p>
            <p className="post-details__content">{post.content}</p>
            <p>
                <Link to="/AllPosts" style={{ color: "black" }}>Terug naar overzicht</Link>
            </p>
        </div>
    );
}

export default Posts;
