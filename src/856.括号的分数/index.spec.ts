import { scoreOfParentheses } from '.'

describe('856.括号的分数', () => {
  it('示例一', () => {
    expect(scoreOfParentheses('()')).toBe(1)
  })

  it('示例二', () => {
    expect(scoreOfParentheses('(())')).toBe(2)
  })

  it('示例三', () => {
    expect(scoreOfParentheses('()()')).toBe(2)
  })

  it('示例四', () => {
    expect(scoreOfParentheses('(()(()))')).toBe(6)
  })

  it('示例五', () => {
    expect(scoreOfParentheses('(())()')).toBe(3)
  })

  it('示例六', () => {
    expect(scoreOfParentheses('((()()))')).toBe(8)
  })
})
