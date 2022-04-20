/**
 * @description: 空间复杂度 O(S) 时间复杂度 O(S) S 单词数
 * @return {*}
 * @param {string} sentence
 */
export function toGoatLatin(sentence: string): string {
  const arr: string[] = sentence.split(' ')
  const helpers = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  for (let i = 0; i < arr.length; i++) {
    if (helpers.includes(arr[i][0]))
      arr[i] += 'ma'

    else
      arr[i] = `${arr[i].slice(1) + arr[i][0]}ma`

    arr[i] += 'a'.repeat(i + 1)
  }
  return arr.join(' ')
}
