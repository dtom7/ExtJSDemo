package com.example.extjs.domain;

public class Tab {
	
	private String title, itemId, html;

	public Tab(String title, String itemId, String html) {
		super();
		this.title = title;
		this.itemId = itemId;
		this.html = html;
	}

	public Tab() {
		super();
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getItemId() {
		return itemId;
	}

	public void setItemId(String itemId) {
		this.itemId = itemId;
	}

	public String getHtml() {
		return html;
	}

	public void setHtml(String html) {
		this.html = html;
	}
	
}
