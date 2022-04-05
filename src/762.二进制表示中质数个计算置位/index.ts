/**
 * @description: 空间复杂度 O(1) 时间复杂度 eg1  O((right−left) 根号log right eg2 O(right - left)
 * @return {*}
 * @param {number} left
 * @param {number} right
 */
export function countPrimeSetBits(left: number, right: number): number {
  let n = 0
  for (let i = left; i <= right; i++) {
    // eg1
    // if (isPrime(toBinary(i))) n++
    // eg2
    if (((1 << toBinary(i)) & 665772) !== 0) n++
  }
  return n
};

function isPrime(num): boolean {
  if (num < 2) return false
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false
  }
  return true
}

function toBinary(num: number): number {
  return num.toString(2).split('0').join('').length
}
