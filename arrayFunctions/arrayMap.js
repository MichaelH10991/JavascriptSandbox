const a = [1, 2, 3]

let b = a.map((el, index) => (index === 1 ? 4 : el))

b[1] = 4

console.log(b[1])
console.log(a[1])
