import { validPartition } from '.'

describe('2369.检查数组是否存在有效划分', () => {
    it('示例一', () => {
        expect(validPartition([4, 4, 4, 5, 6])).toBe(true)
    })

    it('示例二', () => {
        expect(validPartition([1, 1, 1, 2])).toBe(false)
    })
})
