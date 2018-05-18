// module List

import Boolean from "./Boolean"

const Nil = "Nil"

const List = function List(xs) {
    if (!(this instanceof List)) return new List(xs)

    if (xs == null) throw new TypeError("Cannot create a List of 'null'")

    let _head = Nil
    let _tail = Nil

    if (xs.length === 1) {
        _head = xs[0]
        _tail = Nil
    }

    if (xs.length > 1) {
        const t = xs.slice(1)

        _head = xs[0]
        _tail = t[0] instanceof List ? t[0] : new List(t)
    }

    this._getHead = function() {
        return _head
    }

    this._getTail = function() {
        return _tail
    }
}

List.prototype.toString = function() {
    const h = this._getHead()
    const t = this._getTail()

    if (t === Nil) return "END_LIST"
    return `List(${h}, ${t.toString()})`
}

// toList :: Array a -> List a
const toList = (...xs) => List(xs)

// fromList_ :: Array a -> List a -> Array a
const fromList_ = (acc, list) => {
    if (list._getTail() === Nil) return acc.concat([list._getHead()])
    return fromList_(acc.concat([list._getHead()]), list._getTail())
}

// toArray :: List a -> Array a
const fromList = list => fromList_([], list)

// isList :: a -> Boolean
const isList = value => Boolean(value instanceof List)

// head :: List a -> ?a
const head = list => list._getHead()

// tail :: List a -> List a
const tail = list => list._getTail()

// cons :: a -> List a -> List a
const cons = (x, list) => toList(x, list)

// isEmpty :: List a -> boolean
const isEmpty = list => list._getHead() === Nil

// length :: List a -> number
const length = list => {
    // Empty list
    if (list._getHead() === Nil) return 0

    // Non-empty list
    if (list._getTail() === Nil) return 1
    return 1 + length(list._getTail())
}

// const reverse = list => {
//     if (isEmpty(list)) return list
//     reverse(list._getTail()) `concat` List(list._getHead())
// }

export default toList
export { fromList, isList, isEmpty, head, tail, length, cons }
