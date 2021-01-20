var role_worker2 = {
        var worker2 = Game.creeps['Worker2'];

        //Worker 2
        // if creep has no energy, go to the energy source and harvest some
        if (worker2.store[RESOURCE_ENERGY] == 0) {


            // make an easy reference to the energy source
            var source = Game.getObjectById('71ac0772347ffe6');
            // move creep to energy source
            worker2.moveTo(source);
            worker2.harvest(source);
        } else {
            var controller = mycreep.room.controller;
            mycreep.moveTo(controller);
            mycreep.upgradeController(controller);
        };
        module.exports = role_worker2;