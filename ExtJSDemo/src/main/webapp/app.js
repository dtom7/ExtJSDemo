Ext.onReady(function() {

	var win;
	var newWindow = function(btn) {
		if (win === undefined || win.isDestroyed === true) {
			console.log('window created ..');
			win = Ext.create('Ext.window.Window', {
				//animateTarget : btn.el,
				html : 'My first vanilla Window',
				closeAction : 'hide',
				id : 'myWin',
				height : 200,
				width : 300,
				constrain : false
			});
			console.log('win is - ' + win.getId());
		}
		win.show();
	};
	new Ext.Button({
		renderTo : Ext.getBody(),
		text : 'Open my Window',
		style : 'margin: 100px',
		handler : newWindow
	});
/*	var comp;
	console.log('comp is - ' + comp);
	comp = Ext.create('Ext.Component', {
		listeners : {
			beforedestroy : function(comp) {
				console.log('beforedestroy .. ');
			},
			destroy : function(comp) {
				console.log('destroy .. ');
			}
		}
	});
	console.log('comp is - ' + comp);
	console.log('comp id is - ' + comp.isDestroyed);
	comp.destroy();
	console.log('comp is - ' + comp);
	console.log('comp id is - ' + comp.isDestroyed);*/
});
