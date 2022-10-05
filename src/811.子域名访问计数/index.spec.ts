import { subdomainVisits } from '.'

describe('811.子域名访问计数', () => {
  it('示例一', () => {
    expect(subdomainVisits(['9001 discuss.leetcode.com'])).toStrictEqual(['9001 discuss.leetcode.com', '9001 leetcode.com', '9001 com'])
  })

  it('示例二', () => {
    expect(subdomainVisits(['900 google.mail.com', '50 yahoo.com', '1 intel.mail.com', '5 wiki.org'])).toStrictEqual(['900 google.mail.com', '901 mail.com', '951 com', '50 yahoo.com', '1 intel.mail.com', '5 wiki.org', '5 org'])
  })
})
