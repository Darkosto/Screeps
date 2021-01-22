var role_worker_midpoint = {
  /** @param {Creep} creep **/
  run: function (creep) {
    // Carries energy to midpoint
    // Structure ID: 4d6a22924d8cba1
    console.log(creep.store[RESOURCE_ENERGY], creep.store.getCapacity());
    if (creep.memory.midpointing && creep.store[RESOURCE_ENERGY] == 0) {
      creep.memory.midpointing = false;
      creep.say("collecting!");
    }
    if (!creep.memory.midpointing && creep.store[RESOURCE_ENERGY] == 50) {
      creep.memory.midpointing = true;
      creep.say("Energizing!");
    }
    if (creep.memory.midpointing) {
      var targets = creep.room.find(FIND_STRUCTURES, {
        filter: (structure) => {
          return (
            (structure.structureType == STRUCTURE_STORAGE ||
              structure.structureType == STRUCTURE_EXTENSION ||
              structure.structureType == STRUCTURE_SPAWN) &&
            structure.energy < structure.energyCapacity
          );
          //structure.structureType == STRUCTURE_TOWER)
        },
      });
      if (targets.length > 0) {
        if (creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
          creep.moveTo(targets[0]);
        }
      }
      creep.say("charging");
      console.log(STRUCTURE_CONTAINER);
    } else {
      var sources = creep.room.find(FIND_SOURCES_ACTIVE);
      if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
        creep.moveTo(sources[0]);
      }
    }
  },
};

module.exports = role_worker_midpoint;
