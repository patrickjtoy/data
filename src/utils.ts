/**
 * Description: utility functions
 * Author: Patrick Toy
 */

// log :: string -> a -> a
export const log =
  <a>(msg: string) =>
  (x: a): a => {
    console.log(msg, x)
    return x
  }

// identity :: a -> a
export function identity<a>(x: a): a {
  return x
}

// constant :: a -> b -> a
export const constant =
  <a, b>(x: a) =>
  (_: b): a =>
    x
