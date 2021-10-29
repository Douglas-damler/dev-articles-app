import React from 'react';
import profile from '../../images/profile.jpg';
import './Comment.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import TimeAgo from 'react-timeago';
import frenchStrings from 'react-timeago/lib/language-strings/en';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'

const formatter = buildFormatter(frenchStrings);


export const Comment = (props) => {

    const [click, setClick] = useState(false);

    return (
        <li>
            <div className="comment-container">
                <img src={profile} alt="" />
                <div className="comment">
                    <h4>DevArticles <span className="timeago"><b>. </b><TimeAgo date={props.comment.date} formatter={formatter} /></span></h4>
                    <p>{props.comment.comment}</p>
                </div>
                <ul className="comment-reply">
                    <div className="like" onClick={() => {setClick(true)}} ><FontAwesomeIcon icon={faHeart} color={ click ? "red" : ""}  /> <span>Like</span></div>
                    <div><FontAwesomeIcon icon={faComment} /> <span className="reply">Reply</span></div>
                    <div><FontAwesomeIcon icon={faThumbsDown}/> <span className="dislike">dislike</span></div>
                </ul>
            </div>
        </li>
    )
}