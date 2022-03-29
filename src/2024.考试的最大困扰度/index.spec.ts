import { maxConsecutiveAnswers } from "."

describe('2024.考试的最大困扰度', () => {
  it('示例一', () => {
    expect(maxConsecutiveAnswers('TTFF', 2)).toBe(4)
  })

  it('示例一', () => {
    expect(maxConsecutiveAnswers('TFFT', 1)).toBe(3)
  })

  it('示例一', () => {
    expect(maxConsecutiveAnswers('TTFTTFTT', 1)).toBe(5)
  })
})