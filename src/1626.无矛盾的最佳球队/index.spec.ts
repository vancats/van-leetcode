import { bestTeamScore } from '.'

describe('1626.无矛盾的最佳球队', () => {
    it('示例一', () => {
        expect(bestTeamScore([1, 3, 5, 10, 15], [1, 2, 3, 4, 5])).toBe(34)
    })

    it('示例二', () => {
        expect(bestTeamScore([4, 5, 6, 5], [2, 1, 2, 1])).toBe(16)
    })

    it('示例三', () => {
        expect(bestTeamScore([1, 2, 3, 5], [8, 9, 10, 1])).toBe(6)
    })
})
