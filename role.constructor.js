var role_constructor = {
  /** @param {Creep} creep **/
  run: function (creep) {
    if (creep.memory.building && creep.carry.energy == 0) {
      creep.memory.building = false;
      creep.say("harvesting");
    }
    if (!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
      creep.memory.building = true;
      creep.say("building");
    }

    var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
    if (targets.length == 0) {
      creep.say("BROKE");
      creep.memory.role = "worker";
      creep.say("Switching to Working!");
    }

    if (creep.memory.building) {
      var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
      if (targets.length) {
        creep.memory.working = false;
        targets.sort(function (a, b) {
          return a.progress / a.progressTotal - b.progress / b.progressTotal;
        });
        if (creep.build(targets[targets.length - 1]) == ERR_NOT_IN_RANGE) {
          creep.moveTo(targets[targets.length - 1]);
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

module.exports = role_constructor;
