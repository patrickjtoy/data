// module List

const List = function List(xs) {
    if (!(this instanceof List)) return new List(xs)

    if (xs == null) throw new TypeError("Cannot create a List of 'null'")

    let _head = null
    let _tail = null

    if (xs.length > 0) {
        _head = xs[0]
        _tail = new List(xs.slice(1))
    }

    this._getHead = function () {
        return _head
    }

    this._getTail = function () {
        return _tail
    }
}

const of = (...xs) => List(xs)

const isEmpty = list => list._getHead() === null

const length = list => {
    if (list._getHead() === null) return 0
    if (list._getTail() === null) return 1
    return 1 + length(list._getTail())
}

export default { of, isEmpty, length }
