Ext.define('My.model.Invoice', {
	extend : 'Ext.data.Model', // Step 1
	idProperty : 'invoiceId',// Step 2
	fields : [ // Step 3
	{
		name : 'invoiceId',
		type : 'int'
	}, {
		name : 'taxId'
	}, {
		name : 'dateIssued',
		type : 'date',
		dateFormat : 'mm/dd/YYYY'
	}, {
		name : 'name'
	}, {
		name : 'address'
	} ],
	validations : [ {
		type : 'presence',
		field : 'taxId'
	}, {
		type : 'length',
		field : 'taxId',
		min : 5,
		max : 7
	}, {
		type : 'presence',
		field : 'name'
	}, {
		type : 'format',
		field : 'name',
		matcher : /^[\w ]+$/
	} ]
});
