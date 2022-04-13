# 535.TinyURL的加密与解密

> 难度：中等
>
> https://leetcode-cn.com/problems/encode-and-decode-tinyurl/

## 题目

TinyURL是一种URL简化服务， 比如：当你输入一个URL https://leetcode.com/problems/design-tinyurl 时，它将返回一个简化的URL http://tinyurl.com/4e9iAk.

### 要求：

设计一个 TinyURL 的加密 encode 和解密 decode 的方法。你的加密和解密算法如何设计和运作是没有限制的，你只需要保证一个URL可以被加密成一个TinyURL，并且这个TinyURL可以用解密方法恢复成原本的URL。

## 题解

```typescript
const map = new Map()
export function encode(longUrl: string): string {
  let s = ''
  do {
    s = randomString(5)
    console.log(s)
  } while (map.has(s))
  map.set(s, longUrl)
  return s
}

export function decode(shortUrl: string): string {
  return map.get(shortUrl)
}

function randomString(n: number): string {
  let s = ''
  for (let i = 0; i < n; i++)
    s += createString()

  return s
}

function createString() {
  const ind = Math.random() * 62
  if (ind < 10)
    return String.fromCharCode(ind + 48)

  if (ind < 36)
    return String.fromCharCode(ind + 55)

  return String.fromCharCode(ind + 61)
}
```
