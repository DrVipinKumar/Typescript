export {}
let name:unknown="Dr Vipin Classes"
console.log((name as string).length)
console.log((<string>name).length)
let num1:unknown="16"
let num2:unknown="20"
let sum =<string>num1 + <string>num2
console.log("Sum =",sum)
