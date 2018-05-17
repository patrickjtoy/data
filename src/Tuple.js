// module Tuple exposing (of, first, second, mapFirst, mapSecond)

const Tuple = function Tuple(first, second) {
    if (first == null || second == null) throw new TypeError("A minimum of two values are required.")
    if (!(this instanceof Tuple)) return new Tuple(first, second)

    // Create _values with the passed in arguments
    const _values = [first, second]

    // Return the first of the Tuple pair
    this._getFirst = function () {
        return _values[0]
    }

    // Return the second of the Tuple pair
    this._getSecond = function () {
        return _values[1]
    }
}

Tuple.prototype.toString = function () {
    const f = this.getFirst().toString()
    const s = this.getSecond().toString()
    return `Tuple(${f}, ${s})`
}

// of : a -> b -> Tuple a b
const of = (first, second) => new Tuple(first, second)

// first : Tuple a b -> a
const first = (tuple) => tuple._getFirst()

// second : Tuple a b -> b
const second = (tuple) => tuple._getSecond()

// mapFirst : (a -> b) -> Tuple a b -> Tuple b b
const mapFirst = (mapper, tuple) => of(mapper(tuple.getFirst()), tuple.getSecond())

// mapSecond : (b -> c) -> Tuple a b -> Tuple a c
const mapSecond = (mapper, tuple) => of(tuple.getFirst(), mapper(tuple.getSecond()))

export default { of, first, second, mapFirst, mapSecond }
