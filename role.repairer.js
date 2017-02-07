var roleRepairer = {
  
    /** @param {Creep} creep **/
    run: function(creep) {

        if(creep.memory.repairing && creep.carry.energy == 0) {
            creep.memory.repairing = false;
        }
        if(!creep.memory.repairing && creep.carry.energy == creep.carryCapacity) {
            creep.memory.repairing = true;
        }



    var repairTargets = creep.pos.findInRange(FIND_STRUCTURES, 1, {
        filter: function(object) {
            return object.hits < object.hitsMax
                && object.hitsMax - object.hits > REPAIR_POWER;
        }
    });
    repairTargets.sort(function (a,b) {return (a.hits - b.hits)});
    if (repairTargets.length > 0)
        creep.repair(repairTargets[0]);



         else {
            var sources = creep.room.find(FIND_SOURCES_ACTIVE);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        }
    }
}; 
module.exports = roleRepairer;