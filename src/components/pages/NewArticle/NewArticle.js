import React, { useState } from 'react';
import './NewArticle.css';
import MDEditor from '@uiw/react-md-editor';
import { Link, Route } from 'react-router-dom';
import { NewArticlePreview } from '../../NewArticlePreview/NewArticlePreview';
import { useDispatch } from 'react-redux';
import { postArticle } from '../../features/NewArticlSlice';

export const NewArticle = () => {
    const [ title, setTitle ] = useState('');
    const [ content, setContent ] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(postArticle({
            title: title,
            markdown: content
        }));
    }
    return (
        <div className="main">
           <div className="form-container">
                <form className="new-article-form" onSubmit={handleSubmit}>

                    <h3>New Article <span><Link style={{textDecoration: 'none'}} to="/new-article/preview"><span className="preview">Preview</span></Link></span></h3>

                    <input 
                       type="file"
                       hidden 
                    />

                    <button className="upload-image-button">Upload cover Image</button>
                    <br />

                    <input
                        className="article-title-input"
                        type="text"
                        placeholder="Enter your article title here..."
                        value={title}
                        onChange={(e) => {setTitle(e.target.value)}}
                        required="required"
                    />
                    <br />

                    <input
                        className="add-image-to-new-article" 
                        type="file"
                        hidden
                    />

                    <button className="add-new-image">Add Image</button>

                    <MDEditor
                        placeholder="Begin writing your ideas here"
                        value={content}
                        onChange = {setContent}
                    />

                <input
                    className="new-article-submit-button"
                    type="submit"
                    value="PUBLISH"
                />
                </form>

               
           </div>
        </div>
    )
}

<Route path="/new-article/preview">
    <NewArticlePreview />
</Route>