var roleFilling = {

    /** @param {Creep} creep **/
    run: function(creep) {
	    if(creep.carry.energy != 100) {
            var sources = creep.room.find(FIND_SOURCES_ACTIVE);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
               creep.memory.role = 'filling';
            }
            
}
    }
};

module.exports = roleFilling;