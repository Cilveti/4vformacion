import { describe, expect, it } from 'bun:test';
import { sum, multiply, isEven } from './math';

describe('Math functions', () => {
    it('sum()', () => {
        expect(sum(2, 2)).toBe(4);
        expect(sum(-1, 1)).toBe(0);
        expect(sum(0, 0)).toBe(0);
    });

    it('multiply()', () => {
        expect(multiply(2, 3)).toBe(6);
        expect(multiply(0, 5)).toBe(0);
        expect(multiply(-2, 3)).toBe(-6);
    });

    it('isEven()', () => {
        expect(isEven(2)).toBe(true);
        expect(isEven(3)).toBe(false);
        expect(isEven(0)).toBe(true);
    });
});
