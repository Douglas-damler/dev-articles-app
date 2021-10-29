import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useSelector } from 'react-redux';
import './NewArticlePreview.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import  light  from 'react-syntax-highlighter/dist/esm/styles/prism/vs';


export const NewArticlePreview = () => {
    const newArticle = useSelector((state) => state.newArticle.article);
    return (
        <div className="main">
           <div className="article-preview-container">
               <h1>{newArticle.title}</h1>
               <div className="article-image">
                    <img  alt="" />
                </div>

                <div className="react-mark-down">
                <ReactMarkdown
                    children={newArticle.markdown}
                    className="reactMarkdown"
                    components={{
                    code({node, inline, className, children, ...props}) {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                        <SyntaxHighlighter
                            children={String(children).replace(/\n$/, '')}
                            style={light}
                            language={match[1]}
                            PreTag="div"
                            {...props}
                        />
                        ) : (
                        <code className={className} {...props}>
                            {children}
                        </code>
                        )
                    }
                    }}
  />
                </div>

           </div>
        </div>
    )
}