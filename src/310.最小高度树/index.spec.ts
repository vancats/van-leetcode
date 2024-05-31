import { findMinHeightTrees } from '.'

describe('310.最小高度树', () => {
    it('示例一', () => {
        expect(findMinHeightTrees(4, [[1, 0], [1, 2], [1, 3]])).toStrictEqual([1])
    })

    it('示例二', () => {
        expect(findMinHeightTrees(6, [[3, 0], [3, 1], [3, 2], [3, 4], [5, 4]])).toStrictEqual([3, 4])
    })
})
