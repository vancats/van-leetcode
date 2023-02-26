/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {number} nums
 */
export function movesToMakeZigzag(nums: number[]): number {
    return Math.min(getCnt(0), getCnt(1))
    function getCnt(ind: number) {
        let cnt = 0
        for (let i = ind; i < nums.length; i += 2) {
            const prev = nums[i - 1] || Infinity
            const next = nums[i + 1] || Infinity
            cnt += Math.max(0, nums[i] - prev + 1, nums[i] - next + 1)
        }
        return cnt
    }
}
