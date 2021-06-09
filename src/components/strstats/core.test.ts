import * as strstats from './core';

// Begin: strstats.totalWords

it('totalWords: Should work on a normal text.', () => {
    expect(strstats.totalWords('This is normal text.')).toEqual(4);
});

it('totalWords: Should work on empty text.', () => {
    expect(strstats.totalWords(' ')).toEqual(0);
});

it('totalWords: Should work on text with emojis.', () => {
    expect(strstats.totalWords('this is random text 🚀')).toEqual(5);
});

it('totalWords: Should work on text with emojis only.', () => {
    expect(strstats.totalWords('👍👀 🚀 💯')).toEqual(3);
});

// End: strstats.totalWords
