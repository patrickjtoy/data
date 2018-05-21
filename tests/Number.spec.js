import { describe, expect } from "./_testRunner"
import { Int, Float, isInt, isFloat } from "./Number"

describe("Number", () => {
    describe("Int", () => {
        describe("it creates an Int", () => {
            expect(isInt, Int(2))
        })

        describe("it creates a Float", () => {
            expect(isFloat, Float(3.5))
        })
    })
})
