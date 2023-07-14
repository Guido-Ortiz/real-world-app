package com.realworldback.project.persistence.crud;

import com.realworldback.project.domain.UserDto;
import com.realworldback.project.persistence.entity.User;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UserCrudRepository extends CrudRepository<User, Integer> {
    User findByEmail(String email);
}
