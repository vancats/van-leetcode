# 面试题10.02.变位词组

> 难度：中等

## 题目

编写一种方法，对字符串数组进行排序，将所有变位词组合在一起。变位词是指字母相同，但排列不同的字符串。

注意：本题相对原题稍作修改

### 示例:

```
输入: ["eat", "tea", "tan", "ate", "nat", "bat"],
输出:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
```

### 说明：

```
所有输入均为小写字母。
不考虑答案输出的顺序。
```

## 题解

```ts
/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {string} strs
 */
export function groupAnagrams(strs: string[]): string[][] {
    const map: Map<string, string[]> = new Map()
    strs.forEach(item => {
        const str = item.split('').sort().join('')
        map.set(str, [...(map.get(str) || []), item])
    })
    const res: string[][] = []
    for (const arr of map.values()) {
        res.push(arr)
    }
    return res
}
```
