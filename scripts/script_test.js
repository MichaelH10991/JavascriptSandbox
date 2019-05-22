login_properties = "docker/keycloak/themes/ncsc2019/login/theme.properties"
login_js =
  "docker/keycloak/themes/ncsc2019/login/resources/js/google-analytics.js"

account_properties = "docker/keycloak/themes/ncsc2019/account/theme.properties"
account_js =
  "docker/keycloak/themes/ncsc2019/account/resources/js/google-analytics.js"

const env = "XXXX"
// takes in filepaths as 2D array
const file_path_array = [
  [account_properties, account_js],
  [login_properties, login_js]
]

// will perform operations based on the type of file returned by get_extension() (.properties or .js)
do_stuff(file_path_array)

function do_stuff(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (get_extension(arr[i][j]) === "properties") {
        console.log(`Do properties stuff on ${arr[i][j]} using ${env}`)
      } else {
        console.log(`Do js stuff on ${arr[i][j]} using ${env}`)
      }
    }
  }
}

// does the grunt work of finding the type of file of param supplied to it
function get_extension(param) {
  let peices = param.split("/")
  let ext = peices[peices.length - 1].split(".")
  if (ext[1] === "properties") {
    return "properties"
  } else {
    return "js"
  }
}
