package com.demo.project.domain.repository;

import com.demo.project.domain.UserDto;

import java.util.List;
import java.util.Optional;

public interface IUserRepository {

    List<UserDto> getAllUsers();
    Optional<UserDto> getUserById(int idUser);
    UserDto createUser(UserDto user);
    void deleteUser(int idUser);
}
