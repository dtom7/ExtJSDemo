Ext.onReady(function() {
	
	var panel = Ext.create('Ext.tab.Panel', {
	    renderTo: Ext.getBody(),
	    height: 200,
	    width: 300,
	    items: [
	        {
	            // Explicitly define the xtype of this Component configuration.
	            // This tells the Container (the tab panel in this case)
	            // to instantiate a Ext.panel.Panel when it deems necessary
	            xtype: 'panel',
	            title: 'Login',
	            html: 'The first tab',
	            listeners: {
	                activate: function() {
	                    Ext.MessageBox.alert('Rendered One', 'Tab One was rendered.');
	                }
	            }
	        },
	        {
	            // this component configuration does not have an xtype since 'panel' is the default
	            // xtype for all Component configurations in a Container
	            title: 'Forgot Password?',
	            html: 'The second tab',
	            listeners: {
	            	activate: function() {
	                    Ext.MessageBox.alert('Rendered One', 'Tab Two was rendered.');
	                }
	            }
	        }
	    ]
	});
	
	panel.center();
	
});