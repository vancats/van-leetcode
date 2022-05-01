import { isValid } from '.'

describe('591.标签验证器', () => {
  it('示例一', () => {
    expect(isValid('<DIV>This is the first line <![CDATA[<div>]]></DIV>')).toBe(true)
  })

  it('示例二', () => {
    expect(isValid('<DIV>>>  ![cdata[]] <![CDATA[<div>]>]]>]]>>]</DIV>')).toBe(true)
  })

  it('示例三', () => {
    expect(isValid('<A>  <B> </A>   </B>')).toBe(false)
  })

  it('示例四', () => {
    expect(isValid('<DIV>  div tag is not closed  <DIV>')).toBe(false)
  })

  it('示例五', () => {
    expect(isValid('<DIV>  unmatched <  </DIV>')).toBe(false)
  })

  it('示例六', () => {
    expect(isValid('<DIV> closed tags with invalid tag name  <b>123</b> </DIV>')).toBe(false)
  })

  it('示例七', () => {
    expect(isValid('DIV> unmatched tags with invalid tag name  </1234567890> and <CDATA[[]]>  </DIV>')).toBe(false)
  })

  it('示例八', () => {
    expect(isValid('<DIV>  unmatched start tag <B>  and unmatched end tag </C>  </DIV>')).toBe(false)
  })
})
