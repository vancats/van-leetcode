/**
 * @description: 时间复杂度 O(log max(tx, ty)) 空间复杂度 O(1)
 * @return {*}
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 */
export function reachingPoints(sx: number, sy: number, tx: number, ty: number): boolean {
  while (tx > sx && ty > sy && tx !== ty) {
    if (tx > ty) {
      tx %= ty
    } else {
      ty %= tx
    }
  }
  if (sx === tx && sy === ty) {
    return true
  } else if (tx === sx) {
    return ty > sy && (ty - sy) % sx === 0
  } else if (ty === sy) {
    return tx > sx && (tx - sx) % sy === 0
  } else {
    return false
  }
}
