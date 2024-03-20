/**
 * @description: 时间复杂度 O(P) 空间复杂度 O(1)
 * @return {*}
 * @param {number} p
 */
export function minNonZeroProduct(p: number): number {
    if (p === 1) {
        return 1
    }
    const mod = BigInt(1e9 + 7)
    const x = fastpow(BigInt(2), BigInt(p), mod) - BigInt(1)
    const y = BigInt(1) << BigInt(p - 1)
    return Number((fastpow(x - BigInt(1), y - BigInt(1), mod) * x) % mod)
}

const fastpow = (x: bigint, n: bigint, mod: bigint): bigint => {
    let res = BigInt(1)
    while (n > BigInt(0)) {
        if (n & BigInt(1)) {
            res = (res * x) % mod
        }
        x = (x * x) % mod
        n >>= BigInt(1)
    }
    return res
}
