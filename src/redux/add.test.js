// add two integera
// add decimals
// add negative
// add string
// one number?
// string 'ten'

import sum from './add.js';


test('Add 2 Integers', () => {
    expect( sum(1,2) ).toBe(3);
})

test('Add Decimals', () => {
    expect( sum(1.0, 0.5) ).toBe(1.5);
})

test('Add Negatives', () => {
    expect( sum(-2, 3) ).toBe(1);
})

test('Add Strings', () => {
    expect( sum('1','5') ).toBe(6);
})

test('Add String ten', () =>{
    expect( sum('ten',4) ).toBe(14);
})