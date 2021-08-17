import React from 'react';
import './currentArt.css';
import { removeCurrentArticle } from '../features/currentArticleSlice';
import { useDispatch } from 'react-redux';

export const CurrentArt = (props) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(removeCurrentArticle());
    }
    return (
        <div className="currentArticle" key={props.article._id}>
            <div className="current-article-container">
                <div className="article-image-container">
                    <img src={props.article.media} alt="" className="current-article-image" />
                </div>
                <h2 className="current-article-title">{props.article.title}</h2>
                <div className="article-text">
                    <p>{props.article.summary}</p>
                </div>
                <button className="cancelButton"
                    onClick={handleClick}
                >X</button>
            </div>
        </div>
    )
}