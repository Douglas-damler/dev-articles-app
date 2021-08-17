import React from 'react';
import { useSelector } from 'react-redux';
import { Comment } from '../Comment/Comment';

export const CommentsList = () => {
    const comments = useSelector((state) => state.comments.comments);
    return (
        <ul>
            {comments.map((comment) => (
                <Comment comment={comment} />
            ))}
        </ul>
    )
}