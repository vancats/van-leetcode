import { evalRPN } from '.'

describe('150.逆波兰表达式求值', () => {
  it('示例一', () => {
    expect(evalRPN(['2', '1', '+', '3', '*'])).toBe(9)
  })

  it('示例二', () => {
    expect(evalRPN(['4', '13', '5', '/', '+'])).toBe(6)
  })

  it('示例三', () => {
    expect(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'])).toBe(22)
  })
})
