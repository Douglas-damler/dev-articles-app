import React from 'react';

export const SearchBar = () => {
    return (
        <form action='/search' autoComplete='off' id='search-form' v-show="">
            <input name='q' placeholder='Search here...' size='15' type='text' value={searchTerm} onChange={(e) => {handleChange(e.target.value)}} />
            <img className="userProfilePicture" src={profile} alt="" />
        </form>
    )
}