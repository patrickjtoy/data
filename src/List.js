// module List

import Boolean, { True, False, and } from "./Boolean"

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

    if (t === Nil) return `List(${h}, Nil)`
    return `List(${h}, ${t.toString()})`
}

// toList :: Array a -> List a
const toList = (...xs) => List(xs)

// fromList_ :: Array a -> List a -> Array a
const fromList_ = (xs, ys) => {
    if (ys._getTail() === Nil) return xs.concat([ys._getHead()])
    return fromList_(xs.concat([ys._getHead()]), ys._getTail())
}

// toArray :: List a -> Array a
const fromList = xs => fromList_([], xs)

// isList :: a -> Boolean
const isList = value => Boolean(value instanceof List)

// isEmpty :: List a -> boolean
const isEmpty = xs => Boolean(xs._getHead() === Nil)

// length :: List a -> number
const length = xs => {
    // Empty List
    if (xs._getHead() === Nil) return 0

    // Single element List
    if (xs._getTail() === Nil) return 1

    // Multi element List
    return 1 + length(xs._getTail())
}

// areEqual :: List a -> List b -> Boolean
const areEqual = (xs, ys) => {
    // Empty Lists
    if (xs._getHead() === Nil && ys._getHead() === Nil) return True()

    // Different length Lists
    if (length(xs) !== length(ys)) return False()

    // Single element Lists
    if (xs._getTail() === Nil || ys._getTail() === Nil)
        return Boolean(xs._getHead() === ys._getHead())

    // Multi element Lists
    return and(
        Boolean(xs._getHead() === ys._getHead()),
        areEqual(xs._getTail(), ys._getTail())
    )
}

// head :: List a -> ?a
const head = xs => xs._getHead()

// tail :: List a -> List a
const tail = xs => xs._getTail()

// cons :: a -> List a -> List a
const cons = (x, xs) => toList(x, xs)

const map = (f, xs) => {
    // Empty List
    if (xs._getHead() === Nil) return xs

    // Single element List
    if (xs._getTail() === Nil) return f(xs._getHead())

    // Multi element List
    return cons(f(xs._getHead()), map(f, xs._getTail()))
}

const filter = (p, xs) => {
    // Empty List
    if (xs._getHead() === Nil) return xs

    // Single element List
    if (xs._getTail() === Nil) return p(xs._getHead()) === true ? xs : toList()

    // Multi element List
    return p(xs._getHead()) === true
        ? cons(xs._getHead(), filter(p, xs._getTail()))
        : filter(p, xs._getTail())
}

const reverse_ = (xs, ys) => {
    // Empty list
    if (ys._getHead() === Nil) return xs

    // Single element List
    if (ys._getTail() === Nil) return cons(ys._getHead(), xs)

    // Multi element List
    return reverse_(cons(ys._getHead(), xs), ys._getTail())
}

const reverse = xs => {
    // Empty List
    if (xs._getHead() === Nil) return xs

    // Single element List
    if (xs._getTail() === Nil) return xs

    // Multi element List
    return reverse_(toList(xs._getHead()), xs._getTail())
}

export default toList
export {
    fromList,
    isList,
    isEmpty,
    areEqual,
    head,
    tail,
    length,
    cons,
    map,
    filter,
    reverse
}
