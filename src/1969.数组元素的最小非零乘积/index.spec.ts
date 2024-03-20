import { minNonZeroProduct } from './index'
describe('1969.数组元素的最小非零乘积', () => {
    it('示例一', () => {
        expect(minNonZeroProduct(1)).toBe(1)
    })

    it('示例二', () => {
        expect(minNonZeroProduct(2)).toBe(6)
    })

    it('示例三', () => {
        expect(minNonZeroProduct(3)).toBe(1512)
    })
})
