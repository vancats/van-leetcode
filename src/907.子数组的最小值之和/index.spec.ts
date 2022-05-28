import { sumSubarrayMins } from '.'

describe('907.子数组的最小值之和', () => {
  it('示例一', () => {
    expect(sumSubarrayMins([3, 1, 2, 4])).toBe(17)
  })

  it('示例二', () => {
    expect(sumSubarrayMins([11, 81, 94, 43, 3])).toBe(444)
  })
})
