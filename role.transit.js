var roleTransit = {
  
    /** @param {Creep} creep **/
    run: function(creep) {



	        creep.memory.building = false;
    creep.say('Headed Home!');    
        creep.moveTo(Game.room['W7N7'].controller);

//    creep.memory.role = 'transit';
//    creep.say('Headed Home!');    
//    creep.moveTo(Game.room['W7N7'].controller);


}
};
module.exports = roleTransit;