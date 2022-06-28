import { numTrees } from '.'

describe('96.不同的二叉搜索树', () => {
  it('示例一', () => {
    expect(numTrees(3)).toBe(5)
  })

  it('示例二', () => {
    expect(numTrees(1)).toBe(1)
  })
})
