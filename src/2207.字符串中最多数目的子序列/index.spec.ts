import { maximumSubsequenceCount } from '.'

describe('2207.字符串中最多数目的子序列', () => {
    it('示例一', () => {
        expect(maximumSubsequenceCount('abdcdbc', 'ac')).toBe(4)
    })

    it('示例二', () => {
        expect(maximumSubsequenceCount('aabb', 'ab')).toBe(6)
    })
})
