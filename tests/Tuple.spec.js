import { describe, assert, expect } from "./_testRunner"
import Tuple, { first, second, mapFirst, mapSecond, isTuple } from "./Tuple.js"

describe("Tuple", () => {
    describe("it creates a Tuple", () => {
        const tuple = Tuple(1, "one")

        expect(isTuple, tuple)
    })

    describe("it works with Tuple's value extractors", () => {
        const tuple = Tuple(1, "one")

        assert(1, first(tuple))
        assert("one", second(tuple))
    })

    describe("it prevents mutations", () => {
        const tuple = Tuple(1, "one")

        assert(1, first(tuple))
        assert("one", second(tuple))
    })

    describe("it maps values correctly", () => {
        const tuple = Tuple(1, "one")

        assert(2, first(mapFirst(n => n + 1, tuple)))
        assert("ONE", second(mapSecond(s => s.toUpperCase(), tuple)))
    })
})
