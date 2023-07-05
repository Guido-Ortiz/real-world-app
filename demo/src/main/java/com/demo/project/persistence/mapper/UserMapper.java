package com.demo.project.persistence.mapper;

import com.demo.project.domain.UserDto;
import com.demo.project.persistence.entity.User;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {

    @Mappings({
            @Mapping(source = "idUser", target = "id"),
            @Mapping(source = "name", target = "name"),
            @Mapping(source = "lastname", target = "lastname"),
            @Mapping(source = "email", target = "email"),
            @Mapping(source = "phone", target = "phone")
    })
    UserDto toUserDto(User user);
    List<UserDto> toUsersDto( List<User> users);

    @InheritInverseConfiguration
    User toUser(UserDto user);
}
