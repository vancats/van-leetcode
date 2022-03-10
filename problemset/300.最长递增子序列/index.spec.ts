import { lengthOfLIS } from './index'

describe('300.最长递增子序列', () => {
  it('示例一', () => {
    const arr: number[] = [10, 9, 2, 5, 3, 7, 101, 18]
    const expected = lengthOfLIS(arr)
    expect(expected).toBe(4)
  })

  it('示例二', () => {
    const arr: number[] = [0, 1, 0, 3, 2, 3]
    const expected = lengthOfLIS(arr)
    expect(expected).toBe(4)
  })

  it('示例三', () => {
    const arr: number[] = [7, 7, 7, 7, 7, 7, 7]
    const expected = lengthOfLIS(arr)
    expect(expected).toBe(1)
  })

  it('示例四', () => {
    const arr: number[] = [10, 9, 2, 5, 3, 4]
    const expected = lengthOfLIS(arr)
    expect(expected).toBe(3)
  })

  it('示例五', () => {
    const arr: number[] = [4, 10, 4, 3, 8, 9]
    const expected = lengthOfLIS(arr)
    expect(expected).toBe(3)
  })
})