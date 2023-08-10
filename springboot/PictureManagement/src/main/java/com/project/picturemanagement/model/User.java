package com.project.picturemanagement.model;


import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;


@Entity
@Table(name = "users_tbl1")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int userId;

	@NotBlank(message = "Name is REQUIRED")
	@Size(min = 3, message = "Atleast 3 letter")
	private String firstName;

	private String lastName;

	@NotBlank(message = "Username is REQUIRED")
	@Size(min = 3, message = "Atleast 3 letter")
	private String username;

	@NotBlank(message = "Email is REQUIRED")
	@Email
	private String email;

	@NotBlank(message = "Password is REQUIRED")
	// @Pattern(regexp = "^[a-zA-Z0-9]{6,10}$")
	@Size(min = 3, message = "Atleast 3 letter")
	private String password;

	@OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
	private List<Image> images;

	@OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
	private List<Comment> comments;

	public List<Comment> getComments() {
		return comments;
	}

	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}

	public List<Image> getImages() {
		return images;
	}

	public void setImages(List<Image> images) {
		this.images = images;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}


	public User(int userId, String firstName, String lastName, String username, String email, String password) {
		super();
		this.userId = userId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.username = username;
		this.email = email;
		this.password = password;
	}

	public User() {
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", firstName=" + firstName + ", lastName=" + lastName + ", username="
				+ username + ", email=" + email + ", password=" + password + "]";
	}

}
