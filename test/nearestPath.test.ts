import { NearestPath } from "../src/nearestPath";

describe('Calculate nearest path', () => {
    test('Should calculate nearest path #TestCase 1', () => {
        const input: number[][] = [
            [0, 0, 0, 1],
            [0, 0, 1, 1],
            [0, 1, 1, 0],
        ];

        const expected: number[][] = [
            [3, 2, 1, 0],
            [2, 1, 0, 0],
            [1, 0, 0, 1],
        ];

        const nearestPath = new NearestPath();
        const actual = nearestPath.calculate(input);

        expect(actual).toStrictEqual(expected);
    });

    test('Should calculate nearest path #TestCase 2', () => {
        const input: number[][] = [
            [0, 0],
            [0, 1],
            [1, 0],
            [1, 1]
        ];

        const expected: number[][] = [
            [2, 1],
            [1, 0],
            [0, 1],
            [0, 0]
        ];

        const nearestPath = new NearestPath();
        const actual = nearestPath.calculate(input);

        expect(actual).toStrictEqual(expected);
    });

    test('Should calculate nearest path #TestCase 3', () => {
        const input: number[][] = [
            [0, 0, 0, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];

        const expected: number[][] = [
            [3, 2, 1, 0],
            [4, 3, 2, 1],
            [5, 4, 3, 2],
        ];

        const nearestPath = new NearestPath();
        const actual = nearestPath.calculate(input);

        expect(actual).toStrictEqual(expected);
    });

    test('Should calculate nearest path #TestCase 4', () => {
        const input: number[][] = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];

        const expected: number[][] = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];

        const nearestPath = new NearestPath();
        const actual = nearestPath.calculate(input);

        expect(actual).toStrictEqual(expected);
    });

    test('Should calculate nearest path #TestCase 5', () => {
        const input: number[][] = [
            [1, 1, 1, 1],
            [1, 1, 1, 1],
            [1, 1, 1, 1],
        ];

        const expected: number[][] = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];

        const nearestPath = new NearestPath();
        const actual = nearestPath.calculate(input);

        expect(actual).toStrictEqual(expected);
    });

    test('Should return empty If input is empty', () => {
        const input: number[][] = [];

        const expected: number[][] = [];

        const nearestPath = new NearestPath();
        const actual = nearestPath.calculate(input);

        expect(actual).toStrictEqual(expected);
    });
});