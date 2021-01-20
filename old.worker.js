var role_worker = {

    /** @param {Creep} creep **/
    run: function(creep) {
        

            if(creep.carry.energy < creep.carryCapacity) {
            var sources = creep.room.find(FIND_SOURCES_ACTIVE);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);

            }
            creep.say('collecting');
        }
       
        else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_CONTROLLER) && structure.energy < structure.energyCapacity;
                                //structure.structureType == STRUCTURE_CONTAINER)
                                //structure.structureType == STRUCTURE_EXTENSION ||
                                //structure.structureType == STRUCTURE_SPAWN ||
                                //structure.structureType == STRUCTURE_TOWER) 
                    }
            });
            
            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }
            creep.say('charging');
        }
    }
};

module.exports = role_worker;