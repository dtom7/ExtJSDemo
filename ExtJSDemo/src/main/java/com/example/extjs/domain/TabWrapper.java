package com.example.extjs.domain;

import java.util.List;

public class TabWrapper {
	
	private boolean success;
	private List<Tab> data;
	public TabWrapper(boolean success, List<Tab> data) {
		super();
		this.success = success;
		this.data = data;
	}
	public TabWrapper() {
		super();
	}
	public boolean isSuccess() {
		return success;
	}
	public void setSuccess(boolean success) {
		this.success = success;
	}
	public List<Tab> getData() {
		return data;
	}
	public void setData(List<Tab> data) {
		this.data = data;
	}
	
	

}
