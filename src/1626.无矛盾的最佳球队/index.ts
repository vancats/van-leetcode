/**
 * @description: 时间复杂度 O(N^2) 空间复杂度 O(N^2)
 * @return {*}
 * @param {number} scores
 * @param {number} ages
 */
export function bestTeamScore(scores: number[], ages: number[]): number {
    const n = scores.length
    const arr: number[][] = new Array(n).fill(0).map((_, i) => [scores[i], ages[i]])

    // 主按分数排名，次按年龄，均从小到大
    arr.sort((a, b) => {
        if (a[0] === b[0]) return a[1] - b[1]
        return a[0] - b[0]
    })
    let res = 0
    // dp[i]: 以第 i 个值为结尾的最高分数
    const dp = new Array(n).fill(0)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[j][1] <= arr[i][1]) {
                dp[i] = Math.max(dp[i], dp[j])
            }
        }
        dp[i] += arr[i][0]
        res = Math.max(res, dp[i])
    }
    return res
}
