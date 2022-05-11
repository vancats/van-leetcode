import { minDeletionSize } from '.'

describe('944.删列造序', () => {
  it('示例一', () => {
    expect(minDeletionSize(['a', 'b'])).toBe(0)
  })

  it('示例二', () => {
    expect(minDeletionSize(['cba', 'daf', 'ghi'])).toBe(1)
  })

  it('示例三', () => {
    expect(minDeletionSize(['zyx', 'wvu', 'tsr'])).toBe(3)
  })
})
