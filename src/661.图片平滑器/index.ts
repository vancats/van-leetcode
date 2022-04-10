/**
 * @description: 时间复杂度 O(N^2) 空间复杂度 O(N^2)
 * @return {*}
 * @param {number} img
 */
export function imageSmoother(img: number[][]): number[][] {
  const arr: number[][] = new Array(img.length).fill(0).map(() => [])
  for (let i = 0; i < img.length; i++) {
    for (let j = 0; j < img[0].length; j++) {
      let ans = 0; let num = 0
      for (let m = i - 1; m <= i + 1; m++) {
        for (let n = j - 1; n <= j + 1; n++) {
          if (m >= 0 && m < img.length && n >= 0 && n < img[0].length) {
            num++
            ans += img[m][n]
          }
        }
      }
      arr[i][j] = Math.floor(ans / num)
    }
  }
  return arr
}
