import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../features/searchTermSlice';
import devArticlesLogo from '../../../src/images/devArticles-logo.png';
import './NavBar.css'
import { useRouteMatch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchIcon from "@material-ui/icons/Search";
import { NavLink } from 'react-router-dom';



export const NavBar = () => {

     const dispatch = useDispatch();
     const { path } = useRouteMatch();
     console.log(path)
     const handleChange = (term) => {
          dispatch(setSearchTerm(term));
     }
     const searchTerm = useSelector((state) => state.searchTerm)
     return (
          <div>
               <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <div className="container-fluid">
                         <a href="#" className="navbar-brand">Brand</a>
                         <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                              <span className="navbar-toggler-icon"></span>
                         </button>
                         <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                              <div className="navbar-nav">
                                   <a href="#" className="nav-item nav-link active">Home</a>
                                   <a href="#" className="nav-item nav-link">Profile</a>
                                   <div className="nav-item dropdown">
                                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Messages</a>
                                        <div className="dropdown-menu">
                                             <a href="#" className="dropdown-item">Inbox</a>
                                             <a href="#" className="dropdown-item">Sent</a>
                                             <a href="#" className="dropdown-item">Drafts</a>
                                        </div>
                                   </div>
                              </div>
                              {/* <form className="d-flex">
                                   <div className='input-group mt-0'>
                                        <input type="text" className="form-control" placeholder="Search"/>
                                             <button type="button" className="btn btn-secondary"><i className="bi-search"></i></button>
                                   </div>
                              </form> */}
                              <div className="navbar-nav">
                                   <a href="#" className="nav-item nav-link">Login</a>
                              </div>
                         </div>
                    </div>
               </nav>
          </div>
     )
}