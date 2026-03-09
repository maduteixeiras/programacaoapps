// função comum com js:
const sum = (a, b) => {
    return a + b
}

const sub = (a, b) => {
    return a - b
}

// arrow function:
// ao ver => podemos saber que é uma variável do tipo função, e não precisamos usar a palavra reservada function
const div = (a, b) => a / b

const summ = sum(2, 3)
const subb = sub(2, 3)
const divv = div(2, 3)

console.log("Sum: ",summ)
console.log("Sub: ", subb)
console.log("Div: ", divv)
