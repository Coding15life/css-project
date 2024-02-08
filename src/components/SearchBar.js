import { ReactDOM } from 'react-dom';
import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css'; 
import styles from '../app/category/page.module.css'

const SearchBar = ({ onSearchChange }) => {
    const handleChange = (event) => {
        const value = event.target.value;
        onSearchChange(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission if needed
    };

    return (
        <div className={styles.search}>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    className={styles.searchBar} 
                    placeholder="&#x1F50E;&#xFE0E;  Search..."
                    onChange={handleChange}
                />
                <button type="submit" className={styles.submitButton}>Search</button>
            </form>
        </div>
    );
};

export default SearchBar;