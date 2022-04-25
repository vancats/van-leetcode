# 93.复原IP地址

> 难度：中等
>
> https://leetcode-cn.com/problems/restore-ip-addresses/

## 题目

有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。

例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。
给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能的有效 IP 地址，这些地址可以通过在 s 中插入 '.' 来形成。你 不能 重新排序或删除 s 中的任何数字。你可以按 任何 顺序返回答案。

### 示例

#### 示例 1：

```
输入：s = "25525511135"
输出：["255.255.11.135","255.255.111.35"]
```

#### 示例 2：

```
输入：s = "0000"
输出：["0.0.0.0"]
```

#### 示例 3：

```
输入：s = "101023"
输出：["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
```

### 提示：

```
1 <= s.length <= 20
s 仅由数字组成
```

## 题解

```ts
/**
 * @description: 时间复杂度 待定 空间复杂度 O(H)
 * @return {*}
 * @param {string} s
 */
export function restoreIpAddresses(s: string): string[] {
  const n = s.length
  if (n < 4 || n > 12) return []
  const res: string[] = []
  dfs(s, 0, 3)
  return res

  function dfs(s: string, ind: number, cnt: number) {
    if (cnt === 0) {
      if (ind >= s.length || Number(s.slice(ind)) > 255)
        return
      if (s.length - ind > 1 && s[ind] === '0')
        return

      return res.push(s)
    }

    for (let i = 1; i < 4; i++) {
      if (Number(s.slice(ind, ind + i)) > 255) continue
      const str = `${s.slice(0, ind + i)}.${s.slice(ind + i)}`
      dfs(str, ind + i + 1, cnt - 1)
      if (s[ind] === '0') break
    }
  }
}
```
