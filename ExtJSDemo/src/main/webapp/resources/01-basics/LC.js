Ext.define('LC', {	
	extend : 'Ext.Component',
	initComponent : function() {
		var me = this;
		me.width = 200;
		me.height = 200;
		me.border = true;
		me.html = {
			tag : 'div',
			html : 'X',
			style : {
				'float' : 'right',
				'padding' : '10px',
				'background-color' : 'red',
				'color' : 'black',
				'font-weight' : 'bold'
			}
		};
		me.myOwnProperty = [ 1, 2, 3, 4 ];
		//me.callParent();
		console.log('1. initComponent');
	},
	beforeRender : function() {
		console.log('2. beforeRender');
		this.callParent(arguments);
	},
	onRender : function() {
		console.log('3. onRender');
		this.callParent(arguments);
		this.el.setStyle('background-color', 'white');
		this.el.setStyle("border","1px solid #333");
	},
	afterRender : function() {
		console.log('4. afterRender');
		this.el.down('div').on('click', this.myCallback, this);
		this.callParent(arguments);
	},
	beforeDestroy : function() {
		console.log('5. beforeDestroy');
		this.callParent(arguments);
	},
	onDestroy : function() {
		console.log('6. onDestroy');
		delete this.myOwnProperty;
		this.el.down('div').un('click', this.myCallback);
		this.callParent(arguments);
	},
	myCallback : function() {
		var me = this;
		Ext.Msg.confirm('Confirmation',
				'Are you sure you want to close thispanel?', function(btn) {
					if (btn === 'yes') {
						me.destroy();
					}
				});
	}
});