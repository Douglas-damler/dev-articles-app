import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postNewComment } from '../features/allCommentsSlice';
import './NewCommentForm.css';

export const NewCommentForm = () => {
    const dispatch = useDispatch();
    const [ comment, setComment ] = useState('');
    const [ inputFormIsOnFocus, setInputFormIsOnFocus] = useState(false);
    const postNewCommentIsPending = useSelector((state) => state.comments.postNewCommentIsPending);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(postNewComment({
          comment: comment,
          date: Date.now()
        }));
        setComment('');
    }

    return (
        <form className="newCommentForm" onSubmit={handleSubmit}>
           <textarea
            className="comment-input"
            cols="50" 
            rows="2"
            minLength="5"
            value={comment}
            type="text"
            placeholder="Write your comment here..."
            required="required"
            onChange={(e) => {
              setComment(e.target.value);
              setInputFormIsOnFocus(true);
            }}
           >
           </textarea>

            { inputFormIsOnFocus ? (
              <input
              disabled={postNewCommentIsPending}
              className="comment-submit-button"
              type="submit"
              value={postNewCommentIsPending === true ? ("posting") : ("submit")}
            />

            ): ('')}
            
        </form>
    )
}