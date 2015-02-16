Ext.define("Client", {
	config : {
		name : "John",
		lastName : "Doe"
	},
	constructor : function(config) {
		//Ext.apply(this, config || {});
		this.initConfig(config);
		console.log("I'm a new client!");
	}
});