export class Heap<T> {
    data: T[]
    compare: Function
    size: number
    constructor(compare: (val1: T, val2: T) => boolean) {
        this.data = []
        this.size = 0
        this.compare = compare
    }

    get top(): T | undefined {
        return this.size === 0 ? undefined : this.data[0]
    }

    push(val: T) {
        this.data.push(val)
        this._shiftUp(this.size++)
        return this.size
    }

    pop(): T | null {
        if (!this.size)
            return null
        // 堆顶元素出堆，尾部元素放到顶部
        this._swap(0, --this.size)
        this._shiftDown(0)
        return this.data.pop()!
    }

    // 向上整理
    _shiftUp(index: number) {
        while (this._parent(index) >= 0 && this.compare(this.data[index], this.data[this._parent(index)])) {
            this._swap(index, this._parent(index))
            index = this._parent(index)
        }
    }

    // 向下整理
    _shiftDown(index: number) {
        while (this._child(index) < this.size) {
            let child = this._child(index)

            // 选出两个子节点中的符合值赋值给 child
            if (child + 1 < this.size && this.compare(this.data[child + 1], this.data[child]))
                child = child + 1

            if (this.compare(this.data[index], this.data[child]))
                break
            this._swap(index, child)
            index = child
        }
    }

    _parent(index: number) {
        return index - 1 >> 1
    }

    _child(index: number) {
        return (index << 1) + 1
    }

    _swap(ind1: number, ind2: number) {
        [this.data[ind1], this.data[ind2]] = [this.data[ind2], this.data[ind1]]
    }
}
