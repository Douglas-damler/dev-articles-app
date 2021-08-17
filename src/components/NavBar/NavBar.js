import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../features/searchTermSlice';
import './NavBar.css'

export const NavBar = () => {
    const dispatch = useDispatch();
    const handleChange = (term) => {
        dispatch(setSearchTerm(term));
    }
    const searchTerm = useSelector((state) => state.searchTerm);
    return (
        <div>
            <div class='content-wrapper'>
            <div class='navmenu'>
                <form action='/search' autocomplete='off' id='search-form'>
                    <input name='q' placeholder='Search here...' size='15' type='text' value={searchTerm} onChange={(e) => {handleChange(e.target.value)}} />
                </form>
                <span id='menu'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAC9JREFUeNpi/P//PwM1AQsQU9VEJgYqg8FvICgMGUeel0eTzWiyGU02Qz/ZAAQYAOPcBjEdYroKAAAAAElFTkSuQmCC'  /></span>
                <nav id='navbar' itemprop='mainEntity' itemscope='itemscope' itemtype='https://schema.org/SiteNavigationElement'>
                    <ul class='navbar'>
                        <li><a href='#1' itemprop='url' title='Home'><span itemprop='name'>Home</span></a></li>
                        <li><a href='#2' itemprop='url' title='Home'><span itemprop='name'>New Article</span></a></li>
                        <li><a href='#3' itemprop='url' title='Home'><span itemprop='name'>About</span></a></li>
                        <li><a href='#7' itemprop='url' title='Home'><span itemprop='name'>Contact Us</span></a></li>
                    </ul>
                </nav>
            </div>
            </div>
            <div/>
        </div>
    )
}