import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './NewArticle.css';
import MDEditor from '@uiw/react-md-editor';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postArticle } from '../../features/NewArticlSlice';
import Button from '@material-ui/core/Button';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useHistory } from 'react-router';

export const NewArticle = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [ title, setTitle ] = useState('');
    const [ content, setContent ] = useState("");
    const [ coverImage, setCoverImage ] = useState("");
    const [ addImageLink, setAddImageLink ] = useState("");
    const [ showTitleHint, setShowTitleHint ] = useState(false);
    const [ showEditorHint, setShowEditorHint ] = useState(false);
    const [ copied, setCopied ] = useState({
        value: "",
        copied: false
    });

    
    const isPostingNewArticle = useSelector((state) => state.newArticle.isPostingNewArticle);
    const hasPostedNewArticle = useSelector((state) => state.newArticle.hasPostedNewArticle);

    

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(postArticle({
            coverImage: coverImage,
            title: title,
            markdown: content
        }));

        if (hasPostedNewArticle) {
            history.push("/new-article/preview");
        }
    }

    const handleAddImageChange = async (event) => {
        setCopied(event.target.value);  
    }

    return (
        <div className="main">
           <div className="form-container">
                <form className="new-article-form" onSubmit={handleSubmit}>

                    <h3>
                        New Article 
                        <span>
                            <Link 
                                style={{textDecoration: 'none'}} 
                                to="/new-article/preview"
                            >
                                <span className="preview">Preview</span>
                            </Link>
                        </span>
                    </h3>

                    <input 
                       type="file"
                       onChange={(event) => { setCoverImage(event.target.value)}}
                       accept="image/*"
                       id="contained-button-file"
                       hidden 
                    />

                    <label htmlFor="contained-button-file">
                        <button 
                            className="upload-cover-image-button" 
                            component="span" 
                        >
                            Upload Cover Image
                        </button>
                    </label>
                   
                    <br />

                    <input
                        className="article-title-input"
                        type="text"
                        placeholder="Enter your article title here..."
                        value={title}
                        onClick={() => setShowTitleHint(true)}
                        onChange={(e) => {setTitle(e.target.value)}}
                        required="required"
                    />
                    <br />

                    <input
                        id="add-image-to-new-article" 
                        onChange={handleAddImageChange}
                        accept="image/*"
                        type="file"
                        hidden
                    />

                    <label htmlFor="add-image-to-new-article">
                        <Button 
                            className="add-new-image" 
                            component="span" 
                            color="primary" 
                            variant="contained"
                        >
                            Add Image
                        </Button>
                       
                        <span>
                            <input
                                className="copy-to-clipboard-link" 
                                value={copied.value}
                                onChange={(event) => {setCopied({value: event.target.value})}} 
                            />
                            {copied.value ? (
                                <CopyToClipboard
                                className="copy-to-clipboard" 
                                text={copied.value} 
                                onCopy={() => {setCopied({copied: true})}}
                            >
                                <button style={{backgroundColor: "green", padding: "5px", color: "white"}} disabled={copied.value === ""}>{copied.copied ? "Copied!": "Copy"}</button>
                            </CopyToClipboard>
                            ): ('')}
                        </span>
                        
                    </label>

                    <div className="markdown-editor">
                        <MDEditor
                            value={content}
                            onChange={setContent}
                        />
                    </div>
                    
                    <input
                        className="new-article-submit-button"
                        type="submit"
                        value={isPostingNewArticle ? ('PUBLISHING'): ('PUBLISH')}
                    />

                </form>  

                <div className="user-hints">
                    {
                        showTitleHint ? (
                            <div className="wrap-collapsible">
                                <input id="collapsible" className="toggle" type="checkbox"  />
                                <label htmlFor="collapsible" className="lbl-toggle">Title Hints</label>
                                <div className="collapsible-content">
                                    <div className="content-inner">
                                        <ul>
                                            <li>Enter a title that is catchy</li>
                                            <li> A title that best describe your article </li>
                                            <li>Be sure to use words that will atract the users to click on your article </li>
                                            <li>Consider starting your article with a phrase like "How to ..."</li>
                                            <li> Be creative when writing the title because its the key</li>
                                        </ul>
                                    </div>

                                </div>
                                
                            </div>
                        ): (<></>)
                    }

                    {
                        showEditorHint ? (
                            <div className="editor-hint">

                            </div>
                        ): (<></>)
                    }
                </div>
           </div>
        </div>
    )
}
