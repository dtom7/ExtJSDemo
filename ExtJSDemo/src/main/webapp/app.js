Ext.require("My.model.Invoice");
Ext.require("My.model.Item");
Ext.require("My.store.Invoices");
Ext.onReady(function() {

	var panel1 = {
		html : 'I am Panel1',
		id : 'panel1',
		frame : false,
		height : 100
	};
	var panel2 = {
		html : '<b>I am Panel2</b>',
		id : 'panel2',
		frame : true
	};
	var myWin = Ext.create('Ext.window.Window', {
		id : 'myWin',
		height : 400,
		width : 400,
		items : [ panel1, panel2 ]
	});
	myWin.show();

});
