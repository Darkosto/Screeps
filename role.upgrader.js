var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {
		
		//Trying to fill up
	    	if(creep.memory.filling) {
            		var sources = creep.room.find(FIND_SOURCES_ACTIVE);
            		if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
               			creep.moveTo(sources[0]);
            		}
        	}
		
		//Not filling up, try and upgrade.
         	if(!creep.memory.filling && creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                	creep.moveTo(creep.room.controller);
            	}
			
		//If our creep wasn't filling up and is out of energy:	
		if (creep.carry.energy == 0 && !creep.memory.filling) {
			creep.memory.filling = true;
		}
		
		//If our creep is filling up and is full of energy:
		if (creep.carry.energy == 50 && creep.memory.filling) {
			creep.memory.filling = false;
		}
	}
};

// Use creep.carryCapacity for max capacity



module.exports = roleUpgrader;