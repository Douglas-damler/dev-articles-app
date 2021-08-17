import React from 'react';
import { useSelector } from 'react-redux';
import { CurrentArt } from '../currentArt/currentArt';
import './currentArticleList.css';

export const CurrentArtilceList = () => {
    const articles = useSelector((state) => state.currentArticles);
    return (
        <div className="current-articles-container">
            {articles.map((article) => (
                <CurrentArt article={article} />
            ))}
        </div>
    )
}