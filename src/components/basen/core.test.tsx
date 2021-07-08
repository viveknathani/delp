import * as baseCore from './core';

describe('Base 2', () => {

    it('Should give 4 as 100', () => {
        expect(baseCore.toAnyBase(4, 2)).toEqual('100');
    });

    it('Should give 1023 as 1111111111', () => {
        expect(baseCore.toAnyBase(1023, 2)).toEqual('1111111111');
    });
})

describe('Base 8', () => {

    it('Should give 4 as 4', () => {
        expect(baseCore.toAnyBase(4, 8)).toEqual('4');
    });

    it('Should give 1023 as 1777', () => {
        expect(baseCore.toAnyBase(1023, 8)).toEqual('1777');
    });
})

describe('Base 16', () => {

    it('Should give 4 as 100', () => {
        expect(baseCore.toAnyBase(4, 16)).toEqual('4');
    });

    it('Should give 1023 as 3ff', () => {
        expect(baseCore.toAnyBase(1023, 16)).toEqual('3ff');
    });
})
