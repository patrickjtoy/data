import { describe, it, expect } from "./testRunner.ts"
import * as Integer from "./Integer.ts"

describe("Integer", () => {
  it("should be able to create an Integer from a js number", () => {
    expect(Integer.of(1)).toEqual(Integer.of(1))
    expect(Integer.of(1)).toNotEqual(Integer.of(2))
  })

  it("should be able to add two Integers", () => {
    expect(Integer.add(Integer.of(1), Integer.of(2))).toEqual(Integer.of(3))
  })

  it("should be able to subtract two Integers", () => {
    expect(Integer.subtract(Integer.of(2), Integer.of(1))).toEqual(Integer.of(1))
  })

  it("should be able to multiply two Integers", () => {
    expect(Integer.multiply(Integer.of(2), Integer.of(3))).toEqual(Integer.of(6))
  })

  it("should be able to divide two Integers", () => {
    expect(Integer.divide(Integer.of(6), Integer.of(3))).toEqual(Integer.of(2))
  })
})
