import { restoreIpAddresses } from '.'

describe('93.复原IP地址', () => {
  it('示例一', () => {
    expect(restoreIpAddresses('25525511135')).toStrictEqual(['255.255.11.135', '255.255.111.35'])
  })

  it('示例二', () => {
    expect(restoreIpAddresses('0000')).toStrictEqual(['0.0.0.0'])
  })

  it('示例三', () => {
    expect(restoreIpAddresses('101023')).toStrictEqual(['1.0.10.23', '1.0.102.3', '10.1.0.23', '10.10.2.3', '101.0.2.3'])
  })
})
