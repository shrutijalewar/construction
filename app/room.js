'use strict';

function Room(name, length, width, height, floor, color){
  this.name = name;
  this.length = parseInt(length);
  this.width = parseInt(width);
  this.height = parseInt(height);
  this.floor = floor;
  this.color = color;
}

Room.prototype.area = function()
{
   return this.length * this.width;
};
  
Room.prototype.costwall = function()
{
  return 0.5 * 2 * this.height * (this.length + this.width);
};


Room.prototype.costfloor = function()
{
  if(this.floor === 'carpet'){return this.area() * 15;}else
  if(this.floor === 'tile'){return this.area() * 12;}else
  if(this.floor === 'wood'){return this.area() * 10;} 
  };

Room.prototype.cost = function()
{
return this.costwall() + this.costfloor();
};

/*
Room.prototype.cost = function()
{
var rate, total = 0;
switch(this.floor)
{
  case 'carpet':
    rate = 15;
    break;
  case 'tile':
    rate = 12;
    break;
  case 'wood':
    rate = 10;
}

total += rate * this.area();
total += 0.5 * 2 * this.height * (this.length + this.width);

return total;
};
*/
module.exports = Room;

