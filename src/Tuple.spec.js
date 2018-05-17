import { describe, expect } from "./_testRunner"
import Tuple, { first, second, mapFirst, mapSecond } from "./Tuple.js"

describe("Tuple", () => {
    const tuple = Tuple(1, "one")

    describe("it works with Tuple's constructor", () => {
        expect(
            Tuple(1, 1).constructor.prototype,
            Tuple.of(1, 1).constructor.prototype
        )
    })

    describe("it works with Tuple's value extractors", () => {
        expect(1, first(tuple))
        expect("one", second(tuple))
    })

    describe("it prevents mutations", () => {
        expect(1, first(tuple))
        expect("one", second(tuple))
    })

    describe("it maps values correctly", () => {
        expect(2, first(mapFirst(n => n + 1, tuple)))
        expect("ONE", second(mapSecond(s => s.toUpperCase(), tuple)))
    })
})
