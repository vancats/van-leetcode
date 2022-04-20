import { toGoatLatin } from '.'

describe('824.山羊拉丁文', () => {
  it('示例一', () => {
    expect(toGoatLatin('I speak Goat Latin')).toBe('Imaa peaksmaaa oatGmaaaa atinLmaaaaa')
  })

  it('示例二', () => {
    expect(toGoatLatin('The quick brown fox jumped over the lazy dog')).toBe('heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa')
  })
})
