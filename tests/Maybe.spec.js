import { describe, assert, expect } from "./_testRunner"
import Boolean from "./Boolean"
import Maybe from "./Maybe"

describe("Maybe", () => {
    describe("it constructs a Maybe (Nothing)", () => {
        expect(Boolean.isTrue, Maybe.isNothing(Maybe(null)))
    })

    describe("it constructs a Maybe (Just)", () => {
        expect(Boolean.isTrue, Maybe.isJust(Maybe(1)))
    })

    describe("it returns the fallback value", () => {
        assert("hello world", Maybe.fromMaybe("hello world")(Maybe()))
    })

    describe("it returns the contained value", () => {
        assert("foobar", Maybe.fromMaybe("fizzbuzz")(Maybe("foobar")))
    })

    describe("it doesn't map a Nothing", () => {
        expect(Maybe.isNothing, Maybe.map(x => x.toUpperCase())(Maybe()))
    })

    describe("it maps a Just", () => {
        const maybe = Maybe("hello world!")
        const toUpperCase = x => x.toUpperCase()
        const mapped = Maybe.map(toUpperCase)(maybe)

        expect(Maybe.isJust, mapped)
        assert("HELLO WORLD!", Maybe.fromMaybe(":(")(mapped))
    })
})
