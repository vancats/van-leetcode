/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(1)
 * @return {*}
 * @param string[]
 * @param string
 */
export function isAlienSorted(words: string[], order: string): boolean {
  const temp = words.slice()
  words.sort((a, b) => {
    let i = 0
    while (a[i] && b[i]) {
      const aInd = getInd(a[i], order)
      const bInd = getInd(b[i], order)
      if (aInd > bInd)
        return 1

      else if (aInd < bInd)
        return -1
      i++
    }
    if (!a[i])
      return -1
    return 1
  })
  for (let i = 0; i < words.length; i++) {
    if (words[i] !== temp[i])
      return false
  }
  return true
}

function getInd(char: string, order: string): number {
  return order.indexOf(char)
}
