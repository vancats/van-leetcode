import { uniqueMorseRepresentations } from "."

describe('804.唯一摩尔斯密码词', () => {
  it('示例一', () => {
    expect(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"])).toBe(2)
  })

  it('示例二', () => {
    expect(uniqueMorseRepresentations(["a"])).toBe(1)
  })
})
