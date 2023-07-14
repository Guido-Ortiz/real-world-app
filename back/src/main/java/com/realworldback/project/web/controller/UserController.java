package com.realworldback.project.web.controller;

import com.fasterxml.jackson.core.JsonProcessingException;

import com.realworldback.project.domain.UserDto;
import com.realworldback.project.domain.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;
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

    @PostMapping("/email")
    public ResponseEntity<String> verifyUserByEmail(@RequestBody String email) throws JsonProcessingException {
            if(userService.verifyUserByEmail(email)) {
                return new ResponseEntity<>("The user is already registered.", HttpStatus.CONFLICT);
            }
        return new ResponseEntity<>("OK", HttpStatus.OK);
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

