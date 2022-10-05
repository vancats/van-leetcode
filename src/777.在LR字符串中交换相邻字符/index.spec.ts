import { canTransform } from '.'

describe('777.在LR字符串中交换相邻字符', () => {
  it('示例', () => {
    expect(canTransform('RXXLRXRXL', 'XRLXXRRLX')).toBe(true)
  })
})
