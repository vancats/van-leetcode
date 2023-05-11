import { groupAnagrams } from '.'

describe('面试题10.02.变位词组', () => {
    it('示例', () => {
        expect(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])).toStrictEqual([['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']])
    })
})
