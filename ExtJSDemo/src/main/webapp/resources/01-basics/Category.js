Ext.define("Category", {
	extend : "Ext.data.Model",
    fields : [ 
               {name: 'id',   type: 'int'},
               {name: 'name',  type: 'string'},
               {name: 'description',  type: 'string'}
              ],
    constructor : function(config) {
    	console.log("Category constructor ..");
    	this.callParent(arguments);
    }

});

