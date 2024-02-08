// Coded with assistance from ChatGPT.
// For some some parts.
"use client";
import React, { useState, useEffect } from 'react';
import styles from '../page.module.css';

const App = ({ searchValue }) => {
    const [player, setPlayer] = useState([]);

    const [phrase, setPhrase] = useState('');
    const [word1, setWord1] = useState('');
    const [word2, setWord2] = useState('');

    const handlePhraseChange = (event) => {
        setPhrase(event.target.value);
    };

    const splitPhrase = () => {
        // Trim leading and trailing whitespaces from the phrase
        const trimmedPhrase = phrase.trim();

        // Split the trimmed phrase into an array of words
        const words = trimmedPhrase.split(/\s+/);

        // If there are exactly two words, assign them to separate variables
        if (words.length === 2) {
            setWord1(words[0]);
            setWord2(words[1]);
        } else {
            console.log("The phrase does not contain exactly two words.");
            setWord1('');
            setWord2('');
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=' + encodeURIComponent('Lionel_Messi'));
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data);
                setPlayer(data.player);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="playerContainer">
            {player.map((playerDetails) => {
                return (
                    <div key={playerDetails.idPlayer} className={styles.playerDetails}>
                        <img className={styles.playerImage} src={playerDetails.strThumb} />
                        <h1 className={styles.header}>{playerDetails.strPlayer}</h1>
                        <p className={styles.playerInfo}><b>Details:</b> {playerDetails.strDescriptionEN}</p>
                        <p className={styles.playerInfo}><b>DOB:</b> {playerDetails.dateBorn}</p>
                        <p className={styles.playerInfo}><b>Teams:</b> {playerDetails.strTeam}, {playerDetails.strTeam2}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default App;