import { maxSlidingWindow } from '.'

describe('239.滑动窗口最大值', () => {
  it('示例一', () => {
    expect(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)).toStrictEqual([3, 3, 5, 5, 6, 7])
  })

  it('示例二', () => {
    expect(maxSlidingWindow([1], 1)).toStrictEqual([1])
  })
})
