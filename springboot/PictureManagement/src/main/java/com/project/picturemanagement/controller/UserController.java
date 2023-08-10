package com.project.picturemanagement.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import com.project.picturemanagement.model.User;
import com.project.picturemanagement.services.UserService;


@Controller
public class UserController {
	@Autowired
	UserService userService;

//Display 
	@GetMapping("/users")
	public ModelAndView showAll() {
		ModelAndView mav = new ModelAndView("userdetails");
		List<User> list = userService.getAllUsers();
		mav.addObject("list", list);
		return mav;
	}

// Update User By id
	@GetMapping("/user/update/{userId}")
	public ModelAndView update(@PathVariable("userId") int userId) {
		User user = userService.getUserById(userId);
		ModelAndView mav = new ModelAndView("update");
		mav.addObject("user", user);
		return mav;
	}

	@PostMapping(value="/updating")
	public String create(@ModelAttribute User user,@RequestParam("userId") Integer userId,  HttpServletRequest request) {
	   User u = userService.findById(userId);
		userService.update(userId, user);
	    return "redirect:/user/profile/" + u.getUserId();
	}
// Delete User By id
	@GetMapping("/user/delete/{userId}")
	public ModelAndView remove(@PathVariable("userId") int userId) {
		userService.delete(userId);
		return new ModelAndView("redirect:/login");
	}
}