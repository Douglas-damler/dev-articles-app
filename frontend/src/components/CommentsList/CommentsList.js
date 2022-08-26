import React from 'react';
import { useSelector } from 'react-redux';
import './CommentsList.css'
import { Comment } from '../Comment/Comment';

export const CommentsList = () => {

    const comments = useSelector((state) => state.comments.comments);
    
    return (
        <div className="comment-list">
            {comments.map((comment) => (
                <Comment comment={comment} />
            ))}
        </div>
    )
}