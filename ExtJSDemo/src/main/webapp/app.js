Ext.onReady(function() {

	var tabPanel = Ext.create('Ext.tab.Panel', {
		activeTab : 0,
		itemId : 'myTPanel'
	});

	Ext.create('Ext.window.Window', {
		height : 300,
		width : 400,
		layout : 'fit',
		items : tabPanel
	}).show();

	Ext.Ajax.request({
		url : "REST/getTabs",
		success : function(response, options) {
			console.log('ajax success');
			var obj = Ext.decode(response.responseText);
			console.log(obj.data);
			var tPanel = Ext.ComponentQuery.query('#myTPanel')[0];
			tPanel.add(obj.data);
			tPanel.setActiveTab('Tab_1');
		},
		failure : function(response, options) {
			console.log('ajax failed');
		}
	});



});
