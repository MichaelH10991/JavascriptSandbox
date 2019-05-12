var elements = ["Hydrogen", "Helium", "Lithium", "Beryllium"]

// this function returns the length of each element
console.log(
  elements.map(function(element) {
    return element.length
  })
)

// this is the same as the above written as an arrow function
console.log(
  "as an arrow function",
  elements.map((element, n) => {
    return element.length * n
  })
)

/*
 when the only statement in the arrow is a return, 
 we can remove the return and remove the surrounding curly brackets
*/

console.log(elements.map(element => element.length))

elements.map(({ length: lengthFooBArX }) => lengthFooBArX)

b = 3

a = name => title => `${title} ${name}`

aname = a("Mike")

console.log(aname("Mr. "))
