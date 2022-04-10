/**
 * @description: 快速排序 时间复杂度 O(NlgN) 空间复杂度 O(lgN) 不稳定
 * @return {*}
 * @param {number} nums
 */
export function quickSort(nums: number[], left = 0, right: number = nums.length - 1): number[] {
  const index = partition(nums, left, right)
  if (index - 1 > left)
    quickSort(nums, left, index - 1)
  if (index < right)
    quickSort(nums, index, right)
  return nums
}
function partition(nums: number[], left: number, right: number): number {
  const pivotValue = nums[Math.floor(left + (right - left) / 2)]
  while (left <= right) {
    while (nums[left] < pivotValue) left++
    while (nums[right] > pivotValue) right--
    if (left <= right) {
      swap(nums, left, right)
      left++
      right--
    }
  }
  return left
}

/**
 * @description: 归并排序 时间复杂度 O(NlgN) 空间复杂度 O(N) 稳定
 * @return {*}
 * @param {number} nums
 */
export function mergeSort(nums: number[], left = 0, right: number = nums.length - 1): number[] {
  if (left >= right)
    return nums
  const mid = (left + right) >> 1
  mergeSort(nums, left, mid)
  mergeSort(nums, mid + 1, right)

  let i = left; let j = mid + 1; let k = 0; const temp: number[] = []
  while (i <= mid || j <= right) {
    if ((j > right) || (i <= mid && nums[i] <= nums[j]))
      temp[k++] = nums[i++]
    else
      temp[k++] = nums[j++]
  }
  for (let i = left; i <= right; i++) nums[i] = temp[i - left]
  return nums
}

/**
 * @description: 计数排序 时间复杂度 O(N+K) 空间复杂度 O(K) 稳定
 * @return {*}
 * @param {number} nums
 */
export function countSort(nums: number[]): number[] {
  const countArr: number[] = []; const result: number[] = []
  const min = Math.min.apply(null, nums)
  for (let i = 0; i < nums.length; i++) {
    if (countArr[nums[i] - min])
      countArr[nums[i] - min]++
    else countArr[nums[i] - min] = 1
  }
  for (let i = 0; i < countArr.length; i++) {
    if (countArr[i])
      for (let j = 0; j < countArr[i]; j++) result.push(i + min)
  }
  return result
}

/**
 * @description: 基数排序 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 */
export function radixSort(nums: number[]): number[] {
  const len = nums.length
  if (len < 2)
    return nums
  let max = Math.max.apply(null, nums)
  let maxDigit = 1
  while (max = (Math.floor(max / 10))) maxDigit++

  let count: number[][] = []; let mod = 10; let dev = 1
  for (let i = 0; i < maxDigit; i++) {
    count = []
    for (let j = 0; j < len; j++) {
      const temp = Math.floor(nums[j] % mod * dev)
      if (count[temp])
        count[temp].push(nums[j])
      else
        count[temp] = [nums[j]]
    }
    let pos = 0
    for (let j = 0; j < count.length; j++) {
      let value: any = null
      if (count[j])
        while ((value = count[j].shift()) != null) nums[pos++] = value
    }
    mod *= 10
    dev *= 10
  }
  return nums
}
export function radixSort2(nums: number[]): number[] {
  const len = nums.length
  if (len < 2)
    return nums
  // 拿到最大值方便后续的对比
  const maxVal = Math.max.apply(null, nums)
  // 当前的位数
  let exp = 1
  // 存储修改后的值
  const buf = new Array(len).fill(0)

  // 当前位大于最大值才结束
  while (maxVal >= exp) {
    // 存放 0-9 的数字
    const cnt = new Array(10).fill(0)

    // 第一次循环记录每个数字下标的数量
    for (let i = 0; i < len; i++) {
      const digit = Math.floor(nums[i] / exp) % 10
      cnt[digit]++
    }

    // 第二次循环计算前缀和，可以理解成下标从 0 到 当前数字的数量
    for (let i = 1; i < 10; i++)
      cnt[i] += cnt[i - 1]

    // 第三次循环，为该数字前的数量可知，因此从后往前遍历
    for (let i = len - 1; i >= 0; i--) {
      const digit = Math.floor(nums[i] / exp) % 10
      // 把值放入
      buf[cnt[digit] - 1] = nums[i]
      // 存放过后，当前还剩余的数量需要减一
      cnt[digit]--
    }

    // 位数需要增大
    exp *= 10
    // 改变原数组
    nums = buf
  }
  return nums
}

/**
 * @description: 插入排序 时间复杂度 O(N^2) 最好情况 O(N) 稳定
 * @return {*}
 * @param {number} nums
 */
export function insertSort(nums: number[]): number[] {
  for (let i = 1; i < nums.length; i++) {
    for (let j = i; j > 0; j--) {
      if (nums[j] < nums[j - 1])
        swap(nums, j - 1, j)
      else break
    }
  }
  return nums
}

/**
 * @description: 选择排序 时间复杂度 O(N^2) 不稳定
 * @return {*}
 * @param {number} nums
 */
export function selectSort(nums: number[]): number[] {
  for (let i = 0; i < nums.length - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minIndex])
        minIndex = j
    }

    swap(nums, i, minIndex)
  }
  return nums
}

/**
 * @description: 冒泡排序 时间复杂度 O(N^2) 最好情况 O(N) 稳定
 * @return {*}
 * @param {number} nums
 */
export function bubbleSort(nums: number[]): number[] {
  for (let i = 0; i < nums.length - 1; i++) {
    let flag = false
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        swap(nums, j, j + 1)
        flag = true
      }
    }
    // 如果 flag 为 false，则一次排序都没发生，数组有序
    if (!flag)
      return nums
  }
  return nums
}

function swap(nums: number[], i: number, j: number) {
  [nums[i], nums[j]] = [nums[j], nums[i]]
}
