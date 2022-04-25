import { permute } from '.'

describe('46.全排列', () => {
  it('示例一', () => {
    expect(permute([1, 2, 3])).toStrictEqual([[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]])
  })

  it('示例二', () => {
    expect(permute([0, 1])).toStrictEqual([[0, 1], [1, 0]])
  })

  it('示例三', () => {
    expect(permute([1])).toStrictEqual([[1]])
  })
})
