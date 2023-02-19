/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {number} nums
 */
export function nextPermutation(nums: number[]): void {
    let l = -1
    let r = nums.length
    // 找到最后一个 nums[i] < nums[i + 1] 的下标
    for (let i = 0; i < r - 1; i++)
        if (nums[i] < nums[i + 1]) l = i

    // 如果没找到，那么代表是递减序列，直接翻转
    if (l === -1) {
        nums.reverse()
        return
    }

    // 从后往前找到第一个大于 nums[l] 的下标
    for (let i = r - 1; i >= 0; i--) {
        if (nums[i] > nums[l]) {
            // 交换并退出
            [nums[l], nums[i]] = [nums[i], nums[l]]
            break
        }
    }

    // 易得 l 后的序列必为倒序，直接把 l 后面的所有内容进行翻转即可
    while (++l < r--)
        [nums[l], nums[r]] = [nums[r], nums[l]]
}
