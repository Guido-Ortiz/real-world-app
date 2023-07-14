package com.realworldback.project.persistence.crud;

import com.realworldback.project.persistence.entity.Transaction;
import org.springframework.data.repository.CrudRepository;

public interface TransactionCrudRepository extends CrudRepository<Transaction, Integer> {
}
