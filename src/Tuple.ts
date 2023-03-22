/**
 * Module: Tuple
 * Description: A tuple is a finite ordered list of elements.
 * Author: Patrick Toy
 */

import * as Data from "./Data.ts"

type Tuple<a, b> = { _tag: "Tuple"; value: [a, b] }
export type Type<a, b> = Tuple<a, b>

// Constructors

// of :: a -> b -> Tuple<a, b>
export function of<a, b>(x: a, y: b): Tuple<a, b> {
  return { _tag: "Tuple", value: [x, y] }
}

// Destructors

// first :: Tuple<a, b> -> a
export function first<a, b>(x: Tuple<a, b>): a {
  return x.value[0]
}

// second :: Tuple<a, b> -> b
export function second<a, b>(x: Tuple<a, b>): b {
  return x.value[1]
}

// isTuple :: a -> boolean
export function isTuple<a, b>(x: unknown): x is Tuple<a, b> {
  return Data.isData(x) && x._tag === "Tuple"
}
