function $utils$log(msg, x) {
    return console.log(`${msg}: ${x.toString()}`)
}

function $utils$curry(f) {
    function _curry(...args) {
        return args.length < f.length
            ? $utils$curry(f.bind(null, ...args))
            : f.apply(null, args)
    }

    _curry.toString = function() {
        return f.toString()
    }

    return _curry
}

function $utils$identity(x) {
    return x
}

function $utils$constant(x) {
    return function() {
        return x
    }
}

function $utils$typeOf(x) {
    return typeof x
}

// EXPORTS

const curry = $utils$curry
const log = curry($utils$log)
const identity = curry($utils$identity)
const constant = curry($utils$constant)
const typeOf = curry($utils$typeOf)

export { log, curry, identity, constant, typeOf }
