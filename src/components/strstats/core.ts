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

export {
    totalWords
}