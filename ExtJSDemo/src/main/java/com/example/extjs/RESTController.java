package com.example.extjs;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.extjs.domain.Greeting;
import com.example.extjs.domain.Invoice;
import com.example.extjs.domain.InvoiceJSONWrapper;
import com.example.extjs.domain.LoginWrapper;
import com.example.extjs.domain.LogoutWrapper;
import com.example.extjs.domain.Tab;
import com.example.extjs.domain.TabWrapper;
import com.example.extjs.domain.User;
import com.example.extjs.domain.UserWrapper;

@RestController
@RequestMapping("/REST")
public class RESTController {

	private static final String template = "Hello, %s!";
	private final AtomicLong counter = new AtomicLong();

	@RequestMapping("/greeting")
	public Greeting greeting(
			@RequestParam(value = "name", defaultValue = "World") String name) {
		return new Greeting(counter.incrementAndGet(), String.format(template,
				name));
	}

	@RequestMapping("/getInvoices")
	public InvoiceJSONWrapper getInvoices() {
		DateFormat df = new SimpleDateFormat("MM/dd/yyyy");

		List<Invoice> list = new ArrayList<>();
		list.add(new Invoice(1000, "12345", "Victor", "123 Main St", df
				.format(new Date())));
		list.add(new Invoice(1001, "12346", "Mark", "456 Main St", df
				.format(new Date())));
		list.add(new Invoice(1002, "12347", "Carl", "789 Main St", df
				.format(new Date())));
		list.add(new Invoice(1003, "12348", "Zen", "784 Main St", df
				.format(new Date())));
		list.add(new Invoice(1004, "12349", "Chris", "258 Main St", df
				.format(new Date())));
		list.add(new Invoice(1005, "12346", "Benny", "322 Main St", df
				.format(new Date())));
		list.add(new Invoice(1006, "12351", "Sunny", "951 Main St", df
				.format(new Date())));
		list.add(new Invoice(1007, "12352", "Kumar", "878 Main St", df
				.format(new Date())));
		list.add(new Invoice(1008, "12351", "Nino", "357 Main St", df
				.format(new Date())));
		list.add(new Invoice(1009, "12354", "Ivan", "985 Main St", df
				.format(new Date())));

		return new InvoiceJSONWrapper(true, list);
	}

	@RequestMapping(value = "/postInvoices", method = RequestMethod.POST)
	public boolean postInvoices(@RequestBody List<Invoice> list) {
		System.out.println("List size: " + list.size());
		for (Invoice invoice : list) {
			System.out.println(invoice);
		}
		return true;
	}

	@RequestMapping("/getTabs")
	public TabWrapper getTabs() {

		List<Tab> list = new ArrayList<>();
		list.add(new Tab("Tab - One", "Tab_1", "This is the first tab"));
		list.add(new Tab("Tab - Two", "Tab_2", "This is the second tab"));
		list.add(new Tab("Tab - Three", "Tab_3", "This is the third tab"));
		return new TabWrapper(true, list);
	}

	@RequestMapping(value = "/processLogin", method = RequestMethod.POST)
	public LoginWrapper processLogin(
			@RequestParam(value = "userId") String userId,
			@RequestParam(value = "password") String password) {
		System.out.println("userid: " + userId + " -- password: " + password);

		return new LoginWrapper(true, "Login Success");
	}
	
	@RequestMapping(value = "/processLogout")
	public LogoutWrapper processLogout() {
		System.out.println("Logout called ");

		return new LogoutWrapper(true, "Logout Success");
	}

	@RequestMapping("/getUser")
	public UserWrapper getUser() {

		return new UserWrapper(true, new User("Samuel"));
	}

}
