import { numTilings } from '.'

describe('790.多米诺和托米诺平铺', () => {
  it('示例一', () => {
    expect(numTilings(3)).toBe(5)
  })

  it('示例二', () => {
    expect(numTilings(1)).toBe(1)
  })
})
