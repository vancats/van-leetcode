import { minDistance } from '.'

describe('72.编辑距离', () => {
  it('示例一', () => {
    expect(minDistance('horse', 'ros')).toBe(3)
  })

  it('示例二', () => {
    expect(minDistance('intention', 'execution')).toBe(5)
  })
})
