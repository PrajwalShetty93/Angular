package org.prajwal.restwebservice.controller;

import java.net.URISyntaxException;
import java.util.List;
import java.util.Map;

import org.prajwal.restwebservice.model.User;
import org.prajwal.restwebservice.service.UserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class UserDetailsController {

	@Autowired
	UserDetailsService userDetailsService;
	
	@RequestMapping(path="/users",method=RequestMethod.GET)
	public List<User> getAllUserDetails()
	{
		return userDetailsService.findAll();
	}
	
	@RequestMapping(path="/users/{id}",method=RequestMethod.GET)
	public User getUserDetail(@PathVariable Integer id)
	{
		return userDetailsService.findById(id);
	}
	
	@RequestMapping(path="users/{id}", method=RequestMethod.DELETE)
	public User deleteUserDetail(@PathVariable Integer id)
	{
		return userDetailsService.deleteById(id);
	}
	
	@RequestMapping(path="users", method=RequestMethod.POST)
	public void insertNewDetail(@RequestBody User user) throws URISyntaxException
	{
		//System.out.println(user);
		userDetailsService.insertDetail(user);
		//return ResponseEntity.created(new URI("/users/"+user.getCompId())).build();
	}
	
	@RequestMapping(path="users/{id}",method=RequestMethod.PUT)
	public User updateUser(@RequestBody User user)
	{
		userDetailsService.updateUser(user);
		return user;
	}
}
