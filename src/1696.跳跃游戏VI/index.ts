/**
 * @description: 动态规划 + 滑动窗口 - 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {number} nums
 * @param {number} k
 */
export function maxResult(nums: number[], k: number): number {
    const n = nums.length
    const dp = new Array(n).fill(0)
    dp[0] = nums[0]

    // 这是一个递减队列，存放的是每一项前 K 个的下标
    const queue: number[] = [0]
    for (let i = 1; i < n; i++) {
        // 更新队列头
        while (queue.length && queue[0] < i - k) {
            queue.shift()
        }
        // 第 0 项就是最大值
        dp[i] = dp[queue[0]] + nums[i]
        // 更新队列尾，每次 push 前都把队列中比当前值更小的 dp 清掉，保证递减
        while (queue.length && dp[queue[queue.length - 1]] <= dp[i]) {
            queue.pop()
        }
        queue.push(i)
    }
    return dp[n - 1]
}
