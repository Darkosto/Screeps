// Creep to move into next area and capture

var role_scout = {

    run: function(creep) {

    var home = Game.room(W8N3);
    var away = Game.room(W7N3);
    
    //if (creep.)
            creep.say('Testing');
            //console.log('hi!')
            
            
            creep.moveTo(Game.flags.Room2);

            creep.claimController('a2db077296e87b8');
            
            //if (creep.room)

/*
a2db077296e87b8




*/
        }
    };
module.exports = role_scout;
        /*
            if(creep.room.name == 'W7N7');
        //    creep.memory.role = 'harvester'
            creep.say('Switching Jobs');
        //   creep.moveTo(11,13);
        */
/*
   if (!this.my) {
     return C.ERR_NOT_OWNER;
   }
   if (data(this.id).spawning) {
     return C.ERR_BUSY;
   }
   if (this.room.mode == C.MODE_WORLD) {
     var controllersClaimed = _.filter(runtimeData.userObjects, {type: 'controller'}).length;
     if (controllersClaimed && (!runtimeData.user.gcl || runtimeData.user.gcl < C.GCL_MULTIPLY * Math.pow(controllersClaimed, C.GCL_POW))) {
       return C.ERR_GCL_NOT_ENOUGH;
     }
   }
   if (!target || !target.id || !register.structures[target.id] || !(target instanceof globals.Structure)) {
     return C.ERR_INVALID_TARGET;
   }
   if (!target.pos.isNearTo(this.pos)) {
     return C.ERR_NOT_IN_RANGE;
   }
   if (target.structureType != 'controller') {
     return C.ERR_INVALID_TARGET;
   }
   if (target.owner) {
     return C.ERR_INVALID_TARGET;
   }
   intents[this.id] = intents[this.id] || {};
   intents[this.id].claimController = {id: target.id};
   return C.OK;
 }
*/

