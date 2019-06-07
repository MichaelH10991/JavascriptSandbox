// can unpack values from arrays or properties from objects into distinct variables

let a, b, rest
;[a, b] = [10, 10]

// expected output: 10, 10
console.log(`${a}, ${b}`)

// the rest variable takes on the rest of the array into one list variable
;[a, b, ...rest] = [10, 20, 30, 40, 50, 60]

console.log(rest)
// expected output: [30, 40, 50]

// Destructuring objects
const square = {
  x: 10,
  y: 10
}

// this
const { x, y } = square
console.log(`${x}, ${y}`)

// instead of this
console.log(`${square.x}, ${square.y}`)

// Swapping is cool
let num1 = 1
let num2 = 2

;[num1, num2] = [num2, num1]
console.log(`${num1}, ${num2}`)

// bubble sort using destructuring to swap
let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

function bubble(arr) {
  for (i = 0; i < arr.length; i++) {
    for (j = 1; j < arr.length - i; j++) {
      if (arr[j - 1] > arr[j]) {
        ;[arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
      }
    }
  }
}

bubble(arr)
console.log(arr)
