
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
