import { validUtf8 } from './index'
describe('393.UTF-8编码验证', () => {

  it('示例一', () => {
    const arr = [197, 130, 1]
    const result = validUtf8(arr)
    expect(result).toBe(true)
  })

  it('示例二', () => {
    const arr = [235, 140, 4]
    const result = validUtf8(arr)
    expect(result).toBe(false)
  })

  it('示例三', () => {
    const arr = [255]
    const result = validUtf8(arr)
    expect(result).toBe(false)
  })

  it('示例四', () => {
    const arr = [145]
    const result = validUtf8(arr)
    expect(result).toBe(false)
  })
})