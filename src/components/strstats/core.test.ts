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
        const text: String = new String('This is normal text.');    

        table.set('This', 1);
        table.set('is', 1);
        table.set('normal', 1);
        table.set('text.', 1);
    
        expect(strstats.getWordDistribution(text)).toEqual(table);
    });
    
    it('Should work on empty text.', () => {
    
        const text: String = new String(' ');
        expect(strstats.getWordDistribution(text)).toEqual(table);
    });
    
    it('Should work with emojis.', () => {
    
        const text: String = new String('👍 👀 👀 🚀 💯');
    
        table.set('👍', 1);
        table.set('👀', 2);
        table.set('🚀', 1);
        table.set('💯', 1);
    
        expect(strstats.getWordDistribution(text)).toEqual(table);
    });
});

// End: strstats.getWordDistribution
