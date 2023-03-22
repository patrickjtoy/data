/**
 * Module: Integer
 * Description: Integer type
 * Author: Patrick Toy
 */

import * as Data from "./Data.ts"

type Integer = Data.Type<"Integer", number>
export type Type = Integer

// Constants
export const Zero: Integer = Data.of("Integer", 0)

// Constructor
export function of(x: number): Integer {
  return Data.of("Integer", x)
}

// Destructor
export function fromInteger(x: Integer): number {
  return x.value
}

// Functions

// isInteger :: a -> boolean
export function isInteger(x: unknown): x is Integer {
  return Data.isData(x) && x._tag === "Integer"
}

// add :: Integer -> Integer -> Integer
export function add(x: Integer, y: Integer): Integer {
  return of(x.value + y.value)
}

// subtract :: Integer -> Integer -> Integer
export function subtract(x: Integer, y: Integer): Integer {
  return of(x.value - y.value)
}

// multiply :: Integer -> Integer -> Integer
export function multiply(x: Integer, y: Integer): Integer {
  return of(x.value * y.value)
}

// divide :: Integer -> Integer -> Integer
export function divide(x: Integer, y: Integer): Integer {
  return of(x.value / y.value)
}
