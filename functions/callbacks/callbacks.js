// a basic example of callbacks

function first() {
  setTimeout(() => {
    console.log(1)
  }, 500)
}

function second() {
  console.log(2)
}

// first()
// second()

/*
 - javascript didnt execute our functions out of order,
 - it just didnt wait for the response from first() before
 - executing second()
 - Therefore callbacks allow us to control the flow of the program
 - when it potentially executes functions asynchronously
*/

// This is a callback function
function doHomework(subject, callback) {
  console.log(`Starting my ${subject} homework.`)
  callback()
}

/* 
 - this is the call to the function
 - the second param is the callback and is 
 - executed in the function it calls
*/

/*
doHomework:
  params:
    subject
    callback function
  returns:
    nothing
*/
doHomework("math", () => {
  console.log("Finished my homework")
})

console.log("Callbacks defined elsewhere...")
function doHomework(subject, callback) {
  alert(`Starting my ${subject} homewrok.`)
  callback()
}
function alertFinished() {
  console.log("Finished my homework")
}

doHomework("math", alertFinished)
