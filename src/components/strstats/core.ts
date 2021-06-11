/**
 * Find total number of words in the given string.
 * @param input     string to count for
 * @param separator About which characters are distinguished as words, default is whitespace
 * @returns         The total number of words
 */
const totalWords = (input: string, separator: string = ' '): number => {

    let result = 0;
    let track = true;
    
    for (let i = 0; i < input.length; ++i) {
        
        if (input[i] === separator) {
            track = true;
            continue;
        }

        if (track === true) {
            track = false;
            ++result;
        }
    }

    return result;
}

/**
 * A function to perform map insertion, in a better way than Map.prototype.set
 * This is written specifically for the use case of mapping a word to its frequency.
 * @param table The map where insertion should take place
 * @param word  The word to insert
 * @returns     Nothing
 */
const insertIntoMap = (table: Map<string, number>, word: string): void => {
    if (word === ' ' || word === undefined) {
        return;
    }

    if (table.has(word)) {
        const currentValue: number = table.get(word) || 0;
        table.set(word, currentValue + 1);
    }
    else {
        table.set(word, 1);
    }
}

/**
 * Get a map of words with their occurence count in a given text.
 * @param input     The given text
 * @param separator About which characters are distinguished as words, default is whitespace
 * @returns          The frequency map
 */
const getWordDistribution = (input: string, separator: string = ' '): Map<string, number> => {
    
    const table: Map<string, number> = new Map();
    let word: string = '';

    for (let i = 0; i < input.length; ++i) {

        if (input[i] === separator && word !== '') {
            insertIntoMap(table, word)
            word = '';
            continue;
        }

        word += input[i];
    }

    insertIntoMap(table, word);
    return table;
}


/**
 * Get the shortest and longest words in a string.
 * @param input     The given string
 * @param separator About which characters are distinguished as words, default is whitespace
 * @returns         An array of strings of size 2, [shortestWord, longestWord]
 */
const getMinMaxWords = (input: string, separator: string = ' '): Array<string> => {

    const arr: Array<string> = new Array<string>(2);
    let shortest: string = '';
    let longest: string = '';
    let start: number = 0;
    let end: number = 0;
    let word: string = '';
    let shortestUnassigned: boolean = true;

    for (let i = 0; i <= input.length; ++i) {

        if (i == input.length || (i !== 0 && input[i] === separator)) {
            end = i;
            const len: number = end - start;

            if (shortestUnassigned || len < shortest.length) {
                shortestUnassigned = false;
                shortest = word;
            }
            if (len > longest.length) {
                longest = word;
            }
            word = '';
            start = end + 1;
            continue;
        }

        word += input[i];
    }

    arr[0] = shortest; 
    arr[1] = longest;
    return arr;
}

/**
 * Get list of all emojis (with repetition).
 * @param input The given string
 * @returns     The emoji list
 */
const getAllEmojis = (input: string): Array<string> => {

    const regexEmojis = /\p{Emoji_Presentation}/gu;
    const arr: RegExpMatchArray | null = input.match(regexEmojis);
    if (arr === null) {
        return Array<string>(0);
    }
    return arr as Array<string>;
}

export {
    totalWords,
    getWordDistribution,
    getMinMaxWords,
    getAllEmojis
}