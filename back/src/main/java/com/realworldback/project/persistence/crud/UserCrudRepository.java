package com.realworldback.project.persistence.crud;

import com.realworldback.project.persistence.entity.User;
import org.springframework.data.repository.CrudRepository;

public interface UserCrudRepository extends CrudRepository<User, Integer> {
}
