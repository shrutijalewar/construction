
// Creating 5 dogs in 5 different ways
 /* jshint -W069 */
/*global prompt:true*/

'use strict';

var dogs = [];

 var d1 = {};
 d1.name = 'fido';
 d1.age = 3;

 var d2 = {name: 'spot', age:5};

 var d3 = {};
 d3['name'] = 'lassy';
 d3['age'] = 9;

 var n = 'rex';
 var a = 11;
 var d4 = {name:n, age:a};

 var name = 'name';
 var age = 'age';
 var d5 = {};
 d5[name] = n;
 d5[age] = a;

 dogs.push(d1,d2,d3,d4,d5);

console.log('Dogs: ', dogs);
console.log(d1 instanceof Object);
console.log(d1 instanceof Dog);

//creating objects using a constructor
//


function Dog(name,age){this.name = name;
  this.age = age;
}
var d6 = new Dog('fluffy', 2);


console.log(d6);
console.log(d6 instanceof Object);
console.log(d6 instanceof Dog);


var prompt = require('sync-prompt').prompt;
var info = prompt('Would you like to enter dog info? (y/n) ');
while(info !== 'n'){
  name = prompt('Enter Name: ');
  age = prompt('Enter Age: ');
  var doglist = new Dog(name, age);
  dogs.push(doglist);
  info= prompt('would you like to enter dog info? (y/n) ');
}
console.log('All Dogs: ', dogs);


