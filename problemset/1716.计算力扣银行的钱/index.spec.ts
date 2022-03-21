import { totalMoney } from './index'

describe('1716.计算力扣银行的钱', () => {
  it('示例一', () => {
    expect(totalMoney(4)).toBe(10)
  })

  it('示例二', () => {
    expect(totalMoney(10)).toBe(37)
  })

  it('示例一', () => {
    expect(totalMoney(20)).toBe(96)
  })
})