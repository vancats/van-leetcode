import { coinChange } from './index'

describe('322.零钱兑换', () => {
  it('示例一', () => {
    const result = coinChange([1, 2, 5], 11)
    expect(result).toBe(3)
  })

  it('示例二', () => {
    const result = coinChange([2], 3)
    expect(result).toBe(-1)
  })

  it('示例三', () => {
    const result = coinChange([1], 0)
    expect(result).toBe(0)
  })

  it('示例四', () => {
    const result = coinChange([2, 5, 10, 1], 27)
    expect(result).toBe(4)
  })
})