var Room = require('./room.js');
var House = require('./house.js');

var r1 = new Room('living', 10, 12, 10, 'carpet', 'aqua');
var r2 = new Room('dining', 8, 10, 10, 'tile', 'green');
var r3 = new Room('bedroom', 9, 11, 10,'wood', 'orange');

console.log(r1, r2, r3);

var h1 = new House('M4', 'brick', 1993);
var h2 = new House('M5', 'stone', 1785);
var h3 = new House('M6', 'straw', 1832);

h1.rooms.push(r1,r2,r3);
console.log(h1, h2, h3);

console.log('the area of room is ', r1.area());  
console.log('the area of room is ', r2.area());  
console.log('the area of room is ', r3.area());  

var harea = 0;
for (var i = 0; i < h1.rooms.length; i++)
{
  harea += h1.rooms[i].area();
}

console.log('Area of the House1 is', harea);

console.log('Total area of the house is ', h1.area());

console.log('the cost of room1 is ', r1.costwall());  
console.log('the cost of room1 is ', r2.costwall());  
console.log('the cost of room2 is ', r3.costwall());  

console.log('the cost of room3 is ', r1.costfloor());  
console.log('the cost of room2 is ', r2.costfloor());  
console.log('the cost of room3 is ', r3.costfloor());  

console.log('the cost of room1 is ', r1.cost());  
console.log('the cost of room2 is ', r2.cost());  
console.log('the cost of room3 is ', r3.cost());  


