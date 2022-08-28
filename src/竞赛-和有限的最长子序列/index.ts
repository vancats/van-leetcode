/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(N)
 * @return {*}
 * @param {*} nums
 * @param {*} queries
 */
export function answerQueries(nums: number[], queries: number[]): number[] {
  nums.sort((a, b) => a - b)
  const prefix = new Array(nums.length).fill(nums[0])
  for (let i = 1; i < nums.length; i++)
    prefix[i] = prefix[i - 1] + nums[i]

  const answers = new Array(queries.length).fill(0)
  queries.forEach((item, index) => {
    let ind = 0
    for (; ind < prefix.length; ind++)
      if (prefix[ind] > item) break

    answers[index] = ind
  })
  return answers
}
