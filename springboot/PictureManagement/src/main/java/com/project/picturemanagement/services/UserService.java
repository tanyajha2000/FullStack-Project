package com.project.picturemanagement.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.project.picturemanagement.dao.UserRepo;
import com.project.picturemanagement.exception.AlreadyExistsException;
import com.project.picturemanagement.exception.UserNotFoundException;
import com.project.picturemanagement.exception.WrongCredentialException;
import com.project.picturemanagement.model.Login;
import com.project.picturemanagement.model.User;

@Service
@Transactional
public class UserService implements UserServiceImpl {

	@Autowired
	public UserRepo userrepo;

// Display all users
	@Override
	public List<User> getAllUsers() {
		return (List<User>) userrepo.findAll();
	}

	@Override
	public User getUserById(int id) {
		Optional<User> u = userrepo.findById(id);
		User foundUser;
		if (u.isPresent()) {
			foundUser = u.get();
		} else {
			throw new UserNotFoundException();
		}

		return foundUser;
	}

// add users
	public boolean saveUser(User user) throws AlreadyExistsException {
		for (User obj : userrepo.findAll()) {
			if (obj.getEmail().equals(user.getEmail()) || (obj.getUsername().equals(user.getUsername()))) {
				throw new AlreadyExistsException();
			}
		}
		userrepo.save(user);
		return true;
	}

// check user is present or not
	public String check(Login data) {

		User user = userrepo.findByEmail(data.getEmail());
		if (data.getPassword().equals("admin") && data.getEmail().equals("admin@admin")) {
			return "admin";
		} else if ((data.getEmail().equals(user.getEmail())) && (data.getPassword().equals(user.getPassword()))) {
			return "user";
		} else {
			throw new WrongCredentialException();
		
		}
	}

// get user by id
	public User findById(int id) {
		return userrepo.findByUserId(id);
	}

// Update
	@Override
	public User update(Integer id, User userDetails) {
		Optional<User> u = userrepo.findById(id);
		User foundUser;
		if (u.isPresent()) {
			foundUser = u.get();
			foundUser.setFirstName(userDetails.getFirstName());
			foundUser.setLastName(userDetails.getLastName());
			foundUser.setUsername(userDetails.getUsername());
			foundUser.setPassword(userDetails.getPassword());
			userrepo.save(foundUser);
		} else {
			throw new UserNotFoundException();
		}
		return foundUser;
	}

	// Delete
	@Override
	public User delete(Integer id) {
		Optional<User> u = userrepo.findById(id);
		User foundUser;
		if (u.isPresent()) {
			foundUser = u.get();
			userrepo.delete(foundUser);
		} else {
			throw new UserNotFoundException();
		}
		return foundUser;
	}

	public User findByEmail(String email) {
		return userrepo.findByEmail(email);
	}

	public User findByUsername(String username) {
		return userrepo.findByusername(username);
	}

}