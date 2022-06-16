import { getRow, getRow2, getRow3 } from '.'

describe('119.杨辉三角II', () => {
  describe('递推', () => {
    testCase(getRow)
  })

  describe('滚动数组', () => {
    testCase(getRow2)
  })

  describe('特殊优化', () => {
    testCase(getRow3)
  })
})

function testCase(fn: (rowIndex: number) => number[]) {
  it('示例一', () => {
    expect(fn(3)).toStrictEqual([1, 3, 3, 1])
  })

  it('示例二', () => {
    expect(fn(0)).toStrictEqual([1])
  })

  it('示例三', () => {
    expect(fn(1)).toStrictEqual([1, 1])
  })
}
