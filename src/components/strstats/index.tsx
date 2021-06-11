import * as React from 'react';
import * as strstats from './core';
import '../../styles/strstats.css';

/**
 * Manage useState functions as an object
 */
interface StateHandlers {
    setLength: React.Dispatch<React.SetStateAction<number>>,
    setWordCount: React.Dispatch<React.SetStateAction<number>>,
    setEmojiCount: React.Dispatch<React.SetStateAction<number>>,
    setShortestWord: React.Dispatch<React.SetStateAction<string>>,
    setLongestWord: React.Dispatch<React.SetStateAction<string>>,
    setDistribution: React.Dispatch<React.SetStateAction<Map<string, number>>>
}

/**
 * Handle change in textarea's input field
 * @param event     The event that signifies change
 * @param changers  The object of type StateHandlers
 * @returns         Nothing
 */
function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>, changers: StateHandlers): void {
    const input: string = (event.target.value);
    changers.setLength(input.length);
    changers.setWordCount(strstats.totalWords(input));
    changers.setEmojiCount(strstats.getAllEmojis(input).length);
    const minMax: Array<string> = strstats.getMinMaxWords(input);
    if(minMax !== null && minMax.length === 2) {
        changers.setShortestWord(minMax[0]);
        changers.setLongestWord(minMax[1]);
    }
    changers.setDistribution(strstats.getWordDistribution(input));
}

/**
 * Returns the contents of distribution as a HTML string 
 * @param map   The input map
 * @returns     A string that can be parsed as HTML
 */
function getDistribution(map: Map<string, number>): string {
    let result = '<p>distribution:</p>';
    map.forEach((value, key) => {
        if(key !== '') {
            result += `<p>${key}: ${value}<p>`
        }
    });
    return result;
}

/**
 * The component responsible for the feature, 'string statistics'.
 */
function StringStats(): JSX.Element {

    // State
    const [length, setLength] = React.useState<number>(0);
    const [wordCount, setWordCount] = React.useState<number>(0);
    const [emojiCount, setEmojiCount] = React.useState<number>(0);
    const [shortestWord, setShortestWord] = React.useState<string>('');
    const [longestWord, setLongestWord] = React.useState<string>('');
    const [distribution, setDistribution] = React.useState<Map<string, number>>(new Map());

    return(
        <div className="strstats">

           <label>your text here</label>
           <textarea id="box" onChange={(event) => handleChange(event, {
               setLength,
               setWordCount,
               setEmojiCount,
               setShortestWord,
               setLongestWord,
               setDistribution
           })}></textarea>

            <p id="head">stats</p>
           <div id="stats">
               <div id="basic">
                <p>length: {length}</p>
                <p>word count: {wordCount}</p>
                <p>emoji count: {emojiCount}</p>
                <p>shortest word: {shortestWord}</p>
                <p>longest word: {longestWord}</p>
               </div>
               <div id="dist"
                    dangerouslySetInnerHTML={{__html: getDistribution(distribution)}}>
                </div>
           </div>
        </div>
    );
}

export default StringStats;
