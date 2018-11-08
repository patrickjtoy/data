import { describe, assert, expect } from "./_testRunner"
import { constant } from "./_utils"
import Boolean from "./Boolean"

describe("Boolean", () => {
    describe("it works with JS booleans", () => {
        expect(Boolean.isTrue, Boolean(true))
        expect(Boolean.isFalse, Boolean(false))
    })

    describe("it works with $Boolean's constructors", () => {
        expect(Boolean.isTrue, Boolean.True)
        expect(Boolean.isFalse, Boolean.False)
    })

    describe("it extracts JS boolean", () => {
        assert(true, Boolean.fromBoolean(Boolean.True))
        assert(false, Boolean.fromBoolean(Boolean.False))
    })

    describe("it returns the boolean opposite (aka not)", () => {
        expect(Boolean.isTrue, Boolean.not(Boolean.False))
        expect(Boolean.isFalse, Boolean.not(Boolean.True))
    })

    describe("it follows the if path", () => {
        const result = Boolean.ifElse(
            Boolean.isTrue,
            Boolean.fromBoolean,
            constant(false),
            Boolean.True
        )
        assert(true, result)
    })

    describe("it follows the else path", () => {
        const result = Boolean.ifElse(
            Boolean.isTrue,
            constant(true),
            Boolean.fromBoolean,
            Boolean.False
        )
        assert(false, result)
    })

    describe("it processes the correct case", () => {
        const result = Boolean.caseOf(
            { 3: Boolean.toTrue, defaultCase: Boolean.toFalse },
            xs => xs.length,
            [1, 2, 3]
        )
        expect(Boolean.isTrue, result)
    })

    describe("it can compare two Booleans", () => {
        expect(Boolean.isTrue, Boolean.and(Boolean.True, Boolean.True))
        expect(Boolean.isFalse, Boolean.and(Boolean.True, Boolean.False))
        expect(Boolean.isTrue, Boolean.or(Boolean.True, Boolean.False))
        expect(Boolean.isFalse, Boolean.or(Boolean.False, Boolean.False))
    })

    describe("it can compare two values of the same type", () => {
        expect(Boolean.isTrue, Boolean.areEqual(1, 1))
        expect(Boolean.isFalse, Boolean.areEqual(1, 2))
    })

    describe("it can validate the type of some value", () => {
        expect(Boolean.isTrue, Boolean.isTypeOf("string", "hello world"))
        expect(Boolean.isFalse, Boolean.isTypeOf("string", 1))
        expect(Boolean.isTrue, Boolean.isTypeOf("number", 1))
        expect(Boolean.isFalse, Boolean.isTypeOf("number", "hello world"))
    })
})
