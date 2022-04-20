import { lengthLongestPath } from '.'

describe('388.文件的最长绝对路径', () => {
  it('示例一', () => {
    expect(lengthLongestPath('dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext')).toBe(20)
  })

  it('示例二', () => {
    expect(lengthLongestPath('dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext')).toBe(32)
  })

  it('示例三', () => {
    expect(lengthLongestPath('a')).toBe(0)
  })

  it('示例四', () => {
    expect(lengthLongestPath('file1.txt\nfile2.txt\nlongfile.txt')).toBe(12)
  })

  it('示例五', () => {
    expect(lengthLongestPath('a\n\tb\n\t\tc.txt\n\taaaa.txt')).toBe(10)
  })
})
