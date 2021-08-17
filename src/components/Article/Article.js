import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCurrentArticle } from '../features/currentArticleSlice';
import './Article.css';

export const Article = (props) => {
    const dispatch = useDispatch();
    const handleClick = (article) => {
        dispatch(addCurrentArticle(article))
    }
    return (
        <div className="article" key={props.article._id}>
            <div className="article-container">
            <div className="image-container"> <img className="articleImage" src={props.article.media} alt={props.article.topic}/></div>
            <div className="card-meta">
                <p>{props.article.topic}<span>{props.article.published_date}</span></p>
            </div>
            <h3 
                className="articleTitle"
                onClick={() => {
                    handleClick(props.article)
                }}
            >{props.article.title}</h3>
            <p className="articleAuthor">by <a href={props.article.twitter_account}>{props.article.author}</a></p>
            </div>
        </div>
    )
};