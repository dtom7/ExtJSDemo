Ext.onReady(function() {

	var myTpl = Ext.create('Ext.Template', [
			'<div style="background-color: {color};">',
			'<b> Welcome: </b> {name}<br />', '</div>' ]);

	myTpl.compile();

	var win = Ext
			.create(
					'Ext.container.Viewport',
					{
						layout : {
							type : 'border',
							//padding : 2
						},
						items : [
								{
									region : 'north',
									margins : '0 0 0 0',
									//title : 'Consultant Home',
									height : 70,
/*									tpl : myTpl,
									data : {
										name : 'Carl',
										color : 'white'
									}*/
									html : "<div id='header'><table><tr><td class='td-left-data'>Welcome, Don</td><td></td><td class='td-right-data'>Logout</td></tr></table></div>"
								},
								{
									region : 'west',
									xtype : 'panel',
									title : 'Navigation',
									width : 200,
									split : true,
									collapsible : true,
									floatable : false
								}, {
									region : 'center',
									xtype : 'tabpanel',
									items : [
									/*
									 * { rtl : false, title : 'Bogus Tab', html : '<p>Window
									 * configured with:</p><pre style="margin-left:20px"><code>header:
									 * {\n titlePosition: 2,\n titleAlign:
									 * "center"\n},\nmaximizable: true,\ntools:
									 * [{type: "pin"}],\nclosable: true</code></pre>' }, {
									 * title : 'Another Tab', html : 'Hello
									 * world 2' }, { title : 'Closable Tab',
									 * html : 'Hello world 3', closable : true }
									 */]
								},{
									region : 'south',
									xtype : 'panel',
									height : 20,
									html: 'Southern Stuff here'
								}  ]
					}).show();

});
