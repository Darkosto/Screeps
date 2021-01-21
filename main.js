var role_worker = require('role.worker');
var role_worker_midpoint = require('role.worker2');
var role_constructor = require('role.constructor');
var role_repairer = require('role.repairer');

module.exports.loop = function() {


    // Spawn New Worker
    var workers = _.filter(Game.creeps, (creep) => creep.memory.role == 'worker');

    if (workers.length < 4) {
        var newName = Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE, MOVE], 'Worker' + (Math.floor(Math.random() * 65534) + 1), {
            memory: {
                role: 'worker'
            }
        });
        console.log('Spawning new worker: ' + newName);
    }

    // Spawn New Midpoint Worker

    var mpworkers = _.filter(Game.creeps, (creep) => creep.memory.role == 'mpworker');

    if (mpworkers.length < 1) {
        var newName = Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE, MOVE], 'MidPointWorker' + (Math.floor(Math.random() * 65534) + 1), {
            memory: {
                role: 'mpworker'
            }
        });
        console.log('Spawning new mpworker: ' + newName);
    }


    // Construction
    var constructors = _.filter(Game.creeps, (creep) => creep.memory.role == 'constructor');
    //var targets = creep.room.find(FIND_CONSTRUCTION_SITES);

    //if(constructors.length < 3 && harvesters.length > 2 && ConstructionSite.length > 0) {
    if (constructors.length < 2 && ConstructionSite.length > 0) {
        var newName = Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE, MOVE], 'constructor' + (Math.floor(Math.random() * 65534) + 1), {
            memory: {
                role: 'constructor'
            }
        });
        console.log('Spawning new constructor: ' + newName);
    }

    // Repairer
    var repairer = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');
    //var targets = creep.room.find(FIND_CONSTRUCTION_SITES);

    //if(repairer.length < 3 && harvesters.length > 2 && ConstructionSite.length > 0) {
    if (repairer.length < 1) {
        var newName = Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE, MOVE], 'repairer' + (Math.floor(Math.random() * 65534) + 1), {
            memory: {
                role: 'repairer'
            }
        });
        console.log('Spawning new repairer: ' + newName);
    }


    for (var name in Game.creeps) {
        var creep = Game.creeps[name];
        if (creep.memory.role == 'worker') {
            role_worker.run(creep);
        }
        if (creep.memory.role == 'mpworker') {
            role_worker_midpoint.run(creep);
        }
        //if(creep.memory.role == 'upgrader') {
        //    roleUpgrader.run(creep);
        //}
        if (creep.memory.role == 'constructor') {
            role_constructor.run(creep);
        }
        if (creep.memory.role == 'repairer') {
            role_repairer.run(creep);
        }

    }
}