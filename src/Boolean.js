// module Boolean

const Boolean = function Boolean(x) {
    if (!(this instanceof Boolean)) return new Boolean(x)

    const _value = x

    this._getValue = () => x
}

// True :: () => Boolean
const True = function True() {
    if (!(this instanceof True)) return new True()

    Boolean.call(this, true)
}
True.prototype = Object.create(Boolean.prototype)
True.prototype.toString = function() {
    return `Boolean(True)`
}

// False :: () => Boolean
const False = function False() {
    if (!(this instanceof False)) return new False()

    Boolean.call(this, false)
}
False.prototype = Object.create(Boolean.prototype)
False.prototype.toString = function() {
    return `Boolean(False)`
}

// toBoolean :: boolean -> Boolean
const toBoolean = jsBool => (jsBool === true ? True() : False())

// fromBoolean :: Boolean -> boolean
const fromBoolean = boolean => boolean instanceof True

// isTrue :: Boolean -> Boolean
const isTrue = boolean => toBoolean(boolean instanceof True)

// isFalse :: Boolean -> Boolean
const isFalse = boolean => toBoolean(boolean instanceof False)

// ifElse :: (a -> Boolean) -> (a -> b) -> (a -> b) -> a -> b
const ifElse = (predicate, ifCase, elseCase, value) =>
    fromBoolean(predicate(value)) ? ifCase(value) : elseCase(value)

// areEqual :: a -> b -> Boolean
const areEqual = (x, y) => toBoolean(x === y)

export default toBoolean
export { fromBoolean, True, False, isTrue, isFalse, ifElse, areEqual }
