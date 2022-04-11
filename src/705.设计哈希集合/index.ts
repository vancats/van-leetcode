export class MyHashSet {
  arr: {}
  constructor() {
    this.arr = {}
  }

  add(key: number): void {
    this.arr[key] = 1
  }

  remove(key: number): void {
    this.arr[key] = 0
  }

  contains(key: number): boolean {
    return this.arr[key] === 1
  }
}

/**
* Your MyHashSet object will be instantiated and called as such:
* var obj = new MyHashSet()
* obj.add(key)
* obj.remove(key)
* var param_3 = obj.contains(key)
*/
