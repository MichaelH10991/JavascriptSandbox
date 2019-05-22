function get(url) {
  return new Promise((resolve, reject) => {
    var req = new XMLHttpRequest()
    req.open("GET", url)
    req.onload = () => {
      // This is called even on 404 etc
      // so check the status
      if (req.status == 200) {
        // Resolve the promise with the response text
        resolve(req.response)
      } else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(req.statusText))
      }
    }

    // Handle network errors
    req.onerror = () => {
      reject(Error("Network Error"))
    }

    // Make the request
    req.send()
  })
}
get("https://jsonplaceholder.typicode.com/posts").then(
  response => {
    document.getElementById("content").innerHTML = "Success!"
    console.log("Success", response)
  },
  error => {
    document.getElementById("content").innerHTML = "Failed"
    console.log("Failed", error)
  }
)
