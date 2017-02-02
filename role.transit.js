var roleTransit = {
  
    /** @param {Creep} creep **/
    run: function(creep) {

    creep.memory.role = 'transit'
    if(creep.room.name == 'W8N7');
//    creep.say('Headed Home!');
    var posInAnotherRoom = new RoomPosition(11, 13, 'W7N7');
    creep.moveTo(posInAnotherRoom);    

    if(creep.room.name == 'W7N7');
//    creep.memory.role = 'harvester'
    creep.say('Switching Jobs');
//   creep.moveTo(11,13);


}
};
module.exports = roleTransit;