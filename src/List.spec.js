import { describe, assert, expect } from "./_testRunner"
import Boolean from "./Boolean"
import List from "./List"

describe("List", () => {
    describe("it creates a List", () => {
        expect(List.isList, List(1, 2, 3))
    })

    describe("it can foldl a List", () => {
        assert(10, List.foldl
          (x => y => x + y)
          (0)
          (List(1, 2, 3, 4))
        )
    })

    describe("it can identify an empty list", () => {
        expect(Boolean.isTrue, List.isEmpty(List()))
        expect(Boolean.isFalse, List.isEmpty(List(1)))
    })

    describe("it can compare two Lists for equality", () => {
        expect(Boolean.isTrue, List.areEqual(List(1, 2, 3))(List(1, 2, 3)))
        expect(Boolean.isFalse, List.areEqual(List(1, 2, 3))(List(4, 5, 6)))
    })

    describe("it can compare different length Lists", () => {
        expect(Boolean.isFalse, List.areEqual(List(1, 2))(List(3, 4, 5)))
    })

    describe("it calculates length of fixed length lists", () => {
        assert(0, List.lengthOf(List()))
        assert(1, List.lengthOf(List(1)))
        assert(2, List.lengthOf(List("hello", "world")))
        assert(3, List.lengthOf(List("super", "cow", "powers")))
    })

    describe("it calculates length of a random length list", () => {
        const rand = parseInt(Math.random() * 100, 10)
        const array = Array.apply(null, new Array(rand)).fill(0)
        assert(rand, List.lengthOf(List(...array)))
    })

    describe("it converts a List to a JS Array", () => {
        assert("1,2,3", List.fromList(List(1, 2, 3)).toString())
    })

    describe("it can prepend a value to a List (cons || ::)", () => {
        expect(
            Boolean.isTrue,
            List.areEqual
              (List("hello", "world", "let's", "go"))
              (List.cons
                ("hello")
                (List("world", "let's", "go"))
              )
        )
    })

    describe("it can map over a List", () => {
        expect(
            Boolean.isTrue,
            List.areEqual(
                List(2, 4, 6, 8),
                List.map(x => x * 2)(List(1, 2, 3, 4))
            )
        )
        expect(
            Boolean.isTrue,
            List.areEqual(
                List("HELLO", "WORLD"),
                List.map(x => x.toUpperCase())(List("hello", "world"))
            )
        )
    })

    describe("it can filter a List", () => {
        expect(
            Boolean.isTrue,
            List.areEqual(
                List(2, 4, 6, 8),
                List.filter(x => x % 2 === 0)(List(1, 2, 3, 4, 5, 6, 7, 8))
            )
        )
        expect(
            Boolean.isTrue,
            List.areEqual(
                List("l", "l"),
                List.filter(x => x === "l")(List("h", "e", "l", "l", "o"))
            )
        )
    })

    describe("it can reverse a List", () => {
        expect(
            Boolean.isTrue,
            List.areEqual
              (List(10, 9, 8, 7, 6, 5, 4, 3, 2, 1))
              (List.reverse(List(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)))
        )
    })

    describe("it can validate every element with a given predicate", () => {
        expect(Boolean.isTrue, List.every(x => Boolean(x > 0))(List(1, 2, 3)))
        expect(Boolean.isFalse, List.every(x => Boolean(x < 5))(List(4, 5, 6)))
    })

    describe("it can determine if a value is in a List", () => {
        expect(Boolean.isTrue, List.elem(1)(List(1, 2, 3)))
        expect(Boolean.isFalse, List.elem(3)(List(4, 5, 6)))
    })
})
