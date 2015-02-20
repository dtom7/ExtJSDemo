Ext.define('My.Person', {
    
	config: {
		name: 'Test',		
		
	},


    constructor: function(config) {
       this.initConfig(config);
    },
    
    applyName: function(name) {
    	console.log(Ext.getDisplayName());
        if (!Ext.isString(name) || name.length === 0) {
        	throw new Error('['+ Ext.getDisplayName() +'] Some message here');
        }
        else {
            return name;
        }
    },

    eat: function(foodType) {
        alert(this.name + " is eating: " + foodType);
    }
});