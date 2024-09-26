import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './AtomStyle/SearchBar.css';

const SearchBar = () => {
    return (
        <div className="search-container">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input type="text" placeholder="Search..." className="search-input" />
        </div>
    );
};

export default SearchBar;
