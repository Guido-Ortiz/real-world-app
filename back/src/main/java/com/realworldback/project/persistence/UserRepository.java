package com.realworldback.project.persistence;
import com.realworldback.project.domain.repository.IUserRepository;
import com.realworldback.project.persistence.crud.UserCrudRepository;
import com.realworldback.project.persistence.entity.User;
import com.realworldback.project.persistence.mapper.UserMapper;
import com.realworldback.project.domain.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;



@Repository
public class UserRepository implements IUserRepository {

    @Autowired
    private UserCrudRepository userCrudRepository;
    @Autowired
    private UserMapper mapper;

    @Override
    public List<UserDto> getAllUsers() {
        List<User> users = (List<User>) userCrudRepository.findAll();
        return mapper.toUsersDto(users);
    }

    @Override
    public Optional<UserDto> getUserById(int idUser) {
        return userCrudRepository.findById(idUser).map(user -> mapper.toUserDto(user));
    }

    @Override
    public UserDto createUser(UserDto userDto) {

        User user = mapper.toUser(userDto);
        return mapper.toUserDto(userCrudRepository.save(user));
    }

    @Override
    public void deleteUser(int idUser) {
        userCrudRepository.deleteById(idUser);
    }

    @Override
    public UserDto findByEmail(String email) {
        return mapper.toUserDto(userCrudRepository.findByEmail(email));
    }


}

