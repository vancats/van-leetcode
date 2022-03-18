/**
 * @description: 快速排序 时间复杂度 O(NlgN) 空间复杂度 O(lgN) 不稳定
 * @return {*}
 * @param {number} nums
 */
export function quickSort(nums: number[]): number[] {
  return sortSubArr(nums, 0, nums.length - 1)
}
function sortSubArr(nums: number[], left: number, right: number): number[] {
  const index = partition(nums, left, right)
  if (index - 1 > left) sortSubArr(nums, left, index - 1)
  if (index < right) sortSubArr(nums, index, right)
  return nums
}
function partition(nums: number[], left: number, right: number): number {
  let pivotValue = nums[Math.floor(left + (right - left) / 2)]
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
export function mergeSort(nums: number[]): number[] {
  if (nums.length < 2) return nums
  const mid = nums.length >> 1
  const leftArr = mergeSort(nums.slice(0, mid))
  const rightArr = mergeSort(nums.slice(mid))
  nums = mergeSubArr(leftArr, rightArr)
  return nums
}

function mergeSubArr(leftArr: number[], rightArr: number[]): number[] {
  let i = 0, j = 0, result: number[] = []
  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] < rightArr[j]) result.push(leftArr[i++])
    else result.push(rightArr[j++])
  }
  if (i < leftArr.length) return result.concat(leftArr.slice(i))
  else return result.concat(rightArr.slice(j))
}


/**
 * @description: 计数排序 时间复杂度 O(N+K) 空间复杂度 O(K) 稳定
 * @return {*}
 * @param {number} nums
 */
export function countSort(nums: number[]): number[] {
  const countArr: number[] = [], result: number[] = []
  const min = Math.min.apply(null, nums)
  for (let i = 0; i < nums.length; i++) {
    if (countArr[nums[i] - min]) countArr[nums[i] - min]++
    else countArr[nums[i] - min] = 1
  }
  for (let i = 0; i < countArr.length; i++) {
    if (countArr[i]) {
      for (let j = 0; j < countArr[i]; j++) result.push(i + min)
    }
  }
  return result
}



/**
 * @description: 插入排序 时间复杂度 O(N^2) 最好情况 O(N) 稳定
 * @return {*}
 * @param {number} nums
 */
export function insertSort(nums: number[]): number[] {
  for (let i = 1; i < nums.length; i++) {
    for (let j = i; j > 0; j--) {
      if (nums[j] < nums[j - 1]) swap(nums, j - 1, j)
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
      if (nums[j] < nums[minIndex]) minIndex = j
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
    let flag: boolean = false
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        swap(nums, j, j + 1)
        flag = true
      }
    }
    // 如果 flag 为 false，则一次排序都没发生，数组有序
    if (!flag) return nums
  }
  return nums
}

function swap(nums: number[], i: number, j: number) {
  [nums[i], nums[j]] = [nums[j], nums[i]]
}
