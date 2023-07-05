package com.demo.project.web.controller;

import com.demo.project.domain.UserDto;
import com.demo.project.domain.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/all")
    public List<UserDto> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public Optional<UserDto> getUserById(@PathVariable("id")int idUser) {
        return userService.getUserById(idUser);
    }

    @PostMapping("/create")
    public UserDto createUser(@RequestBody UserDto user) {
        return userService.createUser(user);
    }

    @DeleteMapping("/delete/{id}")
    public boolean deleteUser(@PathVariable("id") int productId) {
        return userService.deleteUser(productId);
    }


}
