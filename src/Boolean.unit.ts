import { describe, it, expect } from "./testRunner.ts"
import * as Boolean from "./Boolean.ts"

describe("Boolean", () => {
  it("should be able to create a Boolean from a js boolean", () => {
    expect(Boolean.of(true)).toEqual(Boolean.True)
    expect(Boolean.of(false)).toEqual(Boolean.False)
  })
})
