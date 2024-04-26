import React, { useState } from 'react'
import '../styles/searchBox.css';

const SearchBox = ({ onSearch }) => {
    const [query, setquery] = useState("");

    const handleInputChange = (e) => {
        setquery(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            onSearch(query);
        }
    };

    return (
        <div className='input-container'>
            <input
                type="search"
                placeholder='Search places...'
                value={query}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
            />
        </div>
    )
}

export default SearchBox
