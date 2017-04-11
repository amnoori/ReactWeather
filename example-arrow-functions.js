// var names = ['Atif', 'Mo', 'john', 'Aj'];
//
// names.forEach(function (name) {
//   console.log('forEach',name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc',name);
// });
//
// names.forEach((name) => console.log(name));
//
// var returnMe = (name) => name + '!';
// console.log(returnMe('Atif'));

// var person = {
//   name: 'Atif',
//   greet: function () {
//     names.forEach(function(name) {
//       console.log(this.name + 'says hi to' + name)
//     })
//   }
// };

//Use arrow functions to keep the 'this.' binding to outer object.

//Challenge Area
function add (a,b) {
  return a + b;
};

var curly = (a,b) => {
  return a + b;
};

var slim = (a,b) => a + b;

console.log(add(1,3));
console.log(add(9,0));
console.log(curly(1,1));
console.log(curly(3,5));
console.log(slim(2,2));
console.log(slim(5,6));
