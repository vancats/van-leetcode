import { longestWord } from './index'

describe('720.词典中最长的单词', () => {
  it('示例一', () => {
    const expected = longestWord(["w", "wo", "wor", "worl", "world"])
    expect(expected).toBe('world')
  })

  it('示例二', () => {
    const expected = longestWord(["a", "banana", "app", "appl", "ap", "apply", "apple"])
    expect(expected).toBe('apple')
  })
})