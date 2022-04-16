/**
 * @description: 时间复杂度 O(N^2) 空间复杂度 O(N)
 * @return {*}
 * @param {number} materials
 * @param {number} cookbooks
 * @param {number} attribute
 * @param {number} limit
 */
export function perfectMenu(materials: number[], cookbooks: number[][], attribute: number[][], limit: number): number {
  const n = cookbooks.length
  const res: number[][] = []
  dfs(0, materials)

  function dfs(index, materials, curRes = [0, 0]) {
    for (let i = index; i <= n; i++) {
      if (i === n || !isEnough(materials, cookbooks[i])) {
        res.push(curRes.slice())
        continue
      }
      if (i === n) continue
      const rest = restMaterials(materials.slice(), cookbooks[i])
      dfs(i + 1, rest, [curRes[0] + attribute[i][0], curRes[1] + attribute[i][1]])
    }
  }
  res.sort((a, b) => b[0] - a[0])
  for (let i = 0; i < res.length; i++)
    if (res[i][1] >= limit) return res[i][0]

  return -1
}

function isEnough(arr1, arr2) {
  return arr1.every((item, index) => item >= arr2[index])
}

function restMaterials(materials, curMaterials) {
  for (let i = 0; i < 5; i++)
    materials[i] -= curMaterials[i]

  return materials
}
