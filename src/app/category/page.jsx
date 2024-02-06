"use client";
import PopularSports from './popular-sports';
import SearchBar from './searchbar';
import styles from "./page.module.css";

export default function App() {
    return (
        <div className="main-content">
            <SearchBar />
            <br />
            <PopularSports />
        </div>
    );
}