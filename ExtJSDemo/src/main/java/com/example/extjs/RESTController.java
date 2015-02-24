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

@RestController
@RequestMapping("/REST")
public class RESTController {
	
	
    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @RequestMapping("/greeting")
    public Greeting greeting(@RequestParam(value="name", defaultValue="World") String name) {
        return new Greeting(counter.incrementAndGet(),
                            String.format(template, name));
    }
    
    @RequestMapping("/getInvoices")
    public InvoiceJSONWrapper getInvoices() {
    	DateFormat df = new SimpleDateFormat("MM/dd/yyyy");
    	
        List<Invoice> list = new ArrayList<>();
        list.add(new Invoice(1000, "12345", "Victor", "123 Main St", df.format(new Date())));
        list.add(new Invoice(1001, "12346", "Mark", "456 Main St", df.format(new Date())));
        list.add(new Invoice(1002, "12347", "Carl", "789 Main St", df.format(new Date())));
        list.add(new Invoice(1003, "12348", "Zen", "784 Main St", df.format(new Date())));
        list.add(new Invoice(1004, "12349", "Chris", "258 Main St", df.format(new Date())));
        list.add(new Invoice(1005, "12346", "Benny", "322 Main St", df.format(new Date())));
        list.add(new Invoice(1006, "12351", "Sunny", "951 Main St", df.format(new Date())));
        list.add(new Invoice(1007, "12352", "Kumar", "878 Main St", df.format(new Date())));
        list.add(new Invoice(1008, "12351", "Nino", "357 Main St", df.format(new Date())));
        list.add(new Invoice(1009, "12354", "Ivan", "985 Main St", df.format(new Date())));
        
        return new InvoiceJSONWrapper(true, list);
    }
    
    @RequestMapping(value="/postInvoices",  method = RequestMethod.POST)
    public boolean postInvoices(@RequestBody List<Invoice> list) {
    	System.out.println("List size: " + list.size());
    	for (Invoice invoice:list) {
    		System.out.println(invoice);
    	}
    	return true;
    }

}
