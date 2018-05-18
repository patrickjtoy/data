import Boolean from "./Boolean"

const Number = function Number(x) {
    if (!(this instanceof Number)) return new Number(x)

    if (isNaN(x)) throw new TypeError(`Value ${x} is not a number!`)

    const _value = x

    this._getValue = () => x
}

const Int = function Int(x) {
    if (!(this instanceof Int)) return new Int(x)

    if (Math.floor(x) !== x)
        throw new TypeError(`Value ${x} is not an integer!`)

    Number.call(this, x)
}
Int.prototype = Object.create(Number.prototype)

const Float = function Float(x) {
    if (!(this instanceof Float)) return new Float(x)

    Number.call(this, x)
}
Float.prototype = Object.create(Number.prototype)

const isInt = value => Boolean(value instanceof Number && value instanceof Int)

const isFloat = value =>
    Boolean(value instanceof Number && value instanceof Float)

export { Int, Float, isInt, isFloat }
