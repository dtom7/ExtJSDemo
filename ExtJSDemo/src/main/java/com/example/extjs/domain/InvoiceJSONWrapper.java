package com.example.extjs.domain;

import java.util.List;

public class InvoiceJSONWrapper {
	
	private boolean success;
	private List<Invoice> data;
	
	public InvoiceJSONWrapper(boolean success, List<Invoice> data) {
		super();
		this.success = success;
		this.data = data;
	}

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public List<Invoice> getData() {
		return data;
	}

	public void setData(List<Invoice> data) {
		this.data = data;
	}
	
}
