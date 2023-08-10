package com.project.picturemanagement.controller;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.project.picturemanagement.model.Login;
import com.project.picturemanagement.model.User;
import com.project.picturemanagement.services.UserService;

@Controller
public class LogingSignupController {
	@Autowired
	UserService userService;

	//Adding 
		@RequestMapping("/")
		public String addUser(Model model) {
			model.addAttribute("user", new User());
			return "sign";
		}
		@PostMapping(value = "/adding")
		public String create(@ModelAttribute("user") @Valid User user, BindingResult br, HttpServletRequest request) {
			if(true) {
			if (br.hasErrors()) {
				return "sign";
			} else {
				userService.saveUser(user);
			}}
				return ("redirect:/login");
		}
		//login
		@GetMapping("/login")
		public String logindisplay(Model model) {
			model.addAttribute("login", new Login());
			return "login";
		}

		@PostMapping("/loging")
		public String loging(@ModelAttribute @Valid Login data, BindingResult br, HttpServletRequest request, Model m) {
			if (userService.check(data) .equals("user")){
				User user = userService.findByEmail(data.getEmail());
				request.getSession().setAttribute("user", user);
				return "redirect:/home";
			} else if (userService.check(data).equals("admin")) {
				return "redirect:/users";
			} else {
				return "error";
			}
		}
}
