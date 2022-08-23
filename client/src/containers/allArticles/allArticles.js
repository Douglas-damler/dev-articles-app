import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadAllArticles } from '../../components/features/allArticlesSlice';
import { ArticleList } from '../../components/ArticlesList/ArticleList';
import ReactLoading from 'react-loading';

export const AllArticles = () => {
    const dispatch = useDispatch();
    const articles = useSelector((state) => state.allArticles.articles);
    const searchTerm = useSelector((state) => state.searchTerm);
    console.log(searchTerm);
    const isLoading = useSelector((state) => state.allArticles.isLoadingArticles);
    
    const filterData = (data, searchTerm) => {
       return data.filter((dat) => dat.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    const filteredArticles = filterData(articles, searchTerm);

    useEffect(() => {
        dispatch(loadAllArticles());
    }, [dispatch]);

    return (
        <div className="main">
            <h3 className="featured-title">Featured Today</h3>

            {isLoading === false ? (
                <ArticleList articles={filteredArticles} />
            ): (
                <ReactLoading
                    type="bars"
                    color="gray" 
                />
            )}
        </div>
    )
}