var role_worker = require('role.worker');
var role_worker_midpoint = require('role.worker2');
var role_constructor = require('role.constructor');
var role_repairer = require('role.repairer');
var role_scout = require('role.scout');

module.exports.loop = function() {

    // Spawn New Worker
    var workers = _.filter(Game.creeps, (creep) => creep.memory.role == 'worker');

    if (workers.length < 6) {
        var newName = Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], 'worker' + (Math.floor(Math.random() * 65534) + 1), {
            memory: {
                role: 'worker'
            }
        });
        console.log('Spawning new worker: ' + newName);
    }

    // Spawn New Midpoint Worker
    var midworkers = _.filter(Game.creeps, (creep) => creep.memory.role == 'midworker');

    if (midworkers.length < 1) {
        var newName = Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE, MOVE], 'MidPointWorker' + (Math.floor(Math.random() * 65534) + 1), {
            memory: {
                role: 'midworker'
            }
        });
        console.log('Spawning new midworker: ' + newName);
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
    var repairs = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');
    //var targets = creep.room.find(FIND_CONSTRUCTION_SITES);

    //if(repairer.length < 3 && harvesters.length > 2 && ConstructionSite.length > 0) {
    if (repairs.length < 2) {
        var newName = Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], 'repairer' + (Math.floor(Math.random() * 65534) + 1), {
            memory: {
                role: 'repairer'
            }
        });
        console.log('Spawning new repairer: ' + newName);
    }
    ////
    // Scout
    ////
    var scouts = _.filter(Game.creeps, (creep) => creep.memory.role == 'scout');
    //if(capturer.length < 3 && harvesters.length > 2 && ConstructionSite.length > 0) {
    if (scouts.length < 1) {
        var newName = Game.spawns['Spawn1'].spawnCreep([MOVE, CLAIM, MOVE], 'scout' + (Math.floor(Math.random() * 65534) + 1), {
            memory: {
                role: 'scout'
            }
        });
        console.log('Spawning new scout: ' + newName);
    }
    
    for (var name in Game.creeps) {
        var creep = Game.creeps[name];
        if (creep.memory.role == 'worker') {
            role_worker.run(creep);
        }
        if (creep.memory.role == 'midworker') {
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
        if (creep.memory.role == 'scout') {
            role_scout.run(creep);
        }

    }
}