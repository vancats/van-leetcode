import { solveNQueens } from '.'

describe('51.N皇后', () => {
  it('示例一', () => {
    expect(solveNQueens(4)).toStrictEqual([['.Q..', '...Q', 'Q...', '..Q.'], ['..Q.', 'Q...', '...Q', '.Q..']])
  })

  it('示例二', () => {
    expect(solveNQueens(1)).toStrictEqual([['Q']])
  })
})
