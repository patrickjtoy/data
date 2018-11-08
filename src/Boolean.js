import { constant, typeOf } from "./_utils"

const $Boolean = function Boolean(x) {
    if (!(this instanceof $Boolean)) return new $Boolean(x)

    const _value = x

    this._getValue = () => x
}

const $Boolean$True = function $Boolean$True() {
    if (!(this instanceof $Boolean$True)) return new $Boolean$True()

    $Boolean.call(this, true)
}
$Boolean$True.prototype = Object.create($Boolean.prototype)
$Boolean$True.prototype.toString = constant("$Boolean(True)")

const $Boolean$False = function $Boolean$False() {
    if (!(this instanceof $Boolean$False)) return new $Boolean$False()

    $Boolean.call(this, false)
}
$Boolean$False.prototype = Object.create($Boolean.prototype)
$Boolean$False.prototype.toString = constant("$Boolean(False)")

// toBoolean
// =========
function $Boolean$toBoolean(jsBool) {
    return jsBool === true ? $Boolean$True() : $Boolean$False()
}
$Boolean$toBoolean["@@type"] = "toBoolean :: boolean -> $Boolean"
$Boolean$toBoolean["toString"] = constant($Boolean$toBoolean["@@type"])

// fromBoolean
// ===========
function $Boolean$fromBoolean(boolean) {
    return boolean instanceof $Boolean$True
}
$Boolean$fromBoolean["@@type"] = "fromBoolean :: $Boolean -> boolean"
$Boolean$fromBoolean["toString"] = constant($Boolean$fromBoolean["@@type"])

// toTrue
// ======
function $Boolean$toTrue() {
    return $Boolean$True()
}
$Boolean$toTrue["@@type"] = "toTrue :: $Boolean"
$Boolean$toTrue["toString"] = constant($Boolean$toTrue["@@type"])

// toFalse
// =======
function $Boolean$toFalse() {
    return $Boolean$False()
}
$Boolean$toFalse["@@type"] = "toFalse :: $Boolean"
$Boolean$toFalse["toString"] = constant($Boolean$toFalse["@@type"])

// isTrue
// ======
function $Boolean$isTrue(boolean) {
    return $Boolean$toBoolean(boolean instanceof $Boolean$True)
}
$Boolean$isTrue["@@type"] = "isTrue :: $Boolean -> $Boolean"
$Boolean$isTrue["toString"] = constant($Boolean$isTrue["@@type"])

// isFalse
// =======
function $Boolean$isFalse(boolean) {
    return $Boolean$toBoolean(boolean instanceof $Boolean$False)
}
$Boolean$isFalse["@@type"] = "isFalse :: $Boolean -> $Boolean"
$Boolean$isFalse["toString"] = constant($Boolean$isFalse["@@type"])

// not
// ===
function $Boolean$not(boolean) {
    return $Boolean$toBoolean(boolean instanceof $Boolean$False)
}
$Boolean$not["@@type"] = "not :: $Boolean -> $Boolean"
$Boolean$not["toString"] = constant($Boolean$not["@@type"])

// ifElse
// ======
function $Boolean$ifElse(p, t, f, x) {
    console.log("predicate", p)
    return $Boolean$fromBoolean(p(x)) ? t(x) : f(x)
}
$Boolean$ifElse["@@type"] =
    "ifElse :: (a -> $Boolean) -> (a -> b) -> (a -> b) -> a -> b"
$Boolean$ifElse["toString"] = constant($Boolean$ifElse["@@type"])

// caseOf
// ======
function $Boolean$caseOf(cases, someCaseFrom, value) {
    if (!cases.hasOwnProperty("defaultCase"))
        throw new TypeError(
            "Expected cases to include a default case, but none was provided."
        )

    const someCase = someCaseFrom(value)
    return cases.hasOwnProperty(someCase)
        ? cases[someCase](value)
        : cases.defaultCase(value)
}
$Boolean$caseOf["@@type"] = "caseOf :: Dict b (a -> c) -> (a -> b) -> a -> c"
$Boolean$caseOf["toString"] = constant($Boolean$caseOf["@@type"])

// areEqual
// ========
function $Boolean$areEqual(x, y) {
    return $Boolean$toBoolean(x === y)
}
$Boolean$areEqual["@@type"] = "areEqual :: a -> b -> $Boolean"
$Boolean$areEqual["toString"] = constant($Boolean$areEqual["@@type"])

// and
// ===
function $Boolean$and(x, y) {
    return $Boolean$toBoolean(
        x instanceof $Boolean$True && y instanceof $Boolean$True
    )
}
$Boolean$and["@@type"] = "and :: $Boolean -> $Boolean -> $Boolean"
$Boolean$and["toString"] = constant($Boolean$and["@@type"])

// or
// ==
function $Boolean$or(x, y) {
    return $Boolean$toBoolean(
        x instanceof $Boolean$True || y instanceof $Boolean$True
    )
}
$Boolean$or["@@type"] = "or :: $Boolean -> $Boolean -> $Boolean"
$Boolean$or["toString"] = constant($Boolean$or["@@type"])

// isTypeOf
// ========
function $Boolean$isTypeOf(type, x) {
    return $Boolean$areEqual(type, typeOf(x))
}
$Boolean$isTypeOf["@@type"] = "isTypeOf :: string -> a -> $Boolean"
$Boolean$isTypeOf["toString"] = constant($Boolean$isTypeOf["@@type"])

// isInstanceOf
// ============
function $Boolean$isInstanceOf(cls) {
    return function(x) {
        return $Boolean$toBoolean(x instanceof cls)
    }
}

// EXPORTS

const Boolean = $Boolean$toBoolean
Boolean["fromBoolean"] = $Boolean$fromBoolean
Boolean["True"] = $Boolean$True()
Boolean["False"] = $Boolean$False()
Boolean["toTrue"] = $Boolean$toTrue
Boolean["toFalse"] = $Boolean$toFalse
Boolean["isTrue"] = $Boolean$isTrue
Boolean["isFalse"] = $Boolean$isFalse
Boolean["not"] = $Boolean$not
Boolean["areEqual"] = $Boolean$areEqual
Boolean["ifElse"] = $Boolean$ifElse
Boolean["caseOf"] = $Boolean$caseOf
Boolean["and"] = $Boolean$and
Boolean["or"] = $Boolean$or
Boolean["isTypeOf"] = $Boolean$isTypeOf
Boolean["isInstanceOf"] = $Boolean$isInstanceOf
export default Boolean
