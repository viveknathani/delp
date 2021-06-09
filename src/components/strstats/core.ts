/**
 * Find total number of words in the given string.
 * @param input     String to count for
 * @param separator About which characters are distinguished as words, default is whitespace
 * @returns         The total number of words
 */
const totalWords = (input: String, separator: String = ' '): number => {

    let result: number = 0;
    let track: boolean = true;
    
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
const insertIntoMap = (table: Map<String, number>, word: String): void => {
    if (word === ' ' || word === undefined) {
        return;
    }

    if (table.has(word)) {
        let currentValue: number = table.get(word) || 0;
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
const getWordDistribution = (input: String, separator: String = ' '): Map<String, number> => {
    
    const table: Map<String, number> = new Map();
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


export {
    totalWords,
    getWordDistribution
}