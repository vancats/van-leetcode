import { minOperations } from "."

describe('1658.将x减到0的最小操作数', () => {
  it('示例一', () => {
    expect(minOperations([1, 1, 4, 2, 3], 5)).toBe(2)
  })

  it('示例二', () => {
    expect(minOperations([5, 6, 7, 8, 9], 4)).toBe(-1)
  })

  it('示例三', () => {
    expect(minOperations([3, 2, 20, 1, 1, 3], 10)).toBe(5)
  })

  it('示例四', () => {
    expect(minOperations([8828, 9581, 49, 9818, 9974, 9869, 9991, 10000, 10000, 10000, 9999, 9993, 9904, 8819, 1231, 6309], 134365)).toBe(16)
  })
})
