import { Bank } from './index'

describe('2043.简易银行系统', () => {
  it('示例', () => {
    const bank = new Bank([10, 100, 20, 50, 30])

    const result1 = bank.withdraw(3, 10)
    expect(result1).toBe(true)
    expect(bank.accounts[3]).toBe(10)

    const result2 = bank.transfer(5, 1, 20)
    expect(result2).toBe(true)
    expect(bank.accounts[5]).toBe(10)
    expect(bank.accounts[1]).toBe(30)

    const result3 = bank.deposit(5, 20)
    expect(result3).toBe(true)
    expect(bank.accounts[5]).toBe(30)

    const result4 = bank.withdraw(10, 50)
    expect(result4).toBe(false)
  })
})
