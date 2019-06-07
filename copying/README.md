# Copying

## Shallow copying

- change is reflected in both objects even though one is a copy.
- the reference to the object is also being copied.

## Deep Copying

- using the spread operator we can spread all the new values into a new object
- this is an example of deep copying
- the reference is not being copied
- were creating an entirely new object

## Nested Objects

- Copying of nested objects using spread will do a deep copy of the outer object
- and a shallow copy of any inner objects
- however nested objects/arrays are shallow copied using spread
- to make a deep copy of nested objects we can manually copy all nested objects or...

## JSON.stringify

Do something like this

```javascript
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
```
