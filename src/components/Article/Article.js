import React from 'react';
import { Link } from 'react-router-dom';
import './Article.css';

export const Article = (props) => {
    
    return (
        <div className="article" key={props.article._id}>
            <div className="article-container">
            <div className="image-container"> <img className="articleImage" src={props.article.media} alt={props.article.topic}/></div>
            <div className="card-meta">
                <p>{props.article.topic}<span>{props.article.published_date}</span></p>
            </div>
            <Link to={`/articles/${props.article._id}`} className="articleTitle">{props.article.title}</Link>
            <p className="articleAuthor">by <a href={props.article.twitter_account || '#'}>{props.article.author || 'DevArticles'}</a></p>
            </div>
        </div>
    )
};