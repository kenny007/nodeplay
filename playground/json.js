// var obj = {
//     name: 'Andrew'
// }

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

var personString = '{"name":"Kehinde","age": 32}';
var person = JSON.parse(personString);
console.log(typeof person);
console.log(person);