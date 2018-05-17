import { describe, expect } from "./_testRunner"
import List, { isEmpty, length, cons, toArray } from "./List"

describe("List", () => {
    describe("it works with List's constructor", () => {
        expect(List().constructor.prototype, List.of().constructor.prototype)
    })

    describe("it can identify an empty list", () => {
        expect(true, isEmpty(List()))
        expect(false, isEmpty(List(1)))
    })

    describe("it calculates length of fixed length lists", () => {
        expect(0, length(List()))
        expect(1, length(List(1)))
        expect(2, length(List("hello", "world")))
        expect(3, length(List("super", "cow", "powers")))
    })

    describe("it calculates length of a random length list", () => {
        const rand = parseInt(Math.random() * 100, 10)
        const array = Array.apply(null, new Array(rand)).fill(0)
        expect(rand, length(List(...array)))
    })

    describe("it converts a List to a JS Array", () => {
        expect("1,2,3", toArray(List(1, 2, 3)).toString())
    })

    describe("it can prepend a value to a List (cons || ::)", () => {
        expect(
            List("hello", "world", "let's", "go").toString(),
            cons("hello", List("world", "let's", "go")).toString()
        )
    })
})
