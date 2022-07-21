import { construct2DArray } from '.'

describe('2022.将一维数组转变成二维数组', () => {
  it('示例一', () => {
    expect(construct2DArray([1, 2, 3, 4], 2, 2)).toStrictEqual([[1, 2], [3, 4]])
  })

  it('示例二', () => {
    expect(construct2DArray([1, 2, 3], 1, 3)).toStrictEqual([[1, 2, 3]])
  })

  it('示例三', () => {
    expect(construct2DArray([1, 2], 1, 1)).toStrictEqual([])
  })

  it('示例四', () => {
    expect(construct2DArray([3], 1, 2)).toStrictEqual([])
  })
})
