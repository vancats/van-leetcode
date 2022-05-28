import { validIPAddress } from '.'

describe('468.验证IP地址', () => {
  it('示例一', () => {
    expect(validIPAddress('172.16.254.1')).toBe('IPv4')
  })

  it('示例二', () => {
    expect(validIPAddress('2001:0db8:85a3:0:0:8A2E:0370:7334')).toBe('IPv6')
  })

  it('示例三', () => {
    expect(validIPAddress('256.256.256.256')).toBe('Neither')
  })
})
