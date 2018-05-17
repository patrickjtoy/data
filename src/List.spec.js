import List from './List'

const expect = (expected, actual) => {
    if (expected === actual) console.log("Success!")
    else console.error(`Failure: expected '${actual}' to equal '${expected}', but it does not!`)
}

expect(true, List.isEmpty(List.of()))
expect(false, List.isEmpty(List.of(1)))

expect(0, List.length(List.of()))
expect(1, List.length(List.of(1)))
expect(2, List.length(List.of("hello", "world")))
expect(3, List.length(List.of("super", "cow", "powers")))
