import { longestWord } from './index'

describe('720.词典中最长的单词', () => {
  it('示例一', () => {
    const result = longestWord(['w', 'wo', 'wor', 'worl', 'world'])
    expect(result).toBe('world')
  })

  it('示例二', () => {
    const result = longestWord(['a', 'banana', 'app', 'appl', 'ap', 'apply', 'apple'])
    expect(result).toBe('apple')
  })
})
