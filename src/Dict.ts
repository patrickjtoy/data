/**
 * Module: Dict
 * Description: A dictionary is a collection of key-value pairs.
 * Author: Patrick Toy
 */

type Dict<a> = { _tag: "Dict"; value: { [key: string]: a } }
export type Type<a> = Dict<a>

// Constructor

// of :: string -> a -> Dict<a>
export function of<a>(key: string, value: a): Dict<a> {
  return { _tag: "Dict", value: { [key]: value } }
}
