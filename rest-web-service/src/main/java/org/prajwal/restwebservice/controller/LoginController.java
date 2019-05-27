package org.prajwal.restwebservice.controller;

import org.prajwal.restwebservice.model.Message;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins= "http://localhost:4200")
@RestController
public class LoginController {

	@GetMapping(path="/hello")
	public Message helloWorld()
	{
		return new Message("Hello.");
		//throw new RuntimeException("Found a Exception.");
	}

	@RequestMapping(path="/hello/{name}",method=RequestMethod.GET)
	public Message helloWorldWithName(@PathVariable String name)
	{
		return new Message("Hello "+name+".");
	}
	
}
