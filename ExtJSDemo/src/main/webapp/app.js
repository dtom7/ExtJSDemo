Ext.require("My.model.Invoice");
Ext.onReady(function() {

	var invoice = Ext.create("My.model.Invoice", {
	/*
	 * invoiceId : 1000, taxId : '12345', dateIssued : '01/01/2014', name : 'Mr.
	 * Doe', address : '123 ST 987 LA. USA'
	 */
	});
	invoice.set({
		invoiceId : 1001,
		taxId : '12345',
		dateIssued : '01/01/2014',
		name : 'Mr. Doe',
		address : '123 ST 987 LA. USA'
	});

	if (invoice.isValid()) { // Step 2
		console.log('Everything is fine!');
	} else {
		var errors = invoice.validate(); // Step 3
		errors.each(function(error) {
			console.log(error.field, error.message);
		});

	}

});
