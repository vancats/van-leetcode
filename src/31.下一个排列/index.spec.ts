import { nextPermutation } from '.'

describe('31.下一个排列', () => {
    it('示例一', () => {
        const arr = [1, 2, 3]
        nextPermutation(arr)
        expect(arr).toStrictEqual([1, 3, 2])
    })

    it('示例二', () => {
        const arr = [3, 2, 1]
        nextPermutation(arr)
        expect(arr).toStrictEqual([1, 2, 3])
    })

    it('示例三', () => {
        const arr = [1, 1, 5]
        nextPermutation(arr)
        expect(arr).toStrictEqual([1, 5, 1])
    })
})
