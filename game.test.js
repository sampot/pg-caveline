import {describe,it,expect} from 'vitest';import {adjacent,extendPath,solved} from './game.js';
describe('cave line',()=>{it('only joins neighbors',()=>{expect(adjacent(0,1)).toBe(true);expect(adjacent(0,4)).toBe(true);expect(adjacent(0,5)).toBe(false)});
it('cannot revisit',()=>expect(extendPath([0,1],0)).toEqual([0,1]));it('checks goal and budget',()=>expect(solved([0,1,2,6,10,14,15],15,7)).toBe(true))});
