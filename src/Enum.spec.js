import { describe, assert, expect } from "./_testRunner"
import Enum from "./Enum"
import Boolean from "./Boolean"

describe("Enum", () => {
    describe("it constructs an Enum", () => {
        expect(Enum.isEnum, Enum("TOP", "MIDDLE", "BOTTOM"))
    })

    describe("it only allows string values", () => {
        // This will throw
        // Enum(1, 2, 3)
        assert(Boolean.True, Boolean.True)
    })

    describe("it gets the correct value", () => {
        const NUMBERS = Enum("ONE", "TWO", "THREE")

        assert("TWO", NUMBERS.TWO)
    })

    describe("it prevents mutable transactions", () => {
        const POSITIONS = Enum("LEFT", "CENTER", "RIGHT")

        expect(enum_ => {
            try {
                enum_.RIGHT = "LEFT"
                return Boolean.False
            } catch (error) {
                return Boolean.True
            }
        }, POSITIONS)
    })
})
