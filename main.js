var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');
//var roleTransit = require('role.transit');
//var roleFilling = require('role.filling');

module.exports.loop = function () {

    var tower = Game.getObjectById('bd622beb134ede5');
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

    if(harvesters.length < 8) {
        var newName = Game.spawns['Darkosto1'].createCreep([WORK,WORK,CARRY,MOVE,], 'Harvester' + (Math.floor(Math.random() * 65534) + 1), {role: 'harvester'});
        console.log('Spawning new harvester: ' + newName);
    }
//Spawn New Builders  


    
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    //var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
    
    if(builders.length < 3 && harvesters.length > 2 && ConstructionSite.length > 0) {
        var newName = Game.spawns['Darkosto1'].createCreep([WORK,CARRY,MOVE], 'Builder' + (Math.floor(Math.random() * 65534) + 1), {role: 'builder'});
        console.log('Spawning new builder: ' + newName);
    }
    
    
    
    //console.log(FIND_SOURCES)
    
    
    
    
    
//Spawn New Upgrader
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');

    if(upgraders.length < 4 && harvesters.length > 2) {
        var newName = Game.spawns['Darkosto1'].createCreep([WORK,CARRY,MOVE], 'Upgrader' + (Math.floor(Math.random() * 65534) + 1), {role: 'upgrader'});
        console.log('Spawning new upgrader: ' + newName);
    } 
//Spawn New repairer 
    var repairer = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');

    if(repairer.length < 1 && harvesters.length > 2 && upgraders.length > 1 && builders.length > 1 ) {
        var newName = Game.spawns['Darkosto1'].createCreep([WORK,CARRY,MOVE], 'Repairer' + (Math.floor(Math.random() * 65534) + 1), {role: 'repairer'});
        console.log('Spawning new repairer: ' + newName);
    }



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
        if(creep.memory.role == 'repairer') {
            roleRepairer.run(creep);
        }
//        if(creep.memory.role == 'filling') {
//            roleFilling.run(creep);
//        }
        
//        if(creep.carry.energy == 50 && memory.role == 'filling') { 
//        creep.say('Upgrading!');
//        roleUpgrader.run(creep);
//        }
        
//        if(creep.room.name !== 'W7N7') {
//            roleTransit.run(creep);
//        }
        
    }
}