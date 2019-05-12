arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// some arbitrary array manipulation
function manipulate(arr) {
  return arr
    .filter(item => item >= 5 && item <= 10)
    .map(item => item * 10)
    .reduce((a, b) => a + b)
}

console.log(manipulate(arr))

const summer = arr => {
  // starts at 0
  let sum = 0
  for (i = 0; i < arr.length; i++) {
    sum += i
    console.log(sum)
  }

  // interesting... starts at 1
  let sum1 = 0
  for (i of arr) {
    sum1 += i
    console.log(sum1)
  }
  //return sum
}

console.log(summer(arr))
