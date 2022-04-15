
class NestedInteger {
  num: any
  constructor(num?) {
    this.num = num
  }

  add(elem: NestedInteger) {
    console.log('elem: ', elem)
  }
}

export function deserialize(s: string): NestedInteger {
  if (!s.startsWith('['))
    return new NestedInteger(parseInt(s))

  const stack: NestedInteger[] = []
  let num = 0
  let negative = false
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (c === '-') {
      negative = true
    }
    else if (isDigit(c)) {
      num = num * 10 + Number(c)
    }
    else if (c === '[') {
      stack.push(new NestedInteger())
    }
    else if (c === ',' || c === ']') {
      if (isDigit(s[i - 1])) {
        if (negative)
          num *= -1

        stack[stack.length - 1].add(new NestedInteger(num))
      }
      num = 0
      negative = false
      if (c === ']' && stack.length > 1) {
        const ni = stack.pop()!
        stack[stack.length - 1].add(ni)
      }
    }
  }
  return stack.pop()!
}

const isDigit = (ch) => {
  return parseFloat(ch).toString() !== 'NaN'
}
