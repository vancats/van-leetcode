/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {string} answerKey
 * @param {number} k
 */
export function maxConsecutiveAnswers(answerKey: string, k: number): number {
  return Math.max(maxAnswers(answerKey, k, 'F'), maxAnswers(answerKey, k, 'T'))
}

function maxAnswers(answerKey: string, k: number, ch: string): number {
  let res = 0; let num = 0
  for (let left = 0, right = 0; right < answerKey.length; right++) {
    num += answerKey[right] !== ch ? 1 : 0
    while (num > k)
      num -= answerKey[left++] !== ch ? 1 : 0

    res = Math.max(res, right - left + 1)
  }
  return res
}
