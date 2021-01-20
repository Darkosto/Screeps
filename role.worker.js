var role_worker = {

    /** @param {Creep} creep **/
    run: function(creep) {
        /*
        console.log(creep.store[RESOURCE_ENERGY], creep.store.getCapacity());
        if (creep.store[RESOURCE_ENERGY] < creep.store.getCapacity()) {
            var sources = creep.room.find(FIND_SOURCES_ACTIVE);
            if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);

            }
        } 
        */
        console.log(creep.store[RESOURCE_ENERGY], creep.store.getCapacity());
        if (creep.memory.working && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.working = false;
            creep.say('collecting!');
        }

        if (!creep.memory.working && creep.store[RESOURCE_ENERGY] == 50) {
            creep.memory.working = true;
            creep.say('test!');
        }



        if (creep.memory.working) {
            var targets = creep.room.find(FIND_MY_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_CONTROLLER) && structure.progress < structure.progressTotal;
                    //structure.structureType == STRUCTURE_EXTENSION
                    //structure.structureType == STRUCTURE_CONTAINER ||
                    //structure.structureType == STRUCTURE_SPAWN ||
                    //structure.structureType == STRUCTURE_TOWER
                }
            });
            console.log(targets)

            if (targets.length > 0) {
                if (creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }
        } else {
            var sources = creep.room.find(FIND_SOURCES_ACTIVE);
            if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        }
    }
};

module.exports = role_worker;