Ext
		.onReady(function() {

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
								// padding : 2
								},
								items : [
										{
											region : 'north',
											margins : '0 0 0 0',
											// title : 'Consultant Home',
											height : 70,
											/*
											 * tpl : myTpl, data : { name :
											 * 'Carl', color : 'white' }
											 */
											html : "<div id='header'><table><tr><td class='td-left-data'>Welcome, Don</td><td></td><td class='td-right-data'>Logout</td></tr></table></div>"
										}, {
											region : 'center',
											xtype : 'tabpanel',
											items : [

											]
										}, {
											region : 'south',
											xtype : 'panel',
											height : 20,
											html : 'Southern Stuff here'
										} ]
							}).show();

		});
