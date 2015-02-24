Ext.require("My.model.Invoice");
Ext.require("My.model.Item");
Ext.require("My.store.Invoices");
Ext.onReady(function() {

	var invoice1 = Ext.create("My.model.Invoice", {
		//invoiceId : 1010,
		taxId : '12345',
		dateIssued : '01/25/2012',
		name : 'Mr John',
		address : '123 ST 987 Los Angeles, CA. USA'
	});

/*	invoice1.getItems().add({
		quantity : 10,
		description : 'Development services',
		unitPrice : 65,
		subtotal : 650
	}, {
		quantity : 20,
		description : 'Design services',
		unitPrice : 55,
		subtotal : 1100
	});*/

	var invoice2 = Ext.create("My.model.Invoice", {
		//invoiceId : 1011,
		taxId : "VI8732",
		dateIssued : '03/13/2013',
		name : "Eddy Smith",
		address : "961 ST, NY USA"
	});
	
	var store = Ext.create("My.store.Invoices");
	store.load(function(){ 
/*	  store.each(function(record){ 
		console.log(record.get("name") + ' -- ' + record.get("dateIssued"));
	  });*/
		console.log('Count1: ' + store.count());
		
		store.add([invoice1, invoice2]);

		store.each(function(record, index) {
			console.log('All: ' + record.get('invoiceId'), record.get("name"));
		});
		console.log('Count2: ' + store.count());
		store.sync();
		
	});


/*	var newelements = store.getNewRecords();
	Ext.each(newelements, function(record, index) {
		console.log('New: ' + record.get('invoiceId'), record.get("name"));
	});
	
	invoice2.set('name', 'Vince C');

	var updated = store.getUpdatedRecords(); // Step 3
	Ext.each(updated, function(record, index) {
		console.log('Updated: ' + record.getId(), record.get("name"));
	});*/

});
