package com.realworldback.project.domain.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.realworldback.project.domain.UserDto;
import com.realworldback.project.persistence.UserRepository;
import org.apache.tomcat.util.json.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
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

    public boolean verifyUserByEmail(String email) throws JsonProcessingException {

        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode jsonNode = objectMapper.readTree(email);
        String receiveEmail = jsonNode.get("email").asText();

        UserDto userDB = userRepository.findByEmail(receiveEmail);
        List<UserDto> allUsers = userRepository.getAllUsers();

        boolean response = false;

        for (UserDto user : allUsers) {
            if (userDB != null && Objects.equals(user.getEmail(), userDB.getEmail())) {
                response = true;
                break;
            }
        }
        return response;
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
