<nav>
           <div className="menu-icon">
               <span><FontAwesomeIcon icon={["fas", "bars"]} /></span>
           </div>

           <div className="logo">
                devArticles
           </div>

           <div className="nav-items">
                <li><NavLink to='/' title='Home'><span>Home</span></NavLink></li>
                <li><NavLink to='/new-article' title='Home'><span>New Article</span></NavLink></li>
                <li><NavLink to='/about' title='Home'><span>About</span></NavLink></li>
                <li><NavLink to='/contact-us' title='Home'><span>Contact Us</span></NavLink></li>
           </div>

           <div className="search-icon">
                <span><SearchIcon /></span>
           </div>

           <div className="cancel-icon">
                <span><FontAwesomeIcon icon={["fas", "times"]} /></span>
           </div>

           <form action="">
                <input
                 onChange={(event) => {
                    handleChange(event.target.value)
                 }}
                 value={searchTerm}
                 type="search"
                 className="search-data" 
                 placeholder="Search" 
                 required />
           </form>
       </nav>