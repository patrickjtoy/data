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

// False :: () => Boolean
const False = function False() {
    if (!(this instanceof False)) return new False()

    Boolean.call(this, false)
}
False.prototype = Object.create(Boolean.prototype)

// toBoolean :: boolean -> Boolean
const toBoolean = jsBool => (jsBool === true ? True() : False())

// fromBoolean :: Boolean -> boolean
const fromBoolean = boolean => boolean instanceof True

// isTrue :: Boolean -> Boolean
const isTrue = boolean => toBoolean(boolean instanceof True)

// isFalse :: Boolean -> Boolean
const isFalse = boolean => toBoolean(boolean instanceof False)

export default toBoolean
export { fromBoolean, True, False, isTrue, isFalse }
