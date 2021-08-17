import React from 'react';
import { useSelector } from 'react-redux';
import { Article } from '../Article/Article';
import './ArticleList.css';

export const ArticleList = (props) => {
    
    return (
        <div className="articles-container">
            {props.articles.map((article) => (
                <Article article={article} key={article._id} />
            ))}
        </div>
    )
}