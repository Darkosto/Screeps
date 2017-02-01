var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
//var roleRepairer = require('role.repairer');

module.exports.loop = function () {

    var tower = Game.getObjectById('c9efb527c2edc0c4e7b715aa');
    if(tower) {
        var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => structure.hits < structure.hitsMax
        });
        if(closestDamagedStructure) {
            tower.repair(closestDamagedStructure);
        }

        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower.attack(closestHostile);
        }
    }

    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }
//Spawn New Harvester
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');

    if(harvesters.length < 3) {
        var newName = Game.spawns['Darkosto1'].createCreep([WORK,CARRY,MOVE], 'Harvester' + (Math.floor(Math.random() * 65534) + 1), {role: 'harvester'});
        console.log('Spawning new harvester: ' + newName);
    }
//Spawn New Builders  
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');

    if(builders.length < 4) {
        var newName = Game.spawns['Darkosto1'].createCreep([WORK,CARRY,MOVE], 'Builder' + (Math.floor(Math.random() * 65534) + 1), {role: 'builder'});
        console.log('Spawning new builder: ' + newName);
    }    
//Spawn New Upgrader
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');

    if(upgraders.length < 2) {
        var newName = Game.spawns['Darkosto1'].createCreep([WORK,CARRY,MOVE], 'Upgrader' + (Math.floor(Math.random() * 65534) + 1), {role: 'upgrader'});
        console.log('Spawning new upgrader: ' + newName);
    } 
//Spawn New repairer 
//    var repairer = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');
//
//    if(repairer.length < 1) {
//        var newName = Game.spawns['Darkosto1'].createCreep([WORK,CARRY,MOVE], 'Repairer' + (Math.floor(Math.random() * 65534) + 1), {role: 'repairer'});
//        console.log('Spawning new repairer: ' + newName);
//    }  
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
//        if(creep.memory.role == 'repairer') {
//            roleRepairer.run(creep);
//        }        
    }
}