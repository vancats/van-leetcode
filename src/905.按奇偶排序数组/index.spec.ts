import { sortArrayByParity } from '.'

describe('905.按奇偶排序数组', () => {
  it('示例一', () => {
    expect(sortArrayByParity([3, 1, 2, 4])).toStrictEqual([2, 4, 3, 1])
  })

  it('示例三', () => {
    expect(sortArrayByParity([0])).toStrictEqual([0])
  })
})
