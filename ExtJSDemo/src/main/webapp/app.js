Ext.onReady(function() {

	Ext.MessageBox.show({
		title : 'Hold on there cowboy!',
		msg : "We're doing something...",
		progressText : 'Initializing...',
		width : 300,
		progress : true,
		closable : false
	});
	var updateFn = function(num) {
		setTimeout(function() {
			if (num == 6) {
				Ext.MessageBox.updateProgress(100, 'All Items saved !!');
				Ext.Function.defer(Ext.MessageBox.hide, 1500, Ext.MessageBox);
			} else {
				var i = num / 6;
				var pct = Math.round(100 * i);
				Ext.MessageBox.updateProgress(i, pct + '% completed');
			}
		}, i * 500);
	};
	for (var i = 1; i < 7; i++) {
		console.log("i " + i);
		updateFn(i);
		
	}

});
