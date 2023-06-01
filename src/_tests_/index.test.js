const getPercents = require('../index');

describe('30% от 200 будет равна 60', () => {
    it('выполнение', () => {
        expect(getPercents(30, 200)).toBe(60)
    })
    it('проверка на положительные числа', () => {
        expect(getPercents(-10, 200)).toBe('вы ввели отрицательные значения')
    })
    it('проверка на NaN', () => {
        expect(getPercents(NaN, 200)).toBe('вы ввели не число')
    })
});