import Boolean, { ifElse, not } from "./Boolean"
import List from "./List"
import { constant, curry, log, typeOf } from "./_utils"

const Enum = function Enum(xs) {
    if (!(this instanceof Enum)) return new Enum(xs)

    const _enum = this

    ifElse(
        _ => List.every(Boolean.isTypeOf("string"), xs),
        _ => {
            List.foldl(
                (_, x) => {
                    return Object.defineProperty(_enum, x, {
                        enumerable: true,
                        get() {
                            return x
                        },
                        set() {
                            throw new Error(
                                "Cannot set value of immutable Enum!"
                            )
                        }
                    })
                },
                _enum,
                xs
            )
        },
        () => {
            throw new TypeError("Enum values must all be strings!")
        },
        xs
    )
}

Enum.prototype.toString = function() {
    return `Enum(${Object.values(this).join(", ")})`
}

// toEnum
// ======
function $Enum$toEnum(...xs) {
    return new Enum(List(...xs))
}
$Enum$toEnum["@@type"] = "toEnum :: Array string -> Enum"
$Enum$toEnum["toString"] = constant($Enum$toEnum["@@type"])

// isEnum
// ======
function $Enum$isEnum(x) {
    return Boolean(x instanceof Enum)
}
$Enum$isEnum["@@type"] = "isEnum :: a -> Boolean"
$Enum$isEnum["toString"] = constant($Enum$isEnum["@@type"])

// EXPORTS

const toEnum = curry($Enum$toEnum)
const isEnum = curry($Enum$isEnum)

// Qualified
Object.entries({ isEnum }).forEach(([key, value]) => (toEnum[key] = value))
export default toEnum

// Non-qualified
export { toEnum, isEnum }
