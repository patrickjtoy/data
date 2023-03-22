/**
 * Module: Data
 * Description: Data type
 * Author: Patrick Toy
 */

type Data<a, b> = { _tag: a; value: b; toString(): string }
export type Type<a, b> = Data<a, b>

// Constructor
export function of<a, b>(tag: a, value: b): Data<a, b> {
  return { _tag: tag, value, toString: () => String(value) }
}

// Functions

// isData :: a -> boolean
export function isData<a, b>(x: unknown): x is Data<a, b> {
  return typeof x === "object" && x !== null && "_tag" in x && typeof x._tag === "string"
}
