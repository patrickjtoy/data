import { curry, constant } from "./_utils"
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

List.prototype.toString = function(count) {
    const c = count === undefined ? 0 : count
    const h = this._getHead()
    const t = this._getTail()

    if (t === Nil) return `${h})`
    return c === 0
        ? `List(${h}, ${t.toString(c + 1)}`
        : `${h}, ${t.toString(c + 1)}`
}

// toList
// ======
function $List$toList(...xs) {
    return new List(xs)
}
$List$toList["@@type"] = "toList :: Array a -> List a"
$List$toList["toString"] = constant($List$toList["@@type"])

// fromList
// ========
function $List$fromList(xs) {
    return $List$foldl((acc, x) => acc.concat([x]), [], xs)
}
$List$fromList["@@type"] = "fromList :: List a -> Array a"
$List$fromList["toString"] = constant($List$fromList["@@type"])

// isList
// ======
function $List$isList(value) {
    return Boolean(value instanceof List)
}
$List$isList["@@type"] = "isList :: a -> Boolean"
$List$isList["toString"] = constant($List$isList["@@type"])

// isEmpty
// =======
function $List$isEmpty(xs) {
    return Boolean($List$head(xs) === Nil)
}
$List$isEmpty["@@type"] = "isEmpty :: List a -> boolean"
$List$isEmpty["toString"] = constant($List$isEmpty["@@type"])

// lengthOf
// ========
function $List$lengthOf(xs) {
    return $List$foldl((acc, _) => acc + 1, 0, xs)
}
$List$lengthOf["@@type"] = "lengthOf :: List a -> number"
$List$lengthOf["toString"] = constant($List$lengthOf["@@type"])

// head
// ====
function $List$head(xs) {
    return xs._getHead()
}
$List$head["@@type"] = "head :: List a -> ?a"
$List$head["toString"] = constant($List$head["@@type"])

// tail
// ====
function $List$tail(xs) {
    return xs._getTail()
}
$List$tail["@@type"] = "tail :: List a -> List a"
$List$tail["toString"] = constant($List$tail["@@type"])

// foldl
// =====
function $List$foldl(f, x, xs) {
    // Empty List
    if ($List$head(xs) === Nil) return x

    // Single element List
    if ($List$tail(xs) === Nil) return f(x, $List$head(xs))

    // Multi element List
    return $List$foldl(f, f(x, $List$head(xs)), $List$tail(xs))
}
$List$foldl["@@type"] = "foldl :: (a -> b -> b) -> b -> List a -> b"
$List$foldl["toString"] = constant($List$foldl["@@type"])

// foldr
// =====
function $List$foldr(f, x, xs) {
    // Empty List
    if ($List$head(xs) === Nil) return x

    // Single element List
    if ($List$tail(xs) === Nil) return f($List$head(xs), x)

    // Multi element List
    return $List$reverse($List$foldl((acc, y) => f(y, acc), x, xs))
}
$List$foldr["@@type"] = "foldr :: (a -> b -> b) -> b -> List a -> b"
$List$foldr["toString"] = constant($List$foldr["@@type"])

// areEqual
// ========
function $List$areEqual(xs, ys) {
    return caseOf(
        {
            [[0, 0]]: Boolean.toTrue,
            [[1, 1]]: _ => Boolean.areEqual($List$head(xs), $List$head(ys)),
            defaultCase: _ =>
                ifElse(
                    _ =>
                        Boolean.areEqual(
                            $List$lengthOf(xs),
                            $List$lengthOf(ys)
                        ),
                    _ =>
                        Boolean.and(
                            Boolean.areEqual($List$head(xs), $List$head(ys)),
                            areEqual($List$tail(xs), $List$tail(ys))
                        ),
                    Boolean.toFalse,
                    Nil
                )
        },
        _ => [$List$lengthOf(xs), $List$lengthOf(ys)],
        Nil
    )
}
$List$areEqual["@@type"] = "areEqual :: List a -> List b -> Boolean"
$List$areEqual["toString"] = constant($List$areEqual["@@type"])

// cons
// ====
function $List$cons(x, xs) {
    return ifElse(isEmpty, _ => $List$toList(x), _ => $List$toList(x, xs), xs)
}
$List$cons["@@type"] = "cons :: a -> List a -> List a"
$List$cons["toString"] = constant($List$cons["@@type"])

// map
// ===
function $List$map(f, xs) {
    return $List$foldr((x, acc) => $List$cons(f(x), acc), $List$toList(), xs)
}
$List$map["@@type"] = "map :: (a -> b) -> List a -> List b"
$List$map["toString"] = constant($List$map["@@type"])

// filter
// ======
function $List$filter(p, xs) {
    return $List$foldr(
        (x, acc) => (p(x) === true ? $List$cons(x, acc) : acc),
        $List$toList(),
        xs
    )
}
$List$filter["@@type"] = "filter :: (a -> Boolean) -> List a -> List a"
$List$filter["toString"] = constant($List$filter["@@type"])

// reverse
// =======
function $List$reverse(xs) {
    return $List$foldl((acc, x) => $List$cons(x, acc), $List$toList(), xs)
}
$List$reverse["@@type"] = "reverse :: List a -> List a"
$List$reverse["toString"] = constant($List$reverse["@@type"])

// every
// ========
function $List$every(p, xs) {
    return $List$foldl(
        (acc, x) =>
            ifElse(Boolean.isFalse, Boolean.toFalse, constant(p(x)), acc),
        True,
        xs
    )
}
$List$every["@@type"] = "every :: (a -> Boolean) -> List a -> Boolean"
$List$every["toString"] = constant($List$every["@@type"])

// elem
// ====
function $List$elem(x, xs) {
    return $List$foldl(
        (acc, y) =>
            ifElse(Boolean.areEqual(x), Boolean.toTrue, constant(acc), y),
        False,
        xs
    )
}
$List$elem["@@type"] = "elem :: a -> List a -> Boolean"
$List$elem["toString"] = constant($List$elem["@@type"])

// EXPORTS

const toList = $List$toList
const fromList = curry($List$fromList)
const isList = curry($List$isList)
const isEmpty = curry($List$isEmpty)
const areEqual = curry($List$areEqual)
const head = curry($List$head)
const tail = curry($List$tail)
const foldl = curry($List$foldl)
const foldr = curry($List$foldr)
const lengthOf = curry($List$lengthOf)
const cons = curry($List$cons)
const map = curry($List$map)
const filter = curry($List$filter)
const reverse = curry($List$reverse)
const every = curry($List$every)
const elem = curry($List$elem)

// Qualified
Object.entries({
    fromList,
    isList,
    isEmpty,
    areEqual,
    head,
    tail,
    foldl,
    foldr,
    lengthOf,
    cons,
    map,
    filter,
    reverse,
    every,
    elem
}).forEach(([key, value]) => (toList[key] = value))
export default toList

// Non-qualified
export {
    toList,
    fromList,
    isList,
    isEmpty,
    areEqual,
    head,
    tail,
    foldl,
    foldr,
    lengthOf,
    cons,
    map,
    filter,
    reverse,
    every,
    elem
}
