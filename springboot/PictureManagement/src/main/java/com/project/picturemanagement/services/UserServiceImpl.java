package com.project.picturemanagement.services;

import java.util.List;

import javax.validation.Valid;

import com.project.picturemanagement.model.Login;
import com.project.picturemanagement.model.User;

public interface UserServiceImpl {
	public List<User> getAllUsers();

	public User getUserById(int id);

	public User update(Integer id, User usersDetails);

	public User delete(Integer id);

	public boolean saveUser(User user);

	public String check(@Valid Login data);

	public User findById(int userId);

	public User findByEmail(String email);

	public User findByUsername(String username);
}
