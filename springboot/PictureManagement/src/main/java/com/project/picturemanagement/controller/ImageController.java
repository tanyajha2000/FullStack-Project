package com.project.picturemanagement.controller;


import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.servlet.ModelAndView;

import com.project.picturemanagement.model.User;
import com.project.picturemanagement.services.UserService;


@Controller
public class ImageController {

@Autowired
private UserService userService;
	@GetMapping("/home")
	public String home(Model model,HttpServletRequest request) {
		User user=(User) request.getAttribute("user");
		model.addAttribute("user",user);
		return "home";
	}
	@GetMapping("/user/profile/{userId}")
	public ModelAndView prfile(Model m, @PathVariable("userId") int userId, HttpServletRequest request) {
		User user = userService.findById(userId);
		m.addAttribute("user", user);
	   return new ModelAndView("userprofile");
	
	}

}
