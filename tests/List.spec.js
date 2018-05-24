import { describe, assert, expect } from "./_testRunner"
import { isTrue, isFalse } from "./Boolean"
import List, {
    fromList,
    isList,
    isEmpty,
    areEqual,
    length,
    cons,
    map,
    filter,
    reverse
} from "./List"

describe("List", () => {
    describe("it creates a List", () => {
        const list = List(1, 2, 3)

        expect(isList, list)
    })

    describe("it can identify an empty list", () => {
        expect(isTrue, isEmpty(List()))
        expect(isFalse, isEmpty(List(1)))
    })

    describe("it can compare two Lists for equality", () => {
        expect(isTrue, areEqual(List(1, 2, 3), List(1, 2, 3)))
        expect(isFalse, areEqual(List(1, 2, 3), List(4, 5, 6)))
    })

    describe("it can compare different length Lists", () => {
        expect(isFalse, areEqual(List(1, 2), List(3, 4, 5)))
    })

    describe("it calculates length of fixed length lists", () => {
        assert(0, length(List()))
        assert(1, length(List(1)))
        assert(2, length(List("hello", "world")))
        assert(3, length(List("super", "cow", "powers")))
    })

    describe("it calculates length of a random length list", () => {
        const rand = parseInt(Math.random() * 100, 10)
        const array = Array.apply(null, new Array(rand)).fill(0)
        assert(rand, length(List(...array)))
    })

    describe("it converts a List to a JS Array", () => {
        assert("1,2,3", fromList(List(1, 2, 3)).toString())
    })

    describe("it can prepend a value to a List (cons || ::)", () => {
        expect(
            isTrue,
            areEqual(
                List("hello", "world", "let's", "go"),
                cons("hello", List("world", "let's", "go"))
            )
        )
    })

    describe("it can map over a List", () => {
        expect(
            isTrue,
            areEqual(List(2, 4, 6, 8), map(x => x * 2, List(1, 2, 3, 4)))
        )
        expect(
            isTrue,
            areEqual(
                List("HELLO", "WORLD"),
                map(x => x.toUpperCase(), List("hello", "world"))
            )
        )
    })

    describe("it can filter a List", () => {
        expect(
            isTrue,
            areEqual(
                List(2, 4, 6, 8),
                filter(x => x % 2 === 0, List(1, 2, 3, 4, 5, 6, 7, 8))
            )
        )
        expect(
            isTrue,
            areEqual(
                List("l", "l"),
                filter(x => x === "l", List("h", "e", "l", "l", "o"))
            )
        )
    })

    describe("it can reverse a List", () => {
        expect(
            isTrue,
            areEqual(
                List(10, 9, 8, 7, 6, 5, 4, 3, 2, 1),
                reverse(List(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
            )
        )
    })
})
