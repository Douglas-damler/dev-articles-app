import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../features/searchTermSlice';
import './NavBar.css'
import { NavLink, useRouteMatch } from 'react-router-dom';

export const NavBar = () => {
    const dispatch = useDispatch();
    const {path} = useRouteMatch();
    console.log(path)
    const handleChange = (term) => {
        dispatch(setSearchTerm(term));
    }
    const searchTerm = useSelector((state) => state.searchTerm);
    return (
        <div>
            <div className='content-wrapper'>
            <div className='navmenu'>
                { path.length <= 1 ? (
                    <form action='/search' autoComplete='off' id='search-form'>
                    <input name='q' placeholder='Search here...' size='15' type='text' value={searchTerm} onChange={(e) => {handleChange(e.target.value)}} />
                </form>
                ):(
                    <></>
                )}
                
                <span id='menu'><img alt="" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAC9JREFUeNpi/P//PwM1AQsQU9VEJgYqg8FvICgMGUeel0eTzWiyGU02Qz/ZAAQYAOPcBjEdYroKAAAAAElFTkSuQmCC'  /></span>
                <nav id='navbar' >
                    <ul className='navbar'>
                        
                        <li><NavLink to='/' title='Home'><span>Home</span></NavLink></li>
                        <li><NavLink to='/new-article' title='Home'><span>New Article</span></NavLink></li>
                        <li><NavLink to='/about' title='Home'><span>About</span></NavLink></li>
                        <li><NavLink to='/contact-us' title='Home'><span>Contact Us</span></NavLink></li>
                    </ul>
                </nav>
            </div>
            </div>
            <div/>
        </div>
    )
}