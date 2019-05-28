const axios = require("axios")
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("resolved")
    }, 2000)
  })
}

async function asyncCall() {
  console.log("calling")
  let result = await resolveAfter2Seconds()
  console.log(result) // expected output: 'resolved'
}

// asyncCall()

/* 
  with async we can simplify functions that return promises
  this is code from 'fetch-a-thing.js' and it can be refactored into a series
  of async calls
 */
let what = "posts"
let n = 1
// let data = { username: "example" }
url = `https://jsonplaceholder.typicode.com/${what}`

// old promise chain
function getData(url) {
  return fetch(url)
    .then(res => {
      console.log(res => res.json())
    })
    .then(data => {
      return console.log(`Success: ${data}`)
    })
    .catch(error => {
      return console.log(`There was an error: ${error}`)
    })
}

// new async chain with axios to see the result
// axios =  a Promise based HTTP client for the browser and node.js
const getStuff = async url => {
  console.log("about to fetch")
  console.log(`Fetching from ${url}`)
  return await axios.get(url)
}

let stuff = getStuff(url).catch(e => {
  ;`There was an error: ${e}`
})

console.log(stuff)
