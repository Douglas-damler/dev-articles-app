import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faMailchimp } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { faPhp } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import './ArticleInformation.css';
import { NewCommentForm } from '../../newCommentForm/NewCommentForm'
import { AllComments } from '../../../containers/allComments/allComments';
import profile from '../../../images/profile.jpg'; //This is a test image the actual image will be imported from the database
import { addUserFollowing } from '../../features/userSessionSlice';

export const ArticleInformation = () => {
    const articles = useSelector((state) => state.allArticles.articles);
    const addFollowingIsSuccessful = useSelector((state) => state.userSession.userFollowingIsSuccessful);
    const comments = useSelector((state) => state.comments.comments);
    const totalComments = comments.length;
    const { id } = useParams();
    const dispatch = useDispatch();

    const handleFollowButtonClick = () => {
        dispatch(addUserFollowing());
    }

    const findArticleById = (articles) => {
        for (let index = 0; index < articles.length; index++) {
            if (articles[index]._id === id) {
                return articles[index];
            }
        }
    };

    const article = findArticleById(articles);

    return (
        <div className="main">
        <div className="article-information">
            {
                article ? (
                    <div>
                        <h3 className="title">{article.title}</h3>
                        <p className="dates">{article.published_date}</p>
                        <p className="author">{article.author || 'DevArticles'}</p>
                        <div className="article-image">
                            <img src={article.media} alt="" />
                        </div>

                        <div className="article-text-container">
                            <p className="article-text">
                                {article.summary}
                            </p>
                        </div>

                        <h3 className="comments-header">Comments <span>{totalComments === 0 ? (''): (totalComments)}</span></h3>
                        <NewCommentForm />
                        <AllComments id={id} />
                    </div>
                
                ): (
                  <h3>Ooh No. We're lost buddy! Aticle not found.</h3>  
                )
            }
            
        </div>
        {article ? (
            <div className="author-information-container">
                <div className="author-information">
                    <img src={profile} alt=""/>
                    <h5 className="name">{article.author}</h5>
                    <button onClick={handleFollowButtonClick}>
                        {addFollowingIsSuccessful ? 'Following': 'Follow'}
                        </button>
                    <p className="more-information">
                        My name is Douglas Kathurima a software engineer at the University of Eastern Africa, Baraton
                    </p>

                    <h5>Location</h5>
                    <p>Meru, Kenya</p>
                    <h5>Education</h5>
                    <p>University of Eastern Africa</p>
                    <h5>Work</h5>
                    <p>Software Engineer</p>
                    <h5>Joined</h5>
                    <p>12 August 2020</p>
                </div>
         </div>
        ): ('')}

        {article ? (
            <div className="arts-container">
                <ul className="arts">
                    <div><FontAwesomeIcon size="2x" icon={faHeart} color="red" /></div>
                    <div><FontAwesomeIcon size="2x" icon={faComment} color="blue"/></div>
                    <div><FontAwesomeIcon size="2x" icon={faMailchimp}/></div>
                    <div><FontAwesomeIcon size="2x" icon={faReact}/></div>
                    <div><FontAwesomeIcon size="2x" icon={faJs} /></div>
                    <div><FontAwesomeIcon size="2x" icon={faPython}/></div>
                    <div><FontAwesomeIcon size="2x" icon={faJava}/></div>
                    <div><FontAwesomeIcon size="2x" icon={faPhp}/></div>
                    
                </ul>
            </div>
        ): ('')}
        </div>

        
    )
}