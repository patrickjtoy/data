import Boolean from "./Boolean"

const $Maybe = function(x) {
    if (x === undefined || x === null) return new $Maybe$Nothing()

    return new $Maybe$Just(x)
}

const $Maybe$Nothing = function() {
    if (!(this instanceof $Maybe$Nothing)) return new $Maybe$Nothing()
}

const $Maybe$Just = function(x) {
    if (!(this instanceof $Maybe$Just)) return new $Maybe$Just(x)

    this._value = x
}

// toMaybe
// =======
function $Maybe$toMaybe(x) {
    return new $Maybe(x)
}

// fromMaybe
// =========
function $Maybe$fromMaybe(fallback) {
    return function(x) {
        return Boolean.ifElse(
            _ => $Maybe$isNothing(x),
            _ => fallback,
            _ => x._value,
            x
        )
    }
}

// isNothing
// =========
function $Maybe$isNothing(x) {
    return Boolean.isInstanceOf($Maybe$Nothing)(x)
}

// isJust
// ======
function $Maybe$isJust(x) {
    return Boolean.isInstanceOf($Maybe$Just)(x)
}

// map
// ===
function $Maybe$map(fn) {
    return function(x) {
        return Boolean.ifElse(
            _ => $Maybe$isNothing(x),
            _ => new $Maybe$Nothing(),
            _ => new $Maybe$Just(fn(x._value)),
            x
        )
    }
}

// EXPORTS

const Maybe = $Maybe$toMaybe

// Qualified
Maybe["fromMaybe"] = $Maybe$fromMaybe
Maybe["isNothing"] = $Maybe$isNothing
Maybe["isJust"] = $Maybe$isJust
Maybe["map"] = $Maybe$map
export default Maybe

// Non-qualified
export {
    $Maybe$toMaybe as toMaybe,
    $Maybe$fromMaybe as fromMaybe,
    $Maybe$isNothing as isNothing,
    $Maybe$isJust as isJust,
    $Maybe$map as map
}
