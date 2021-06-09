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