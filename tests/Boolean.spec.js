import { describe, assert, expect } from "./_testRunner"
import { constant } from "./_utils"
import Boolean, {
    True,
    False,
    isTrue,
    isFalse,
    ifElse,
    caseOf
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
        assert(true, Boolean.fromBoolean(True))
        assert(false, Boolean.fromBoolean(False))
    })

    describe("it returns the boolean opposite (aka not)", () => {
        expect(isTrue, Boolean.not(False))
        expect(isFalse, Boolean.not(True))
    })

    describe("it follows the if path", () => {
        const result = ifElse(
            isTrue,
            Boolean.fromBoolean,
            constant(false),
            True
        )
        assert(true, result)
    })

    describe("it follows the else path", () => {
        const result = ifElse(
            isTrue,
            constant(true),
            Boolean.fromBoolean,
            False
        )
        assert(false, result)
    })

    describe("it processes the correct case", () => {
        const result = caseOf(
            { 3: Boolean.toTrue, defaultCase: Boolean.toFalse },
            xs => xs.length,
            [1, 2, 3]
        )
        expect(isTrue, result)
    })

    describe("it can compare two Booleans", () => {
        expect(isTrue, Boolean.and(True, True))
        expect(isFalse, Boolean.and(True, False))
        expect(isTrue, Boolean.or(True, False))
        expect(isFalse, Boolean.or(False, False))
    })

    describe("it can compare two values of the same type", () => {
        expect(isTrue, Boolean.areEqual(1, 1))
        expect(isFalse, Boolean.areEqual(1, 2))
    })

    describe("it can validate the type of some value", () => {
        expect(isTrue, Boolean.isTypeOf("string", "hello world"))
        expect(isFalse, Boolean.isTypeOf("string", 1))
        expect(isTrue, Boolean.isTypeOf("number", 1))
        expect(isFalse, Boolean.isTypeOf("number", "hello world"))
    })
})
