import { taskSchedulerII } from '.'

describe('2365.任务调度器II', () => {
  it('示例一', () => {
    expect(taskSchedulerII([1, 2, 1, 2, 3, 1], 3)).toBe(9)
  })

  it('示例二', () => {
    expect(taskSchedulerII([5, 8, 8, 5], 2)).toBe(6)
  })
})
