/**
 * @description: 时间复杂度 O(NlgN) 空间复杂度 O(N^2)
 * @return {*}
 * @param {number} nums
 */
export function countSmaller(nums: number[]): number[] {
  let counts: number[] = new Array(nums.length).fill(0)

  // 重新构造数组，扩展储存数据下标
  let arr = nums.map((item, index) => [item, index])
  mergeSort(arr, counts, 0, arr.length - 1)
  return counts
}

function mergeSort(arr: number[][], counts: number[], left: number, right: number) {

  // 正常归并操作
  if (left >= right) return
  let mid = (left + right) >> 1
  mergeSort(arr, counts, left, mid)
  mergeSort(arr, counts, mid + 1, right)

  // temp 是二维数组
  let i = left, j = mid + 1, k = left, temp: number[][] = []
  while (i <= mid || j <= right) {
    // 注意是大于不是大于等于
    if (j > right || (i <= mid && arr[i][0] > arr[j][0])) {
      // 左边数组 push 进入的时候，使用前面扩展的数组下表进行操作
      counts[arr[i][1]] += (right - j + 1)
      temp[k++] = arr[i++]
    } else {
      temp[k++] = arr[j++]
    }
  }
  // 一定要记得排序！！！（老忘记）
  for (let i = left; i <= right; i++) arr[i] = temp[i]
}
