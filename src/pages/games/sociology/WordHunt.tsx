import React, { useState, useEffect } from 'react';
import BackButton from '../../../components/BackButton';

import '../../../components/styles/sociology.css';


interface WordCell {
    letter: string;
    found: boolean; // White background if not found, otherwise green
    words?: string[]; // The word(s) that this cell is part of
}

const wordsFile = 'sociology/words.json';


const SociologyWordHunt: React.FC = () => {

    const [wordCells, setWordCells] = useState<WordCell[][]>([]);
    

    const [words, setWords] = useState<string[]>([]); // Just the words used in the game
    const [definitions, setDefinitions] = useState<string[]>([]); // Definitions for the words

    const [wordsFound, setWordsFound] = useState<string[]>([]);
    const [guessedWord, setGuessedWord] = useState('');

    const [incorrectGuess, setIncorrectGuess] = useState(false); // If the user guessed a word that is not in the list

    const [selectedWord, setSelectedWord] = useState<string>(''); // The word that we should show the definition for

    const width = 14; // Not user-editable
    const height = 14;

    useEffect(() => {
        const newWordCells: WordCell[][] = [];

        for (let i = 0; i < height; i++) {
            newWordCells[i] = [];
            for (let j = 0; j < width; j++) {
                newWordCells[i][j] = { letter: "_", found: false };
            }
        }

        const max_attempts = 1000;

        fetch(wordsFile)
            .then((response) => response.json())
            .then((data) => {
                const words = [...data.words];

                console.log('Words:', words);

                // Shuffling the words
                for (let i = words.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [words[i], words[j]] = [words[j], words[i]]; // Swap elements
                }

                console.log('Shuffled words:', words);

                const directions = [
                    { dx: 1, dy: 0 },
                    { dx: 0, dy: 1 },
                    { dx: 1, dy: 1 },
                ];

                const chosenWords: string[] = [];

                for (let w of words) {

                    const word = w.word;

                    console.log('Placing word:', word);

                    var attempts = 0;

                    while (attempts < max_attempts) {
                        attempts++;
                        const randomX = Math.floor(Math.random() * width);
                        const randomY = Math.floor(Math.random() * height);
                        const randomDirection = directions[Math.floor(Math.random() * directions.length)];

                        let x = randomX;
                        let y = randomY;
                        let wordIndex = 0;

                        while (wordIndex < word.length) {
                            if (x < 0 || x >= width || y < 0 || y >= height) {
                                break;
                            }
                            // Check for word conflicts
                            // We are good if the cell is empty or the letter matches
                            if (newWordCells[y][x].letter !== "_" && newWordCells[y][x].letter !== word[wordIndex]) {
                                break;
                            }
                            x += randomDirection.dx;
                            y += randomDirection.dy;
                            wordIndex++;
                        }

                        x = randomX;
                        y = randomY;

                        if (wordIndex === word.length) {
                            wordIndex = 0;

                            // Place the word since it fits
                            while (wordIndex < word.length) {
                                newWordCells[y][x].letter = word[wordIndex].toUpperCase();
                                if (!newWordCells[y][x].words) {
                                    newWordCells[y][x].words = [];
                                }
                                newWordCells[y][x]?.words?.push(word);
                                x += randomDirection.dx;
                                y += randomDirection.dy;
                                wordIndex++;

                                if (!chosenWords.includes(word)) {
                                    chosenWords.push(word);
                                }
                            }
                            break;

                        }
                    }

                    // If we exceeded the number of attempts, we are done
                    if (attempts >= max_attempts) {
                        break;
                    }
                    
                }

                setWords(chosenWords);
                console.log('Chosen words:', chosenWords);

                setDefinitions(words.map((w) => w.definition));

                // Fill in the rest of the cells
                for (let i = 0; i < height; i++) {
                    if (!newWordCells[i]) {
                        newWordCells[i] = [];
                    }
                    for (let j = 0; j < width; j++) {
                        if (newWordCells[i][j].letter === "_") {
                            newWordCells[i][j] = { letter: String.fromCharCode(65 + Math.floor(Math.random() * 26)), found: false, words: undefined };
                            // newWordCells[i][j] = { letter: "_", found: false };
                        }
                    }
                }
                setWordCells(newWordCells);
               
            })
            .catch((error) => {
                console.error('Error fetching words:', error);
            });
           

    }, [setWords, setDefinitions]);


    return (
        <div>
            <BackButton />
            <h1 className="title">Word Hunt</h1>

            <div className="word-hunt-grid">
                {wordCells.map((row, i) => (
                    <div key={i} className="word-hunt-row">
                        {row.map((cell, j) => (
                            <div key={j} className={`word-hunt-cell ${cell.found ? 'found' : ''} ${cell?.words?.includes(selectedWord) ? 'found-and-selected' : ''}`}>{cell.letter}</div>
                        ))}
                    </div>
                ))}
            </div>

            <div className="wordhunt-tool-bar">
                <div className="words-found">{wordsFound.length}/{words.length} words found</div>

                <input className={`guess-word ${incorrectGuess ? 'incorrect-guess' : ''}`} type="text" placeholder="Enter a word" value={guessedWord} onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        const word = e.currentTarget.value.toLowerCase();   
                        

                        if (words.includes(word) && !wordsFound.includes(word)) {
                            const newWordCells = [...wordCells];
                            for (let i = 0; i < height; i++) {
                                for (let j = 0; j < width; j++) {
                                    if (newWordCells[i][j].words && newWordCells[i][j]?.words?.includes(word)) {
                                        newWordCells[i][j].found = true;
                                    }
                                }
                            }
                            setWordCells(newWordCells);
                            setWordsFound([...wordsFound, word]);
                            setSelectedWord(word);
                        } else {
                            setIncorrectGuess(true);
                            setTimeout(() => {
                                setIncorrectGuess(false);
                            }, 1000);
                        }
                        setGuessedWord('');

                    }
                }
                }  onChange={(e) => setGuessedWord(e.target.value)} />

                <div className="button" onClick={() => {
                    setWordsFound(words);
                    setGuessedWord('');
                    const newWordCells = [...wordCells];
                    for (let i = 0; i < height; i++) {
                        for (let j = 0; j < width; j++) {
                            if (newWordCells[i][j].words) {
                                newWordCells[i][j].found = true;
                            }
                        }
                    }
                    setSelectedWord(words[0]);
                }
                }>Give Up
                </div>

                <div className="button" onClick={() => {
                    window.location.reload();
                }
                }>New
                </div>



            </div>

            <h3 className="subtitle">Found Words</h3>
            <div className="wordhunt-words">

                {wordsFound.length === 0 && <div className="roast">You can't even find a single word! Do better!</div>}
                

                <table className="table-words">
                    <tbody>
                        {wordsFound.map((word, i) => (
                            <tr key={i}>
                                <td className={`word-column ${word === selectedWord ? 'selected-word' : ''}`} onClick={() => setSelectedWord(word)}>
                                {word.charAt(0).toUpperCase() + word.slice(1)} </td>
                            </tr>
                        ))}

                    </tbody>
                </table>

                <div className="word-definition">
                    <h3 className="subtitle">{selectedWord.charAt(0).toUpperCase() + selectedWord.slice(1)}</h3>

                    {definitions[words.indexOf(selectedWord)] && definitions[words.indexOf(selectedWord)].split('\n').map((line, index) => (
                        <p key={index} className="definition">{line}</p>
                    ))}
                    

                </div>

                
            </div>



        </div>
    );
}

export default SociologyWordHunt;
