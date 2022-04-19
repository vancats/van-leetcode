import { solve } from '.'

describe('130.被围绕的区域', () => {
  it('示例一', () => {
    expect(solve([['X', 'X', 'X', 'X'], ['X', 'O', 'O', 'X'], ['X', 'X', 'O', 'X'], ['X', 'O', 'X', 'X']])).toStrictEqual([['X', 'X', 'X', 'X'], ['X', 'X', 'X', 'X'], ['X', 'X', 'X', 'X'], ['X', 'O', 'X', 'X']])
  })

  it('示例二', () => {
    expect(solve([['X']])).toStrictEqual([['X']])
  })

  it('示例三', () => {
    expect(solve([['O', 'O', 'O'], ['O', 'O', 'O'], ['O', 'O', 'O']])).toStrictEqual([['O', 'O', 'O'], ['O', 'O', 'O'], ['O', 'O', 'O']])
  })

  it('示例四', () => {
    expect(solve([['X', 'O', 'X', 'O', 'X', 'O'], ['O', 'X', 'O', 'X', 'O', 'X'], ['X', 'O', 'X', 'O', 'X', 'O'], ['O', 'X', 'O', 'X', 'O', 'X']])).toStrictEqual([['X', 'O', 'X', 'O', 'X', 'O'], ['O', 'X', 'X', 'X', 'X', 'X'], ['X', 'X', 'X', 'X', 'X', 'O'], ['O', 'X', 'O', 'X', 'O', 'X']])
  })
})
