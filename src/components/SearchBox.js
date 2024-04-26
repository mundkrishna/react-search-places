import React, { useState } from 'react'
import '../styles/searchBox.css';

const SearchBox = ({ onSearch }) => {
    const [searchValue, setSearchValue] = useState("");

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            onSearch(searchValue);
        }
    };

    return (
        <div className='input-container'>
            <input
                type="search"
                placeholder='Search places...'
                value={searchValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
            />
        </div>
    )
}

export default SearchBox
