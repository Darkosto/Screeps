var role_repairer = {
  /** @param {Creep} creep **/
  run: function (creep) {
    //Repair

    console.log(creep.store[RESOURCE_ENERGY], creep.store.getCapacity());
    if (creep.memory.repairing && creep.store[RESOURCE_ENERGY] == 0) {
      creep.memory.repairing = false;
      creep.say("collecting!");
    }

    if (!creep.memory.repairing && creep.store[RESOURCE_ENERGY] == 50) {
      creep.memory.repairing = true;
      creep.say("searching!");
    }

    if (creep.memory.repairing) {
      const targets = creep.room.find(FIND_STRUCTURES, {
        filter: (object) => object.hits < object.hitsMax,
      });

      targets.sort((a, b) => a.hits - b.hits);

      if (targets.length > 0) {
        if (creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
          creep.moveTo(targets[0], { visualizePathStyle: { stroke: "blue" } });
          creep.say("fixing!");
          console.log(targets);
        }
      }
    } else {
      var sources = creep.room.find(FIND_SOURCES_ACTIVE);
      if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
        creep.moveTo(sources[0]);
      }
    }
  },
};

module.exports = role_repairer;
