import * as strstats from './core';

// Begin: strstats.totalWords

describe('totalWords()', () => {
    it('Should work on a normal text.', () => {
        expect(strstats.totalWords('This is normal text.')).toEqual(4);
    });
    
    it('Should work on empty text.', () => {
        expect(strstats.totalWords(' ')).toEqual(0);
    });
    
    it('Should work on text with emojis.', () => {
        expect(strstats.totalWords('this is random text 🚀')).toEqual(5);
    });
    
    it('Should work on text with emojis only.', () => {
        expect(strstats.totalWords('👍👀 🚀 💯')).toEqual(3);
    });
});

// End: strstats.totalWords

// Begin: strstats.getWordDistribution

describe('getWordDistribution()', () => {

    let table: Map<String, number>;
    beforeEach(() => {
        table = new Map();
    });

    it('Should work on a normal text.', () => {
        const text: string = 'This is normal text.'  

        table.set('This', 1);
        table.set('is', 1);
        table.set('normal', 1);
        table.set('text.', 1);
    
        expect(strstats.getWordDistribution(text)).toEqual(table);
    });
    
    it('Should work on empty text.', () => {
    
        const text: string = ' ';
        expect(strstats.getWordDistribution(text)).toEqual(table);
    });
    
    it('Should work with emojis.', () => {
    
        const text: string = '👍 👀 👀 🚀 💯';
    
        table.set('👍', 1);
        table.set('👀', 2);
        table.set('🚀', 1);
        table.set('💯', 1);
    
        expect(strstats.getWordDistribution(text)).toEqual(table);
    });
});

// End: strstats.getWordDistribution

// Begin: strstats.getMinMaxWords

describe('getMinMaxWords()', () => {

    it('Should work on a simple text.', () => {
        const text: string = 'This is normal text.';
        const arr: Array<String> = ['is', 'normal'];

        expect(strstats.getMinMaxWords(text)).toEqual(arr);
    });
});

// End: strstats.getMinMaxWords

// Begin: strstats.getAllEmojis

describe('getAllEmojis()', () => {

    it('Should work on simple emoji filled text.', () => {
        expect(strstats.getAllEmojis('👍👀 🚀 💯')).toEqual(['👍', '👀', '🚀', '💯']);
    });
});

// End: strstats.getAllEmojis
