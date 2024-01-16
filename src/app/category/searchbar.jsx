import { ReactDOM } from 'react-dom';
import React from 'react';
import 'font-awesome/css/font-awesome.min.css'; 

function SearchBar() {
    return (
        <div className="input">
            <input className="search-bar" placeholder="&#xF002;  Search..."/>
        </div>
    )
}

export default SearchBar;