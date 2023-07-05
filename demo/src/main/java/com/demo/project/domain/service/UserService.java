package com.demo.project.domain.service;

import com.demo.project.domain.UserDto;
import com.demo.project.persistence.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<UserDto> getAllUsers() {
        return userRepository.getAllUsers();
    }

    public Optional<UserDto> getUserById(int idUser) {
        return userRepository.getUserById(idUser);
    }

    public UserDto createUser(UserDto user) {
        return userRepository.createUser(user);
    }

    public boolean deleteUser(int idUser) {
        if(getUserById(idUser).isPresent()) {
            userRepository.deleteUser(idUser);
            return true;
        }
        return false;
    }

}
