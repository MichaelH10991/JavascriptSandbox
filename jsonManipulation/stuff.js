let response = '{"name":"John", "age":"30", "city":"New York"}'
let obj = JSON.parse(response)
console.log(`The parsed response object: ${obj.name}, ${obj.age}, ${obj.city}.`)
