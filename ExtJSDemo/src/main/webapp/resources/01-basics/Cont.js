Ext.define("Cont", {
	extend : "Ext.container.Container", // Step 1
	border : true,
	padding : 20,
	initComponent : function() {
		var me = this;
		Ext.each(me.items, function(item) { // Step 2
			item.style = {
				backgroundColor : "#f4f4f4",
				border : "1px solid #333"
			};
			item.padding = 10;
			item.height = 100;
			item.width = 50;
		});
		me.callParent();
	},
	onRender : function() {
		var me = this;
		me.callParent(arguments);
		if (me.border) { // Step 3
			me.el.setStyle("border", "2px solid #333");
		}
	}
});