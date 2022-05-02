/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(N)
 * @return {*}
 * @param {string} logs
 */
export function reorderLogFiles(logs: string[]): string[] {
  logs.sort((a: string, b: string) => {
    const aInd = a.indexOf(' ') + 1
    const bInd = b.indexOf(' ') + 1
    const x = a[aInd]
    const y = b[bInd]
    if (!isNaN(Number(x)) && !isNaN(Number(y))) { return 0 }
    else if (!isNaN(Number(x))) { return 1 }
    else if (!isNaN(Number(y))) { return -1 }
    else {
      const aStr = a.slice(aInd)
      const bStr = b.slice(bInd)
      if (aStr === bStr)
        return a > b ? 1 : -1
      else
        return aStr > bStr ? 1 : -1
    }
  })
  return logs
}
