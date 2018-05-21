import { describe, assert, expect } from "./_testRunner"
import Boolean, {
    True,
    False,
    fromBoolean,
    isTrue,
    isFalse,
    ifElse,
    areEqual
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

    describe("IfElse", () => {
        describe("it follows the if path", () => {
            const result = ifElse(isTrue, fromBoolean, () => false, True())
            assert(true, result)
        })

        describe("it follows the else path", () => {
            const result = ifElse(isTrue, () => true, fromBoolean, False())
            assert(false, result)
        })
    })
})
