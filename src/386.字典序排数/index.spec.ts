import { lexicalOrder } from '.'

describe('386.字典序排数', () => {
  it('示例一', () => {
    expect(lexicalOrder(2)).toStrictEqual([1, 2])
  })

  it('示例二', () => {
    expect(lexicalOrder(13)).toStrictEqual([1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9])
  })
})
