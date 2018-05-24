// module Boolean

const Boolean = function Boolean(x) {
    if (!(this instanceof Boolean)) return new Boolean(x)

    const _value = x

    this._getValue = () => x
}

// True :: () => Boolean
const _True = function _True() {
    if (!(this instanceof _True)) return new _True()

    Boolean.call(this, true)
}
_True.prototype = Object.create(Boolean.prototype)
_True.prototype.toString = function() {
    return `Boolean(True)`
}

// False :: () => Boolean
const _False = function _False() {
    if (!(this instanceof _False)) return new _False()

    Boolean.call(this, false)
}
_False.prototype = Object.create(Boolean.prototype)
_False.prototype.toString = function() {
    return `Boolean(False)`
}

const True = _True()
const False = _False()

// toBoolean :: boolean -> Boolean
const toBoolean = jsBool => (jsBool === true ? True : False)

// fromBoolean :: Boolean -> boolean
const fromBoolean = boolean => boolean instanceof _True

// toTrue :: Boolean
const toTrue = _True

// toFalse :: Boolean
const toFalse = _False

// isTrue :: Boolean -> Boolean
const isTrue = boolean => toBoolean(boolean instanceof _True)

// isFalse :: Boolean -> Boolean
const isFalse = boolean => toBoolean(boolean instanceof _False)

// ifElse :: (a -> Boolean) -> (a -> b) -> (a -> b) -> a -> b
const ifElse = (predicate, ifCase, elseCase, value) =>
    fromBoolean(predicate(value)) ? ifCase(value) : elseCase(value)

const caseOf = (cases, someCaseFrom, value) => {
    if (!cases.hasOwnProperty("defaultCase"))
        throw new TypeError(
            "Expected cases to include a default case, but none was provided."
        )

    const someCase = someCaseFrom(value)
    return cases.hasOwnProperty(someCase)
        ? cases[someCase](value)
        : cases.defaultCase(value)
}

// areEqual :: a -> b -> Boolean
const areEqual = (x, y) => toBoolean(x === y)

// and :: Boolean -> Boolean -> Boolean
const and = (x, y) => toBoolean(x instanceof _True && y instanceof _True)

// or :: Boolean -> Boolean -> Boolean
const or = (x, y) => toBoolean(x instanceof _True || y instanceof _True)

toBoolean.fromBoolean = fromBoolean
toBoolean.areEqual = areEqual
toBoolean.True = True
toBoolean.False = False
toBoolean.toTrue = toTrue
toBoolean.toFalse = toFalse
toBoolean.isTrue = isTrue
toBoolean.isFalse = isFalse
toBoolean.ifElse = ifElse
toBoolean.caseOf = caseOf
toBoolean.areEqual = areEqual
toBoolean.and = and
toBoolean.or = or

export default toBoolean
export {
    fromBoolean,
    True,
    False,
    toTrue,
    toFalse,
    isTrue,
    isFalse,
    ifElse,
    caseOf,
    areEqual,
    and,
    or
}
