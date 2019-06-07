var promise = new Promise((resolve, reject) => {
  // do a thing, possibly async, then...
  let condition = true
  if (condition /* everything worked out */) {
    resolve("Stuff worked")
  } else {
    reject(Error("It broke"))
  }
})

// using the promise. We supply the promise with the callbacks it needs. A resolve callback and a reject callback
promise.then(result => console.log(result), err => console.log(err))
