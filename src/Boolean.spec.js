import { describe, expect } from "./_testRunner"
import Boolean, { True, False, isTrue, isFalse } from "./Boolean"

describe("Boolean", () => {
    describe("it works with JS booleans", () => {
        expect(isTrue, Boolean(true))
        expect(isFalse, Boolean(false))
    })

    describe("it works with Boolean's constructors", () => {
        expect(isTrue, True())
        expect(isFalse, False())
    })
})
