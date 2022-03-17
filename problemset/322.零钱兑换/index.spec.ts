import { coinChange } from './index'

describe('322.零钱兑换', () => {
  it('示例一', () => {
    const expected = coinChange([1, 2, 5], 11)
    expect(expected).toBe(3)
  })

  it('示例二', () => {
    const expected = coinChange([2], 3)
    expect(expected).toBe(-1)
  })

  it('示例三', () => {
    const expected = coinChange([1], 0)
    expect(expected).toBe(0)
  })

  it('示例四', () => {
    const expected = coinChange([2, 5, 10, 1], 27)
    expect(expected).toBe(4)
  })
})