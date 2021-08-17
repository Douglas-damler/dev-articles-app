import React from 'react';
import { useSelector } from 'react-redux';
import { CurrentArtilceList } from '../../components/currentArticleList/currentArticleList';
import { CommentsList } from '../../components/CommentsList/CommentsList';
import { NewCommentForm } from '../../components/newCommentForm/NewCommentForm';

export const CurrentArticle = () => {
    const isLoadingComments = useSelector((state) => state.comments.isLoadingComments);
    const articles = useSelector((state) => state.currentArticles);
    return (
        <div>
        <CurrentArtilceList />
            { isLoadingComments === true  ? (
                <h1 className="loadingComments">Loading comments...</h1>
            ): (
    
                <CommentsList />
            )}
            < NewCommentForm />
        </div>
    )
}