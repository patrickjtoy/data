import Tuple from "./Tuple.js";

const expect = (expected, actual) => {
    if (expected === actual) console.log("Success!")
    else console.error(`Failure: expected '${actual}' to equal '${expected}', but it does not!`)
}

const t = Tuple.of(1, "one")

// Verify correct values
expect(1, Tuple.first(t))
expect("one", Tuple.second(t))

// Ensure immutability
t._values = [2, "two"]
expect(1, Tuple.first(t))
expect("one", Tuple.second(t))
