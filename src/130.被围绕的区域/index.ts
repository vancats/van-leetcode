/**
 * @description: 时间复杂度 O(MN) 空间复杂度 O(MN)
 * @return {*}
 * @param {string} board
 */
export function solve(board: string[][]): string[][] {
  const n = board.length
  const m = board[0].length
  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]]

  // 上下两层
  for (let i = 0; i < m; i++) {
    if (board[0][i] === 'O')
      dfs([0, i])
    if (board[n - 1][i] === 'O')
      dfs([n - 1, i])
  }

  // 左右两层
  for (let i = 0; i < n; i++) {
    if (board[i][0] === 'O')
      dfs([i, 0])

    if (board[i][m - 1] === 'O')
      dfs([i, m - 1])
  }

  // 转换
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 'O')
        board[i][j] = 'X'
      if (board[i][j] === 'o')
        board[i][j] = 'O'
    }
  }
  return board

  function dfs(pos: number[]) {
    const [i, j] = pos
    board[i][j] = 'o'
    for (let k = 0; k < 4; k++) {
      const x = i + dirs[k][0]
      const y = j + dirs[k][1]
      if (x < 0 || x >= n) continue
      if (y < 0 || y >= m) continue
      if (board[x][y] === 'X') continue
      if (board[x][y] === 'o') continue
      // 相连的转为 o
      board[x][y] = 'o'
      dfs([x, y])
    }
  }
}
