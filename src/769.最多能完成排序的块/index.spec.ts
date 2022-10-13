import { maxChunksToSorted } from '.'

describe('769.最多能完成排序的块', () => {
  it('示例一', () => {
    expect(maxChunksToSorted([4, 3, 2, 1, 0])).toBe(1)
  })

  it('示例二', () => {
    expect(maxChunksToSorted([1, 0, 2, 3, 4])).toBe(4)
  })
})
