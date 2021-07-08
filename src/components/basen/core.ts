/**
 * Converts a number of base 10 to any other base between 2 and 36.
 * When the remainder goes more than 9, we use the letters a-z to denote
 * them. 
 * @param value The number in base 10
 * @param base  The base value
 * @returns A stringified number.
 */
const toAnyBase = function(value: number, base: number): string {
    let result: string = '';

    if (base >= 2 && base <= 35) {

        while (value > 0) {
        
            let rem: number = value % base;
            value = Math.floor(value / base);
    
            if (rem >= 10) {
                rem += 87;
                result += String.fromCodePoint(rem);
                continue;
            }
    
            result += rem.toString();
        }
    
        result = result.split('').reverse().join('');
    }
    return result;
}

export {
    toAnyBase
}