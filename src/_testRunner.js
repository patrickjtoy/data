import colors from "colors/safe"
import { ifElse, areEqual } from "./_utils"
import { isTrue } from "./Boolean"

let counter = 0

const isEven = s => s.length % 2 === 0

const describe = (desc, cb) => {
    if (/[A-Z]/.test(desc.charAt(0))) {
        counter = 0

        console.log("")
        console.log(
            "=".repeat(isEven(desc) ? desc.length * 2 : desc.length * 2 - 1)
        )
        console.log(
            `${" ".repeat(
                isEven(desc) ? desc.length / 2 : desc.length / 2
            )}${desc}`
        )
        console.log(
            "=".repeat(isEven(desc) ? desc.length * 2 : desc.length * 2 - 1)
        )
        console.log("")
        cb()
    }

    if (desc.startsWith("it")) {
        console.log(`${++counter}. ${desc}`)
        cb()
        console.log("")
    }
}

// assert :: a -> b -> c
const assert = (expected, actual) =>
    ifElse(
        isTrue,
        () => {
            console.log(colors.green("Success!"))
        },
        () => {
            console.error(
                `${colors.red(
                    "Failure"
                )}: expected result of '${actual}' to equal '${expected}', but it does not!`
            )
        },
        areEqual(expected, actual)
    )

// expect :: (a -> Boolean) -> a -> b
const expect = (withActual, actual) =>
    ifElse(
        withActual,
        () => {
            console.log(colors.green("Success!"))
        },
        () => {
            console.error(
                `${colors.red(
                    "Failure"
                )}: expected result of '${actual}' to equal '${withActual(
                    actual
                )}', but it does not!`
            )
        },
        actual
    )

export { describe, assert, expect }
