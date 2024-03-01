
/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {number} nums
 */
export function validPartition(nums: number[]): boolean {
    const dp: boolean[] = new Array(nums.length + 1).fill(false)
    dp[0] = true
    dp[1] = false
    dp[2] = nums[0] === nums[1]
    for (let i = 3; i <= nums.length; i++) {
        const lastTwo = nums[i - 3]; const last = nums[i - 2]; const current = nums[i - 1]
        if (current === last) {
            dp[i] ||= dp[i - 2]
            if (nums[i - 1] === lastTwo) {
                dp[i] ||= dp[i - 3]
            }
        }
        if ((current - last === 1) && (last - lastTwo === 1)) {
            dp[i] ||= dp[i - 3]
        }
    }
    return dp[nums.length]
}
