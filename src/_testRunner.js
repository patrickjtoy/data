import colors from "colors/safe"

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

const expect = (expected, actual) => {
    if (expected === actual) console.log(colors.green("Success!"))
    else
        console.error(
            `${colors.red(
                "Failure"
            )}: expected result of '${actual}' to equal '${expected}', but it does not!`
        )
}

export { describe, expect }
