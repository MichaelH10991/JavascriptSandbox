var promise1 = new Promise((reslove, reject) => {
  setTimeout(() => {
    reslove("foo")
  }, 300)
})

promise1.then(value => {
  console.log(value)
  // expected output: "foo"
})

console.log(promise1)
// expected output: [object Promise]
