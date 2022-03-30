import { busiestServers } from "."

describe('1606.找到处理最多请求的服务器', () => {
  it('示例一', () => {
    expect(busiestServers(3, [1, 2, 3, 4, 5], [5, 2, 3, 3, 3])).toStrictEqual([1])
  })

  it('示例二', () => {
    expect(busiestServers(3, [1, 2, 3, 4], [1, 2, 1, 2])).toStrictEqual([0])
  })

  it('示例三', () => {
    expect(busiestServers(3, [1, 2, 3], [10, 12, 11])).toStrictEqual([0, 1, 2])
  })

  it('示例四', () => {
    expect(busiestServers(3, [1, 2, 3, 4, 8, 9, 10], [5, 2, 10, 3, 1, 2, 2])).toStrictEqual([1])
  })

  it('示例五', () => {
    expect(busiestServers(1, [1], [1])).toStrictEqual([0])
  })
})
