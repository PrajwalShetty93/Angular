package org.prajwal.restwebservice.service;

import java.util.List;

import org.prajwal.restwebservice.model.User;
import org.prajwal.restwebservice.repository.UserDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsService {

	@Autowired
	UserDetailsRepository userDetailsRepository;
	
	public List<User> findAll() {
		
		return userDetailsRepository.findAll();
	}

	public User deleteById(Integer id) {
		return userDetailsRepository.delete(id);
	}

	public void insertDetail(User user) {
		userDetailsRepository.save(user);
		
	}

	public void updateUser(User user) {
		userDetailsRepository.update(user);
		
	}

	public User findById(Integer id) {
		
		return userDetailsRepository.findById(id);
	}
	
	

}
