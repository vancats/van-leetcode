import { findDuplicates } from '.'

describe('442.数组中重复的数据', () => {
  it('示例一', () => {
    expect(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])).toStrictEqual([3, 2])
  })

  it('示例二', () => {
    expect(findDuplicates([1, 1, 2])).toStrictEqual([1])
  })

  it('示例三', () => {
    expect(findDuplicates([1])).toStrictEqual([])
  })
})
