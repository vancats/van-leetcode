/**
 * The rand7() API is already defined for you.
 * function rand7(): number {}
 * @return a random integer in the range 1 to 7
 */

export function rand10_A(): number {
  let first: number, second: number
  while ((first = rand7()) > 6)
    continue
  while ((second = rand7()) > 5)
    continue
  return (first & 1) === 1 ? second : second + 5
}

export function rand10_B(): number {
  while (1) {
    let cnt = (rand7() - 1) * 7 + rand7()
    if (cnt <= 40)
      return cnt % 10 + 1
    let a = cnt - 40
    cnt = (a - 1) * 7 + rand7()
    if (cnt <= 60)
      return cnt % 10 + 1
    a = cnt - 60
    cnt = (a - 1) * 7 + rand7()
    if (cnt <= 20)
      return cnt % 10 + 1
  }
  return 1
}

function rand7(): number { return 1 }
