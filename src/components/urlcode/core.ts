/**
 * Encode a url
 * @param input the URL you feed
 * @returns     encoded URL
 */
function encode(input: string): string {
    return encodeURIComponent(input).replace(/!/g,  '%21')
                                    .replace(/'/g,  '%27')
                                    .replace(/\(/g, '%28')
                                    .replace(/\)/g, '%29')
                                    .replace(/\*/g, '%2A')
                                    .replace(/%20/g, '+');
}

/**
 * DEcode a url
 * @param input the URL you feed
 * @returns     decoded URL
 */
function decode(input: string): string {
    return decodeURIComponent((input).replace(/\+/g, '%20'))
}

export {
    encode,
    decode
}