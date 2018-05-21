import { describe, assert, expect } from "./_testRunner"
import toEnum, { get, isEnum } from "./Enum"
import { False, True } from "./Boolean"

describe("Enum", () => {
    describe("it constructs an Enum", () => {
        expect(isEnum, toEnum("TOP", "MIDDLE", "BOTTOM"))
    })

    describe("it gets the correct value", () => {
        const NUMBERS = toEnum("ONE", "TWO", "THREE")

        assert("ONE", get("ONE", NUMBERS))
        assert("TWO", NUMBERS.TWO)
    })

    describe("it prevents mutable transactions", () => {
        const POSITIONS = toEnum("LEFT", "CENTER", "RIGHT")

        expect(enum_ => {
            try {
                enum_.RIGHT = "LEFT"
                return False()
            } catch (error) {
                return True()
            }
        }, POSITIONS)
    })
})
