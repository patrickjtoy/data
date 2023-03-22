/**
 * Module: Boolean
 * Description: Boolean type
 * Author: Patrick Toy
 */

import * as Data from "./Data.ts"

type True = Data.Type<"Boolean", "True">
type False = Data.Type<"Boolean", "False">
type Boolean = True | False
export type Type = Boolean

// Constants
export const True: Boolean = Data.of("Boolean", "True")
export const False: Boolean = Data.of("Boolean", "False")

// Constructor

// of :: boolean -> Boolean
export function of(x: boolean): Boolean {
  return x ? True : False
}

// Destructor

// fromBoolean :: Boolean -> boolean
export function fromBoolean(x: Boolean): boolean {
  return x.value === "True"
}

// Functions

// isBoolean :: a -> boolean
export function isBoolean(x: unknown): x is Boolean {
  return Data.isData(x) && x._tag === "Boolean"
}

// isTrue :: Boolean -> Boolean
export function isTrue(x: Boolean): Boolean {
  return x.value === "True" ? True : False
}

// isFalse :: Boolean -> Boolean
export function isFalse(x: Boolean): Boolean {
  return x.value === "False" ? True : False
}

// not :: Boolean -> Boolean
export function not(x: Boolean): Boolean {
  return x.value === "True" ? False : True
}

// and :: Boolean -> Boolean -> Boolean
export function and(x: Boolean, y: Boolean): Boolean {
  return x.value === "True" && y.value === "True" ? True : False
}

// or :: Boolean -> Boolean -> Boolean
export function or(x: Boolean, y: Boolean): Boolean {
  return x.value === "True" || y.value === "True" ? True : False
}

// areEqual :: Data -> Data -> Boolean
export function areEqual<a, b>(x: Data.Type<a, b>, y: Data.Type<a, b>): Boolean {
  return of(x.value === y.value)
}

// areNotEqual :: Data -> Data -> Boolean
export function areNotEqual<a, b>(x: Data.Type<a, b>, y: Data.Type<a, b>): Boolean {
  return of(x.value !== y.value)
}

// ifElse :: (a -> Boolean) -> (a -> b) -> (a -> b) -> a -> b
export function ifElse<a, b>(p: (x: a) => Boolean, t: (x: a) => b, f: (x: a) => b, x: a): b {
  return p(x).value === "True" ? t(x) : f(x)
}
