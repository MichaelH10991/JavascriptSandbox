const a = {
  en: "Hello",
  de: "Hallo",
  es: "Hola",
  pt: "Ola"
}

let b = a

b.pt = "Oi"

/*
  - change is reflected in both objects even though b is a copy
  - this is an example of shallow copying
  - where the reference is also being copied
*/
console.log(b.pt) // Oi

console.log(a.pt) // Oi

/*
  - using the spread operator we can spread all the new values into a new object
  - this is an example of deep copying
  - the reference is not being copied
  - spread does deep copying
*/

const c = {
  en: "Bye",
  de: "Tscuss"
}

let d = { ...a }
d.de = "Ciao"

console.log(c.de) // Tscuss - original

console.log(d.de) // Ciao - new

// merging of two objects using the spread operator
const e = { ...c, ...d }

/*
  - Copying of nested objects using spread will do a deep copy of the outer object
  - and a shallow copy of any inner objects
*/

// however nested objects/arrays are shallow copied using spread
const nested = {
  foods: {
    dinner: "Pasta"
  }
}
let copy = { ...nested }

copy.foods.dinner = "Soup" // changes for both objects

console.log(copy.foods.dinner) //Soup

console.log(nested.foods.dinner) // also soup

/*
  - to make a deep copy of nested objects we can manually copy all nested objects
*/

const nested1 = {
  foods: {
    dinner: "pasta"
  }
}

let nestedCopy = { foods: { ...a.foods } }

nestedCopy.foods.dinner = "Soup"

console.log(nestedCopy.foods.dinner) // Soup
console.log(nested1.foods.dinner) // Pasta

/*
  - This is how you make deep copies without thinking about the nested objects and how many there are.
*/

const deepObject = {
  foods: {
    dinner: "Pasta"
  },
  courses: {
    courseNumber: "1"
  }
}

let deepObjectParse = JSON.parse(JSON.stringify(deepObject))
deepObjectParse.foods.dinner = "Soup"

console.log(deepObjectParse.foods.dinner) // Soup
console.log(deepObject.foods.dinner) // Pasta

const array = [1, 2, 3]

let newArr = [...array]

newArr[1] = 4

console.log(newArr[1]) // 4
console.log(array[1]) // 2

// counter contains a method which copies itself
class Counter {
  constructor() {
    this.count = 5
    this.add = () => this.count++
  }
  copy() {
    const copy = new Counter()

    Object.keys(this).forEach(key => {
      const value = this[key]

      switch (typeof value) {
        case "function":
          break
        case "object":
          copy[key] = JSON.stringify(JSON.parse(value))
          break
        default:
          copy[key] = value
          break
      }
    })

    return copy
  }
}
const originalCounter = new Counter()
const copiedCounter = originalCounter.copy()
console.log(originalCounter.count) // 5
console.log(copiedCounter.count) // 5
copiedCounter.count = 7
console.log(originalCounter.count) // 5
console.log(copiedCounter.count) // 7
