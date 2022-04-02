import { groupAnagrams } from "."

describe('49.字母异位词分组', () => {
  it('示例一', () => {
    expect(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])).toStrictEqual([["eat", "tea", "ate"], ["tan", "nat"], ["bat"]])
  })

  it('示例二', () => {
    expect(groupAnagrams([""])).toStrictEqual([[""]])
  })

  it('示例三', () => {
    expect(groupAnagrams(["a"])).toStrictEqual([["a"]])
  })
})