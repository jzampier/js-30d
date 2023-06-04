//! Day 16 JSON (JavaScript Object Notation)
//? JSON is a syntax for storing and exchanging data.

//JSON.parse(json[, reviver])
//json or text, the data
//reviver is an optional callback function
/* JSON.parse(json, (key,value) =>{}) */
const usersText = `{
  "users":[
    {
      "firstName":"Asabeneh",
      "lastName":"Yetayeh",
      "age":250,
      "email":"asab@asb.com"
    },
    {
      "firstName":"Alex",
      "lastName":"James",
      "age":25,
      "email":"alex@alex.com"
    },
    {
    "firstName":"Lidiya",
    "lastName":"Tekle",
    "age":28,
    "email":"lidiya@lidiya.com"
    }
  ]
  }`
  const usersObj = JSON.parse(usersText, undefined, 4)
  console.log(usersObj);