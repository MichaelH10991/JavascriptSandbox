/*
  A simple call to the github api that returns a users picture. This call create ansynchronous calls to the api
  using a function tagged async. This allows us to use await and create calls in a more procedural manner without
  using callbacks or promises. A function tagged with the await keyword returns a promise, so we can do extra stuff
  to the call if we want such as error handling althhough it is more common to see awaits wrapped in a try catch block.
*/

async function showAvatar() {
  let user = "MichaelH10991"

  // read github user
  let response = await fetch(`https://api.github.com/users/${user}`)
  let data = await response.json()
  console.log(data)

  // show the avatar
  let img = document.createElement("img")
  img.src = data.avatar_url
  img.className = "promise-avatar-example"
  document.body.append(img)

  // let img = document.getElementById("image")
  // img.src = data.avatar_url
  // img.className = "promise-avatar-example"

  // show date and time last updated
  let last_updated = data.updated_at
  last_updated = { whole_date, date, time } = cleanup(last_updated)
  calculate(last_updated)

  // wait 3 seconds
  await new Promise((resolve, reject) => setTimeout(resolve, 3000))

  return data
}

function calculate(last_updated) {
  let one_day = 1000 * 60 * 60 * 24
  let last = new Date(last_updated.whole_date)
  let today = new Date()
  diff = (today - last) / one_day
  if (diff < 1) {
    document.getElementById("content").innerText = "Your las commit was today"
  } else {
    document.getElementById(
      "content"
    ).innerText = `Your last commit was ${diff} days ago`
  }
}

// could return an entire nested object with date values and time values
function cleanup(data) {
  let split = data.split("T")
  let [date, time] = split
  time = time.replace(/[A-Z]/g, "")
  date1 = date.split("-")
  time = time.split(":")
  return {
    whole_date: date,
    date: { year: date1[0], month: date1[1], day: date1[2] },
    time: { hour: time[0], minute: time[1], second: time[2] }
  }
}

// returns a current date object
function todays_dates() {
  let today = new Date()
  let dd = String(today.getDate()).padStart(2, "0")
  let mm = String(today.getMonth() + 1).padStart(2, "0") //January is 0!
  let yyyy = today.getFullYear()
  return { day: dd, month: mm, year: yyyy }
}

function calculate_time(last_updated, today) {
  let year_diff = today.year - last_updated.date.year
  let month_diff = today.month - last_updated.date.day
  let day_diff = today.day - last_updated.date.day

  if (year_diff > 0) {
    console.log(
      `You last updated ${year_diff} year(s) ${month_diff} month(s) and ${day_diff} day(s) ago`
    )
  } else if (month_diff > 0) {
    console.log(
      `You last updated ${month_diff} month(s) and ${day_diff} day(s) ago`
    )
  } else {
    console.log(`You last updated ${day_diff} day(s) ago`)
  }

  console.log(`${year_diff}, ${month_diff}, ${day_diff}`)
}

showAvatar().catch(e => {
  console.log(`There was an error :( ${e}`)
})
