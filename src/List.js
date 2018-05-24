// module List

import Boolean, { True, False, ifElse, caseOf } from "./Boolean"

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

// toArray :: List a -> Array a
const fromList = xs => foldl((acc, x) => acc.concat([x]), [], xs)

// isList :: a -> Boolean
const isList = value => Boolean(value instanceof List)

// isEmpty :: List a -> boolean
const isEmpty = xs => Boolean(xs._getHead() === Nil)

// lengthOf :: List a -> number
const lengthOf = xs => foldl((acc, _) => acc + 1, 0, xs)

// head :: List a -> ?a
const head = xs => xs._getHead()

// tail :: List a -> List a
const tail = xs => xs._getTail()

// foldl :: (a -> b -> b) -> b -> List a -> b
function foldl(f, x, xs) {
    // Empty List
    if (xs._getHead() === Nil) return x

    // Single element List
    if (xs._getTail() === Nil) return f(x, xs._getHead())

    // Multi element List
    return foldl(f, f(x, xs._getHead()), xs._getTail())
}

// foldr :: (a -> b -> b) -> b -> List a -> b
function foldr(f, x, xs) {
    // Empty List
    if (xs._getHead() === Nil) return x

    // Single element List
    if (xs._getTail() === Nil) return f(xs._getHead(), x)

    // Multi element List
    return reverse(foldl((acc, y) => f(y, acc), x, xs))
}

// areEqual :: List a -> List b -> Boolean
function areEqual(xs, ys) {
    return caseOf(
        {
            [[0, 0]]: Boolean.toTrue,
            [[1, 1]]: _ => Boolean.areEqual(head(xs), head(ys)),
            defaultCase: _ =>
                ifElse(
                    _ => Boolean.areEqual(lengthOf(xs), lengthOf(ys)),
                    _ =>
                        Boolean.and(
                            Boolean.areEqual(head(xs), head(ys)),
                            areEqual(tail(xs), tail(ys))
                        ),
                    Boolean.toFalse,
                    Nil
                )
        },
        _ => [lengthOf(xs), lengthOf(ys)],
        Nil
    )
}

// cons :: a -> List a -> List a
function cons(x, xs) {
    return ifElse(isEmpty, _ => toList(x), _ => toList(x, xs), xs)
}

// map :: (a -> b) -> List a -> List b
function map(f, xs) {
    return foldr((x, acc) => cons(f(x), acc), toList(), xs)
}

// filter :: (a -> Boolean) -> List a -> List a
function filter(p, xs) {
    return foldr((x, acc) => (p(x) === true ? cons(x, acc) : acc), toList(), xs)
}

// reverse :: List a -> List a
function reverse(xs) {
    return foldl((acc, x) => cons(x, acc), toList(), xs)
}

toList.foldl = foldl
toList.foldr = foldr
toList.fromList = fromList
toList.isList = isList
toList.isEmpty = isEmpty
toList.areEqual = areEqual
toList.head = head
toList.tail = tail
toList.lengthOf = lengthOf
toList.cons = cons
toList.map = map
toList.filter = filter
toList.reverse = reverse

export default toList
export {
    foldl,
    fromList,
    isList,
    isEmpty,
    areEqual,
    head,
    tail,
    lengthOf,
    cons,
    map,
    filter,
    reverse
}
