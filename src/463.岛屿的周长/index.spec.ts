import { islandPerimeter } from './index'

describe('463.岛屿的周长', () => {
  it('示例一', () => {
    expect(islandPerimeter([[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]])).toBe(16)
  })

  it('示例二', () => {
    expect(islandPerimeter([[1]])).toBe(4)
  })

  it('示例三', () => {
    expect(islandPerimeter([[1, 0]])).toBe(4)
  })
})
