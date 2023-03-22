/**
 * Description: test suite tools for the Data library
 * Author: Patrick Toy
 */

import * as colors from "fmt/colors.ts"
import * as Data from "./Data.ts"
import * as Boolean from "./Boolean.ts"

let counter = 0

// isEven :: string -> boolean
const isEven = (s: string) => s.length % 2 === 0

// describe :: string -> (() -> void) -> void
export function describe(desc: string, fn: () => void): void {
  counter = 0

  console.log("")
  console.log("=".repeat(isEven(desc) ? desc.length * 2 : desc.length * 2 - 1))
  console.log(`${" ".repeat(isEven(desc) ? desc.length / 2 : desc.length / 2)}${desc}`)
  console.log("=".repeat(isEven(desc) ? desc.length * 2 : desc.length * 2 - 1))
  console.log("")
  fn()
}

// it :: string -> (() -> void) -> void
export function it(desc: string, fn: () => void): void {
  console.log(`${++counter}. ${desc}`)
  fn()
  console.log("")
}

// expect :: Data -> { toBe: (Data -> void) }
export const expect = <a, b>(actual: Data.Type<a, b>) => {
  return {
    toEqual: (expected: Data.Type<a, b>) => {
      const pass = Boolean.areEqual(actual, expected)
      const message = Boolean.isTrue(pass)
        ? `${colors.green("PASS")}: ${actual} === ${expected}`
        : `${colors.red("FAIL")}: ${actual} !== ${expected}`
      console.log(message)
    },
    toNotEqual: (expected: Data.Type<a, b>) => {
      const pass = Boolean.areNotEqual(actual, expected)
      const message = Boolean.isTrue(pass)
        ? `${colors.green("PASS")}: ${actual} !== ${expected}`
        : `${colors.red("FAIL")}: ${actual} === ${expected}`
      console.log(message)
    },
  }
}
