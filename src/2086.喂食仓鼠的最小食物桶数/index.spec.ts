import { minimumBuckets } from '.'

describe('2086.喂食仓鼠的最小食物桶数', () => {
    it('示例一', () => {
        expect(minimumBuckets('H..H')).toBe(2)
    })

    it('示例二', () => {
        expect(minimumBuckets('.H.H.')).toBe(1)
    })

    it('示例三', () => {
        expect(minimumBuckets('.HHH.')).toBe(-1)
    })
})
