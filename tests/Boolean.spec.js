import { describe, assert, expect } from "./_testRunner"
import Boolean, {
    True,
    False,
    fromBoolean,
    isTrue,
    isFalse,
    ifElse,
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
        expect(isTrue, True())
        expect(isFalse, False())
    })

    describe("it extracts JS boolean", () => {
        assert(true, fromBoolean(True()))
        assert(false, fromBoolean(False()))
    })

    describe("it follows the if path", () => {
        const result = ifElse(isTrue, fromBoolean, () => false, True())
        assert(true, result)
    })

    describe("it follows the else path", () => {
        const result = ifElse(isTrue, () => true, fromBoolean, False())
        assert(false, result)
    })

    describe("it can compare two Booleans", () => {
        expect(isTrue, and(True(), True()))
        expect(isFalse, and(True(), False()))
        expect(isTrue, or(True(), False()))
        expect(isFalse, or(False(), False()))
    })
})
