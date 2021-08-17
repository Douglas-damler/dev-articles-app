import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadAllArticles } from '../../components/features/allArticlesSlice';
import { ArticleList } from '../../components/ArticlesList/ArticleList';

export const AllArticles = () => {
    const dispatch = useDispatch();
    const articles = useSelector((state) => state.allArticles.articles);
    const searchTerm = useSelector((state) => state.searchTerm);
    
    const filterData = (data, searchTerm) => {
       return data.filter((dat) => dat.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    const filteredArticles = filterData(articles, searchTerm);

    useEffect(() => {
        dispatch(loadAllArticles());
    }, [dispatch]);

    return (
        <ArticleList articles={filteredArticles} />
    )
}