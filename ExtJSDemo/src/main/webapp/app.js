Ext.require("My.model.Invoice");
Ext.require("My.model.Item");
Ext.require("My.store.Invoices");
Ext.onReady(function() {

	Ext.create('Ext.container.Viewport', {
		layout : 'border',
		items : [ {
			height : 75,
			region : 'north',
			title : 'Does Santa live here?'
		}, {
			width : 150,
			region : 'west',
			title : 'The west region rules'
		}, {
			region : 'center',
			title : 'No, this region rules!'
		} ]
	});

});
