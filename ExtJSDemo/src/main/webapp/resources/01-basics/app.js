Ext.onReady(function() {

	var myTpl = Ext.create('Ext.Template', [
			'<div style="background-color: {color};">',
			'<b> Welcome, </b> {name}<br />', '</div>' ]);
	
	myTpl.compile();

	var win = Ext.create('Ext.container.Viewport', {

		// closable : false,
		// maximized : true,
		layout : {
			type : 'border',
			padding : 2
		},
		items : [ {
			region : 'north',
			margins : '0 0 5 0',
			title : 'Consultant Home',
			header : {
				titleAlign : 'center'
			},
			height : 60,
		    tpl: myTpl,
		    data: {name: 'LeVeon', color : 'white'}
		}, {
			region : 'west',
			xtype : 'panel',
			title : 'Navigation',
			width : 200,
			split : true,
			collapsible : false,
			floatable : false
		}, {
			region : 'center',
			xtype : 'tabpanel',
			items : [
			/*
			 * { rtl : false, title : 'Bogus Tab', html : '<p>Window
			 * configured with:</p><pre style="margin-left:20px"><code>header:
			 * {\n titlePosition: 2,\n titleAlign: "center"\n},\nmaximizable:
			 * true,\ntools: [{type: "pin"}],\nclosable: true</code></pre>' }, {
			 * title : 'Another Tab', html : 'Hello world 2' }, { title :
			 * 'Closable Tab', html : 'Hello world 3', closable : true }
			 */]
		} ]
	}).show();
	

});
