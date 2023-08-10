package com.project.picturemanagement.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.project.picturemanagement.model.User;

@Repository
public interface UserRepo extends CrudRepository<User, Integer> {
	User findByEmail(String email);

	User findByusername(String username);

	User findByUserId(int userId);

}
