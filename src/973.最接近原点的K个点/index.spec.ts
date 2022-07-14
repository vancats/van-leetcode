import { kClosest } from '.'

describe('973.最接近原点的K个点', () => {
  it('示例一', () => {
    expect(kClosest([[1, 3], [-2, 2]], 1)).toStrictEqual([[-2, 2]])
  })

  it('示例二', () => {
    expect(kClosest([[3, 3], [5, -1], [-2, 4]], 2)).toStrictEqual([[3, 3], [-2, 4]])
  })
})
