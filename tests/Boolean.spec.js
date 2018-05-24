import { describe, assert, expect } from "./_testRunner"
import Boolean, {
    fromBoolean,
    True,
    False,
    toTrue,
    toFalse,
    isTrue,
    isFalse,
    ifElse,
    caseOf,
    areEqual,
    and,
    or
} from "./Boolean"

describe("Boolean", () => {
    describe("it works with JS booleans", () => {
        expect(isTrue, Boolean(true))
        expect(isFalse, Boolean(false))
    })

    describe("it works with Boolean's constructors", () => {
        expect(isTrue, True)
        expect(isFalse, False)
    })

    describe("it extracts JS boolean", () => {
        assert(true, fromBoolean(True))
        assert(false, fromBoolean(False))
    })

    describe("it follows the if path", () => {
        const result = ifElse(isTrue, fromBoolean, () => false, True)
        assert(true, result)
    })

    describe("it follows the else path", () => {
        const result = ifElse(isTrue, () => true, fromBoolean, False)
        assert(false, result)
    })

    describe("it processes the correct case", () => {
        const result = caseOf(
            { 3: toTrue, defaultCase: toFalse },
            xs => xs.length,
            [1, 2, 3]
        )
        expect(isTrue, result)
    })

    describe("it can compare two Booleans", () => {
        expect(isTrue, and(True, True))
        expect(isFalse, and(True, False))
        expect(isTrue, or(True, False))
        expect(isFalse, or(False, False))
    })
})
