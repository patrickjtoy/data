import { describe, expect } from "./_testRunner"
import Boolean, { True, False, isTrue, isFalse } from "./Boolean"

describe("Boolean", () => {
    describe("it works with JS booleans", () => {
        expect(true, isTrue(Boolean.of(true)))
        expect(true, isFalse(Boolean.of(false)))
    })

    describe("it works with Boolean's constructors", () => {
        expect(true, isTrue(True()))
        expect(false, isTrue(False()))
        expect(true, isFalse(False()))
        expect(false, isFalse(True()))
    })
})
