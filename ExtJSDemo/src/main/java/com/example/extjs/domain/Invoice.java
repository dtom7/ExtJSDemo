package com.example.extjs.domain;

import java.util.Date;

public class Invoice {

	private int invoiceId;
	private String taxId, name, address;
	private String dateIssued;

	public Invoice(int invoiceId, String taxId, String name, String address,
			String dateIssued) {
		super();
		this.invoiceId = invoiceId;
		this.taxId = taxId;
		this.name = name;
		this.address = address;
		this.dateIssued = dateIssued;
	}
	
	public Invoice() {
		super();
	}

	public int getInvoiceId() {
		return invoiceId;
	}

	public void setInvoiceId(int invoiceId) {
		this.invoiceId = invoiceId;
	}

	public String getTaxId() {
		return taxId;
	}

	public void setTaxId(String taxId) {
		this.taxId = taxId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getDateIssued() {
		return dateIssued;
	}

	public void setDateIssued(String dateIssued) {
		this.dateIssued = dateIssued;
	}

	@Override
	public String toString() {
		return this.invoiceId + " -- " + this.taxId + " -- " + this.name + " -- " + this.address
				 + " -- " +  this.dateIssued;
	}

}
