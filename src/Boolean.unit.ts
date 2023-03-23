import { describe, it, expect } from "./testRunner.ts"
import * as Boolean from "./Boolean.ts"

describe("Boolean", () => {
  it("should be able to create a Boolean from a js boolean", () => {
    expect(Boolean.of(true)).toEqual(Boolean.True)
    expect(Boolean.of(false)).toEqual(Boolean.False)
  })

  it("should be able to determine the truthiness of a Boolean", () => {
    expect(Boolean.isTrue(Boolean.True)).toEqual(Boolean.True)
    expect(Boolean.isTrue(Boolean.False)).toEqual(Boolean.False)
    expect(Boolean.isFalse(Boolean.True)).toEqual(Boolean.False)
    expect(Boolean.isFalse(Boolean.False)).toEqual(Boolean.True)
  })

  it("should be able to negate a Boolean", () => {
    expect(Boolean.not(Boolean.True)).toEqual(Boolean.False)
    expect(Boolean.not(Boolean.False)).toEqual(Boolean.True)
  })

  it("should be able to combine two Booleans with and", () => {
    expect(Boolean.and(Boolean.True, Boolean.True)).toEqual(Boolean.True)
    expect(Boolean.and(Boolean.True, Boolean.False)).toEqual(Boolean.False)
    expect(Boolean.and(Boolean.False, Boolean.True)).toEqual(Boolean.False)
    expect(Boolean.and(Boolean.False, Boolean.False)).toEqual(Boolean.False)
  })

  it("should be able to combine two Booleans with or", () => {
    expect(Boolean.or(Boolean.True, Boolean.True)).toEqual(Boolean.True)
    expect(Boolean.or(Boolean.True, Boolean.False)).toEqual(Boolean.True)
    expect(Boolean.or(Boolean.False, Boolean.True)).toEqual(Boolean.True)
    expect(Boolean.or(Boolean.False, Boolean.False)).toEqual(Boolean.False)
  })

  it("should be able to determine if two Booleans are equal", () => {
    expect(Boolean.areEqual(Boolean.True, Boolean.True)).toEqual(Boolean.True)
    expect(Boolean.areEqual(Boolean.True, Boolean.False)).toEqual(Boolean.False)
    expect(Boolean.areEqual(Boolean.False, Boolean.True)).toEqual(Boolean.False)
    expect(Boolean.areEqual(Boolean.False, Boolean.False)).toEqual(Boolean.True)
  })

  it("should be able to determine if two Booleans are not equal", () => {
    expect(Boolean.areNotEqual(Boolean.True, Boolean.True)).toEqual(Boolean.False)
    expect(Boolean.areNotEqual(Boolean.True, Boolean.False)).toEqual(Boolean.True)
    expect(Boolean.areNotEqual(Boolean.False, Boolean.True)).toEqual(Boolean.True)
    expect(Boolean.areNotEqual(Boolean.False, Boolean.False)).toEqual(Boolean.False)
  })
})
