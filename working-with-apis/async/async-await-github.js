/*
  A simple call to the github api that returns a users picture. This call create ansynchronous calls to the api
  using a function tagged async. This allows us to use await and create calls in a more procedural manner without
  using callbacks or promises. A function tagged with the await keyword returns a promise, so we can do extra stuff
  to the call if we want such as error handling althhough it is more common to see awaits wrapped in a try catch block.
*/

async function showAvatar() {
  let user = "mike-trt"

  // read github user
  let githubResponse = await fetch(`https://api.github.com/users/${user}`)
  let githubUser = await githubResponse.json()

  // show the avatar
  let img = document.createElement("img")
  img.src = githubUser.avatar_url
  img.className = "promise-avatar-example"
  document.body.append(img)

  // wait 3 seconds
  await new Promise((resolve, reject) => setTimeout(resolve, 3000))

  return githubUser
}

showAvatar().catch(e => {
  console.log(`There was an error :( ${e}`)
})
