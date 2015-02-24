Ext.define('My.store.Invoices', {
	extend : 'Ext.data.Store',
	model : 'My.model.Invoice',
	proxy : {
		type : 'ajax',	
		filters: {
            // filter the data to only include users with the name 'Ed'
            property: 'name',
            value: 'Ed'
        },
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