import React, { useState, useEffect } from 'react';
import BackButton from '../../../components/BackButton';

import '../../../components/styles/sociology.css';


interface WordBox {
    word: string;
    category: string;
}

const wordsFile = 'sociology/connections.json';

const numGroups = 4;
const numWordsPerGroup = 4;


const SociologyConnections: React.FC = () => {

    const [words, setWords] = useState<WordBox[]>([]);
    const [selectedWords, setSelectedWords] = useState<WordBox[]>([]);
    const [warningInfo, setWarningInfo] = useState<string>('');
    const [completedCategories, setCompletedCategories] = useState<string[]>([]);
    const [lives, setLives] = useState<number>(3);

    useEffect(() => {
        fetch(wordsFile)
            .then((response) => response.json())
            .then((data) => {

                const categories = data.groups;

                let words: WordBox[] = [];

                // Now we need to go through and find 16 words (4 groups)
                // Randomly choose, except skip category if we already have 4 or a common word

                while (words.length < numGroups * numWordsPerGroup) {
                    const category = categories[Math.floor(Math.random() * categories.length)];
                    
                    console.log(category);
                    
                    // Check if we dont already have the 4 words
                    // category.words are the words

                    if (category.words.length < numWordsPerGroup) {
                        continue;
                    }

                    // If it is more than the desired amount, trim it down randomly
                    category.words.sort(() => Math.random() - 0.5);
                    category.words = category.words.slice(0, numWordsPerGroup);

                    if (category.words.some((word: string) => words.some((wordBox: WordBox) => wordBox.word === word))) {
                        continue;
                    }

                    // Now we have a category with 4 words that we dont already have
                    // Add them to the list
                    category.words.forEach((word: string) => {
                        words.push({word: word, category: category.category});
                    });
                }

                // Shuffle the words
                words.sort(() => Math.random() - 0.5);

                console.log(words);
                setWords(words);

            })
            .catch((error) => {
                console.error('Error fetching words:', error);
            });
    }
    , []);

    return (
        <div>
            <BackButton />
            <h1 className="title">Sociology Connections</h1>
            <h1 className="subtitle">Create groups of {numWordsPerGroup} words!</h1>

            <div className="completed-categories">
                
                {completedCategories.map((completedCategory: string, index: number) => (
                    <div key={index} className="completed-category"><div className="completed-text">{completedCategory}</div></div>
                ))}
            </div>


            <div className="game-grid">

                

                {words.map((wordBox: WordBox, index: number) => (
                    <div key={index} className={`word-box ${selectedWords.some(w => w.word === wordBox.word && w.category === wordBox.category) ? 'word-box-selected' : ''}`} onClick = {() => 
                        
                        {
                            // If selected, deselect
                            if (selectedWords.some((selectedWord: WordBox) => selectedWord.word === wordBox.word)) {
                                setSelectedWords(selectedWords.filter((selectedWord: WordBox) => selectedWord.word !== wordBox.word));
                            } else {
                                // If not selected, select, but only max of 4
                                if (selectedWords.length < numWordsPerGroup) {
                                    setSelectedWords([...selectedWords, wordBox]);
                                }
                            }
                        }
                    }>
                        <div className="word">{wordBox.word}</div>
                    </div>
                ))}

            </div>

            <div className="sectional">

                <div className="connections-tool-bar">

                <div className="words-found">Lives: {lives}</div>

                    <div className="button gapper" onClick={() => {

                        // If no lives, dont do anything
                        if (lives === 0) {
                            setWarningInfo('No Lives');
                            setTimeout(() => {
                                setWarningInfo('');
                            }, 2000);
                            return;
                        }

                        // Check that proper number words are selected
                        if (selectedWords.length !== numWordsPerGroup) {
                            setWarningInfo('Select ' + numWordsPerGroup + ' Words');
                            setTimeout(() => {
                                setWarningInfo('');
                            }, 2000);
                            return;
                        }

                        // If 3 are in the same category, but only 3 set warning to "One Away"
                        const categories = selectedWords.map((wordBox: WordBox) => wordBox.category);
                        const categoryCounts: {[key: string]: number} = {};
                        categories.forEach((category: string) => {
                            if (categoryCounts[category]) {
                                categoryCounts[category]++;
                            } else {
                                categoryCounts[category] = 1;
                            }
                        });

                        const categoryValues = Object.values(categoryCounts);
                        if (categoryValues.some((value: number) => value === (numWordsPerGroup - 1))) {
                            setWarningInfo('One Away');
                            setTimeout(() => {
                                setWarningInfo('');
                            }
                            , 2000);
                            setLives(lives - 1);
                            return;
                        }

                        // If we got the right amount, pop off the corresponding word boxes
                        if (categoryValues.some((value: number) => value === numWordsPerGroup)) {
                            const newWords = words.filter((wordBox: WordBox) => !selectedWords.some((selectedWord: WordBox) => selectedWord.word === wordBox.word));
                            setWords(newWords);

                            // Also add to the completed categories, in the format of "Cateogry: Word, Word, Word, Word"
                            const completedCategory = selectedWords[0].category + ': ' + selectedWords.map((wordBox: WordBox) => wordBox.word).join(', ');
                            setCompletedCategories([...completedCategories, completedCategory]);

                            // Reset selected words
                            setSelectedWords([]);
                            return;
                        }

                        // If we didnt get it, lose a life
                        setLives(lives - 1);
                        // Also deselect the words
                        setSelectedWords([]);

                        setWarningInfo('Try Again');
                        setTimeout(() => {
                            setWarningInfo('');
                        }, 2000);
                        


                    } }>Submit</div>

                    <div className="button gapper" onClick={() => { setSelectedWords([]); }}>Clear</div>

                    <div className="button gapper" onClick={() => { 
                        // Shuffle the words

                        // Note which ones are selected
                        const currentlySelectedWords = [...words].filter((wordBox: WordBox) => selectedWords.some((selectedWord: WordBox) => selectedWord.word === wordBox.word));

                        const shuffledWords = [...words];
                        shuffledWords.sort(() => Math.random() - 0.5);
                        setWords(shuffledWords);
                        setSelectedWords([...shuffledWords].filter((wordBox: WordBox) => currentlySelectedWords.some((selectedWord: WordBox) => selectedWord.word === wordBox.word)));
                    }
                    }>Shuffle</div>

                    <div className="button gapper" onClick={() => {
                        // Reload the page
                        window.location.reload();
                    }
                    }>New</div>


                </div>

                <div className="warning">{warningInfo}</div>

            </div>

            


        </div>
    );
}

export default SociologyConnections;

    