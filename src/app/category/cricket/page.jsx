"use client";
import PlayerDetails from './PlayerDetails';
import SearchBar from '../../../components/SearchBar';
import { Righteous } from 'next/font/google';

const App = () => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (value) => {
        setSearchValue(value);
    };

    return (
        <>
            <SearchBar onSearchChange={handleSearchChange} />
            <h1>Search Player Information</h1>
            <br />
            <br />
            <PlayerDetails searchValue={searchValue}/>
        </>
    );
};