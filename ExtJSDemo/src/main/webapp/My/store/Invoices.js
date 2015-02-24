Ext.define('My.store.Invoices', {
	extend : 'Ext.data.Store',
	model : 'My.model.Invoice',
	proxy : {
		type : 'ajax',
		// url : 'REST/getInvoices',
		api : {
			create : 'REST/postInvoices',
			read : 'REST/getInvoices',
			update : 'serverside/update',
			destroy : 'serverside/remove'
		},
		reader : {
			type : 'json',
			root : 'data'
		},
		writer : {
			type : 'json',
			allowSingle : false
		}
	}
});