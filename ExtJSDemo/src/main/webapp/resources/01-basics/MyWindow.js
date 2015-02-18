Ext.define("MyWindow", {

	extend : "Ext.window.Window",
	
	initComponent : function() {
		this.callParent();
		console.log("Init Component");
	},
	
	onRender : function() {
		this.callParent();
		console.log("On Render");
	},
	
	beforeDestroy : function() {
		this.callParent();
		console.log("B4 Destroy");
	},
	
	onDestroy : function() {
		this.callParent();
		console.log("On Destroy");
	},
	
    listeners: {
        beforeclose: function( window ) {
        	console.log("On beforeclose");
/*            Ext.Msg.confirm( 'Hey', 'Are you sure you want to close?', function( answer ) {
                if( answer == "yes" ) {
                   // window.destroy();
                	return true;
                } else {
                	return false;
                }
            } );*/
            return this.confirm();
        }
    },
	
	confirm : function() {
/*		Ext.Msg.confirm('Confirm', 'Are you sure you want to close?', function(btn) {
	        if (btn === 'yes') {
	            return true;
	        } else {
	            return false;
	        }
		});*/
	}

});