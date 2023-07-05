package com.demo.project.persistence.crud;

import com.demo.project.persistence.entity.Transaction;
import org.springframework.data.repository.CrudRepository;

public interface TransactionCrudRepository extends CrudRepository<Transaction, Integer> {
}
