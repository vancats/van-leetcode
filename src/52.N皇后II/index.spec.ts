import { totalNQueens } from '.'

describe('52.N皇后II', () => {
  it('示例一', () => {
    expect(totalNQueens(4)).toStrictEqual(2)
  })

  it('示例二', () => {
    expect(totalNQueens(1)).toStrictEqual(1)
  })
})
