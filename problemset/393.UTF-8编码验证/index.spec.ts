import { validUtf8 } from './index'
describe('393.UTF-8编码验证', () => {

  it('示例一', () => {
    const arr = [197, 130, 1]
    const expected = validUtf8(arr)
    expect(expected).toBe(true)
  })

  it('示例二', () => {
    const arr = [235, 140, 4]
    const expected = validUtf8(arr)
    expect(expected).toBe(false)
  })

  it('示例三', () => {
    const arr = [255]
    const expected = validUtf8(arr)
    expect(expected).toBe(false)
  })

  it('示例四', () => {
    const arr = [145]
    const expected = validUtf8(arr)
    expect(expected).toBe(false)
  })
})