import Boolean from "./Boolean"

const Enum = function Enum(xs) {
    if (!(this instanceof Enum)) return new Enum(xs)

    xs.reduce((_vs, x) => {
        return Object.defineProperty(_vs, x, {
            enumerable: true,
            get() {
                return x
            },
            set() {
                throw new Error("Cannot set value of immutable Enum!")
            }
        })
    }, this)

    Object.defineProperty(this, "_get", {
        value: function(x) {
            if (!this.hasOwnProperty(x))
                throw new TypeError(
                    `Cannot get value at key ${x}. It was never set!`
                )

            return this[x]
        }
    })
}

Enum.prototype.toString = function() {
    return `Enum(${Object.values(this).join(", ")})`
}

// toEnum :: Array String -> Enum
const toEnum = (...xs) => Enum(xs)

// isEnum :: a -> Boolean
const isEnum = value => Boolean(value instanceof Enum)

// get :: String -> Enum -> String
const get = (x, enum_) => enum_._get(x)

export default toEnum
export { get, isEnum }
