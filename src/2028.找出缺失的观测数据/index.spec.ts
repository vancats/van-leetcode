import { missingRolls } from './index'

describe('2028.找出缺失的观测数据', () => {
  it('示例一', () => {
    expect(missingRolls([3, 2, 4, 3], 4, 2)).toStrictEqual([6, 6])
  })
})
