import { movesToMakeZigzag } from '.'

describe('1144.递减元素使数组呈锯齿状', () => {
    it('示例一', () => {
        expect(movesToMakeZigzag([1, 2, 3])).toBe(2)
    })

    it('示例二', () => {
        expect(movesToMakeZigzag([9, 6, 1, 6, 2])).toBe(4)
    })
})
