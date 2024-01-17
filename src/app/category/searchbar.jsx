import { ReactDOM } from 'react-dom';
import React from 'react';
import 'font-awesome/css/font-awesome.min.css'; 

function SearchBar() {
    return (
        <div className="input">
            <input className="search-bar" placeholder="&#x1F50E;&#xFE0E;  Search..."/>
        </div>
    )
}

export default SearchBar;