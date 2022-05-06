import { minMutation } from '.'

describe('433.最小基因变化', () => {
  it('示例一', () => {
    expect(minMutation('AACCGGTT', 'AACCGGTA', ['AACCGGTA'])).toBe(1)
  })

  it('示例二', () => {
    expect(minMutation('AACCGGTT', 'AAACGGTA', ['AACCGGTA', 'AACCGCTA', 'AAACGGTA'])).toBe(2)
  })

  it('示例三', () => {
    expect(minMutation('AAAAACCC', 'AACCCCCC', ['AAAACCCC', 'AAACCCCC', 'AACCCCCC'])).toBe(3)
  })

  it('示例四', () => {
    expect(minMutation('AACCGGTT', 'AACCGGTA', [])).toBe(-1)
  })

  it('示例五', () => {
    expect(minMutation('AAAAAAAA', 'CCCCCCCC', ['AAAAAAAA', 'AAAAAAAC', 'AAAAAACC', 'AAAAACCC', 'AAAACCCC', 'AACACCCC', 'ACCACCCC', 'ACCCCCCC', 'CCCCCCCA', 'CCCCCCCC'])).toBe(8)
  })

  it('示例六', () => {
    expect(minMutation('AAAACCCC', 'CCCCCCCC', ['AAAACCCA', 'AAACCCCA', 'AACCCCCA', 'AACCCCCC', 'ACCCCCCC', 'CCCCCCCC', 'AAACCCCC', 'AACCCCCC'])).toBe(4)
  })
})
