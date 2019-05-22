let what = "photos"
let data = { username: "example" }
console.log("about to fetch")
url = `https://jsonplaceholder.typicode.com/${what}`

fetch(url, {
  method: "GET", // if there is body data to send, the request has to be a PUT or POST
  mode: "cors",
  cache: "no-cache",
  credentials: "same-origin",
  headers: { "Content-type": "application/json" },
  redirect: "follow",
  referrer: "no-referrer"
  // body: JSON.stringify(data) // body data type must match "Content-Type" header
})
  .then(res => res.json())
  .then(data => {
    console.log(`Success:`, data)
    let id = 3
    let image = data[id].url,
      name = data[id].title
    placeTextInHtml("name", name)
    placeImageInHtml("image", image)
  })
  .catch(e =>
    console.error(
      `There has been a problem with your fetch operation: ${e.message}`
    )
  )

function placeTextInHtml(where, what) {
  document.getElementById(where).innerHTML = what
}

function placeImageInHtml(where, what) {
  document.getElementById(where).src = what
}
