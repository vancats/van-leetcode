import { maximumGap } from "."

describe('164.最大间距', () => {
  it('示例一', () => {
    expect(maximumGap([3, 6, 9, 1])).toBe(3)
  })

  it('示例二', () => {
    expect(maximumGap([10])).toBe(0)
  })
})