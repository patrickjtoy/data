// module Boolean

const Boolean = function Boolean(x) {
    if (!(this instanceof Boolean)) return new Boolean(x)

    const _value = x

    this._getValue = () => x
}

const True = function True() {
    if (!(this instanceof True)) return new True()
}
True.prototype = Boolean(true)

const False = function False() {
    if (!(this instanceof False)) return new False()
}
False.prototype = Boolean(false)

// Boolean.of :: boolean -> Boolean
Boolean.of = boolean => (boolean === true ? True() : False())

// isTrue :: Boolean -> boolean
const isTrue = boolean => boolean instanceof Boolean && boolean instanceof True

// isFalse :: Boolean -> boolean
const isFalse = boolean =>
    boolean instanceof Boolean && boolean instanceof False

export default Boolean
export { True, False, isTrue, isFalse }
