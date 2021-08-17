import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postNewComment } from '../features/allCommentsSlice';

export const NewCommentForm = () => {
    const dispatch = useDispatch();
    const [ comment, setComment ] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(postNewComment(comment))
    }

    return (
        <form className="newCommentForm" onSubmit={handleSubmit}>
            <input
              className="commentInput" 
              value={comment}
              type="text"
              placeholder="Write your comment here"
              required="required"
              onChange={(e) => {setComment(e.target.value)}}
            />

            <input
              className="commentSubmitButton"
              type="submit"
              value="submit"
            />
        </form>
    )
}