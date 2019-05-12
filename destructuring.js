// can unpack values from arrays or properties from objects into distinct variables

let a, b, rest
;[a, b] = [10, 10]

// expected output: 10
console.log(a)

// expected output: 10
console.log(b)

// the rest variable takes on the rest of the array into one list variable
;[a, b, ...rest] = [10, 20, 30, 40, 50, 60]

console.log(rest)
// expected output: [30, 40, 50]
