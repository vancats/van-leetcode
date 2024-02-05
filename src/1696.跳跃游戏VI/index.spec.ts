import { maxResult } from '.'

describe('1696.跳跃游戏VI', () => {
    it('示例一', () => {
        expect(maxResult([1, -1, -2, 4, -7, 3], 2)).toBe(7)
    })

    it('示例二', () => {
        expect(maxResult([10, -5, -2, 4, 0, 3], 3)).toBe(17)
    })

    it('示例三', () => {
        expect(maxResult([1, -5, -20, 4, -1, 3, -6, -3], 2)).toBe(0)
    })

    it('示例四', () => {
        expect(maxResult([100, -1, -100, -1, 100], 2)).toBe(198)
    })

    it('示例五', () => {
        expect(maxResult([0, -1, -2, -3, 1], 2)).toBe(-1)
    })
})
