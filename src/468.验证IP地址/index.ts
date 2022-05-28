/**
 * @description: 待定
 * @return {*}
 * @param {string} queryIP
 */
export function validIPAddress(queryIP: string): string {
  const ipv4Arr = queryIP.split('.')
  const ipv6Arr = queryIP.split(':')
  if (ipv4Arr.length === 4) {
    const reg = /^0$|^([1-9]\d{0,2})$/
    if (ipv4Arr.every(item => reg.test(item) && Number(item) < 256))
      return 'IPv4'
  }
  if (ipv6Arr.length === 8) {
    const reg = /^[0-9a-fA-F]{1,4}$/
    if (ipv6Arr.every(item => reg.test(item)))
      return 'IPv6'
  }
  return 'Neither'
}
