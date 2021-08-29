import React from 'react';
import { useEffect } from 'react';
import { CommentsList } from '../../components/CommentsList/CommentsList';
import { useDispatch, useSelector } from 'react-redux';
import './allComments.css';
import { loadAllComments } from '../../components/features/allCommentsSlice';
import refresh from '../../../src/images/refresh.png'

export const AllComments = ({id}) => {
    const dispatch = useDispatch();
    const comments = useSelector((state) => state.comments.comments);
    const isLoadingComments = useSelector((state) => state.comments.isLoadingComments);
    const hasFailedToLoadComments = useSelector((state) => state.comments.failedToLoadComments);
    useEffect(() => {
        dispatch(loadAllComments(id));
    }, [dispatch, id]);

    if (isLoadingComments) {
        return (
            <div>
                <h4>Loading comments...</h4>
                <div className="loader">
                </div>
            </div>
        )
    }

    return (
        <div>
            { hasFailedToLoadComments === false ? (
                comments.length ? (
                    <CommentsList comments={comments} />
                ): (
                    ''
                )
            ): (
                <p className="failed-to-load-comments"><img src={refresh}/> <span>Cannot load comments at this time</span></p>
            )
            }
        </div>
    )
}