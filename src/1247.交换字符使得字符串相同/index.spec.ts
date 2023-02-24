import { minimumSwap } from '.'

describe('1247.交换字符使得字符串相同', () => {
    it('示例一', () => {
        expect(minimumSwap('xx', 'yy')).toBe(1)
    })

    it('示例二', () => {
        expect(minimumSwap('xy', 'yx')).toBe(2)
    })

    it('示例三', () => {
        expect(minimumSwap('xx', 'xy')).toBe(-1)
    })

    it('示例四', () => {
        expect(minimumSwap('xxyyxyxyxx', 'xyyxyxxxyx')).toBe(4)
    })
})
