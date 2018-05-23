import { describe, assert, expect } from "./_testRunner"
import { isTrue, isFalse } from "./Boolean"
import List, {
    fromList,
    isList,
    isEmpty,
    areEqual,
    length,
    cons,
    map
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
        assert(
            List("hello", "world", "let's", "go").toString(),
            cons("hello", List("world", "let's", "go")).toString()
        )
    })

    describe("it can map over a List", () => {
        assert(
            List(2, 4, 6, 8).toString(),
            map(x => x * 2, List(1, 2, 3, 4)).toString()
        )
    })
})
