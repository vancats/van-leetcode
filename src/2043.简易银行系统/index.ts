export class Bank {
  accounts: number[]
  len: number
  constructor(balance: number[]) {
    this.accounts = [0].concat(balance)
    this.len = balance.length
  }

  transfer(account1: number, account2: number, money: number): boolean {
    if (account1 > this.len || account2 > this.len || this.accounts[account1] < money) return false
    this.accounts[account1] -= money
    this.accounts[account2] += money
    return true
  }

  deposit(account: number, money: number): boolean {
    if (account > this.len) return false
    this.accounts[account] += money
    return true
  }

  withdraw(account: number, money: number): boolean {
    if (account > this.len || this.accounts[account] < money) return false
    this.accounts[account] -= money
    return true
  }
}

/**
* Your Bank object will be instantiated and called as such:
* var obj = new Bank(balance)
* var param_1 = obj.transfer(account1,account2,money)
* var param_2 = obj.deposit(account,money)
* var param_3 = obj.withdraw(account,money)
*/