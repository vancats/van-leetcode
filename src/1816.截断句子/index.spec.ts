import { truncateSentence } from '.'

describe('1816.截断句子', () => {
  it('示例一', () => {
    expect(truncateSentence('Hello how are you Contestant', 4)).toBe('Hello how are you')
  })

  it('示例二', () => {
    expect(truncateSentence('What is the solution to this problem', 4)).toBe('What is the solution')
  })

  it('示例三', () => {
    expect(truncateSentence('chopper is not a tanuki', 5)).toBe('chopper is not a tanuki')
  })
})
