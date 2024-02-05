import { ReactDOM } from 'react-dom';
import React from 'react';
import styles from './page.module.css';
import 'font-awesome/css/font-awesome.min.css'; 

function SearchBar() {
    return (
        <div className="searchBar">
            <input className={styles.searchBar} placeholder="&#x1F50E;&#xFE0E;  Search..."/>
        </div>
    )
}

export default SearchBar;