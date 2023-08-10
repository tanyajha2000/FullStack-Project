package com.project.picturemanagement.model;
import javax.validation.constraints.NotBlank;

public class Login {

	@NotBlank(message = "Required")
	private String email;
	@NotBlank(message = "Required")
	private String password;
	private User user;

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

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Login(String email, String password, User user) {
		super();
		this.email = email;
		this.password = password;
		this.user = user;
	}

	public Login() {
		super();
	}

	@Override
	public String toString() {
		return "Login [email=" + email + ", password=" + password + ", user=" + user + "]";
	}

}
