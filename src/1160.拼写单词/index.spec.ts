import { countCharacters } from '.'

describe('1160.拼写单词', () => {
  it('示例一', () => {
    expect(countCharacters(['cat', 'bt', 'hat', 'tree'], 'atach')).toBe(6)
  })

  it('示例二', () => {
    expect(countCharacters(['hello', 'world', 'leetcode'], 'welldonehoneyr')).toBe(10)
  })
})
