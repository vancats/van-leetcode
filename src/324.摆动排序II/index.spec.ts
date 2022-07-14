import { wiggleSort } from '.'

describe('324.摆动排序II', () => {
  it('示例一', () => {
    expect(wiggleSort([1, 5, 1, 1, 6, 4])).toStrictEqual([1, 6, 1, 5, 1, 4])
  })

  it('示例二', () => {
    expect(wiggleSort([1, 3, 2, 2, 3, 1])).toStrictEqual([2, 3, 1, 3, 1, 2])
  })
})
