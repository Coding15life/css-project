"use client";
import PopularSports from './popular-sports';
import SearchBar from './searchbar';

export default function App() {
    return (
        <div className="main-content">
            <SearchBar />
            <br />
            <PopularSports />
        </div>
    );
}