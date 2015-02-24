Ext.define('My.model.Invoice', {
	extend : 'Ext.data.Model', 
	idProperty : 'invoiceId',
	fields : [ 
	{
		name : 'invoiceId',
		type : 'int'
	}, {
		name : 'taxId'
	}, {
		name : 'dateIssued',
		type : 'date',
		dateFormat : 'm/d/Y'
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
	} ]/*,
	hasMany : [ {
		model : 'My.model.Item',
		name : 'getItems'
	} ]*/
});
