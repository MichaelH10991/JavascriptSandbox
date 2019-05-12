// The flow has to be controlled by a callback to another function so that they execute in order.

function apiCall(api, callback) {
  setTimeout(() => {
    console.log(`making request to ${api}`)
  }, 500)
}
