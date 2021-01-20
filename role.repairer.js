  var role_repairer = {

      /** @param {Creep} creep **/
      run: function(creep) {

          //Repair
          // if creep has no energy, go to the energy source and harvest some
          if (creep.store[RESOURCE_ENERGY] === 0) {
              // make an easy reference to the energy source
              var source = Game.getObjectById('26f20772347f879');
              // move my creep to the energy source and harvest energy
              creep.moveTo(source);
              creep.harvest(source);
              creep.say('collecting!');
          } else {


              const targets = creep.room.find(FIND_STRUCTURES, {
                  filter: object => object.hits < object.hitsMax
              });

              targets.sort((a, b) => a.hits - b.hits);

              if (targets.length > 0) {
                  if (creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
                      creep.moveTo(targets[0]);
                      creep.say('repairing!');
                  }
              }
          }
      }
  };

  module.exports = role_repairer;