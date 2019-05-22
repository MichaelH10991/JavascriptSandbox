/*
a function that recieves a bunch of strings and string literals and spits something useless out
notice how the function call doesnt have any brackets... curious.
*/

let person = "Mike"
let age = 28
function myTag(strings, personExp, ageExp) {
  str0 = strings[0]
  str1 = strings[1]
  let ageStr
  if (ageExp > 99) {
    ageStr = "centenariodhxdf"
  } else {
    ageStr = "youngster"
  }
  // returning a sting built with a string literal
  return `${str0}${personExp}${str1}${ageStr}`
}
let output = myTag`that ${person} is a ${age}`
console.log(output)
