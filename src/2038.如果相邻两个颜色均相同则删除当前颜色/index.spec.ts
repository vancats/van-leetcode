import { winnerOfGame } from './index'

describe('2038.如果相邻两个颜色均相同则删除当前颜色', () => {
  it('示例一', () => {
    expect(winnerOfGame('AAABABB')).toBe(true)
  })

  it('示例二', () => {
    expect(winnerOfGame('AA')).toBe(false)
  })

  it('示例三', () => {
    expect(winnerOfGame('ABBBBBBBAAA')).toBe(false)
  })
})
