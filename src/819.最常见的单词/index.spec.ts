import { mostCommonWord } from '.'

describe('819.最常见的单词', () => {
  it('示例', () => {
    expect(mostCommonWord('Bob hit a ball, the hit BALL flew far after it was hit.', ['hit'])).toBe('ball')
  })
})
