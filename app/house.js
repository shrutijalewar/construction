'use strict';

function House(name, material, year){
    this.name = name;
    this.material = material;
    this.year = parseInt(year);
    this.rooms = [];
}

House.prototype.area = function()
{
  var harea = 0;
  for (var i = 0; i < this.rooms.length; i++)
{
  harea += this.rooms[i].area();
}
  return harea;
};

module.exports = House;

