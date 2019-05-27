package org.prajwal.restwebservice.repository;

import java.util.ArrayList;
import java.util.List;
import java.util.OptionalInt;

import org.prajwal.restwebservice.model.User;
import org.springframework.stereotype.Repository;

@Repository
public class UserDetailsRepository {

	static List<User> users = new ArrayList<>();

	public List<User> findAll() {

		return users;
	}

	static {
		users.add(new User(1, "Accenture", 123456, "Mumbai"));
		users.add(new User(2, "TCS", 234567, "Chennai"));
		users.add(new User(3, "LTI", 56789, "Pune"));
	}

	public User delete(Integer id) {
		User user = users.parallelStream().filter(p -> p.getCompId() == id).findAny().orElse(null);
		if (user != null) {
			users.remove(user);
		}
		return user;
	}

	public void save(User user) {
		Integer id = users.stream().mapToInt(p->p.getCompId()).max().orElse(0);
		user.setCompId(id+1);
		users.add(user);
		
	}

	public void update(User user) {
		User user1 = users.stream().filter(p->p.getCompId()==user.getCompId()).findAny().orElse(null);
		users.remove(user1);
		users.add(user);
		System.out.println(users);
	}

	public User findById(Integer id) {
		return users.stream().filter(p->p.getCompId()==id).findAny().orElse(null);
	}

	/*
	 * public User delete(Integer id) { User user =
	 * users.parallelStream().filter(p->p.getCompId()==id).findAny().orElse(null);
	 * 
	 */

}
