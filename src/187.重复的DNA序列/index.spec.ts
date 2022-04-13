import { findRepeatedDnaSequences } from '.'

describe('187.重复的DNA序列', () => {
  it('示例一', () => {
    expect(findRepeatedDnaSequences('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT')).toStrictEqual(['AAAAACCCCC', 'CCCCCAAAAA'])
  })

  it('示例二', () => {
    expect(findRepeatedDnaSequences('AAAAAAAAAAAAA')).toStrictEqual(['AAAAAAAAAA'])
  })
})
