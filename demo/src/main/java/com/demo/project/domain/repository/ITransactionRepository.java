package com.demo.project.domain.repository;

import com.demo.project.domain.UserDto;
import com.demo.project.persistence.entity.Transaction;

import java.util.List;
import java.util.Optional;

public interface ITransactionRepository {

    List<Transaction> getAllTransactions();
    Optional<Transaction> getTransactionById(int transactionId);
    Transaction createTransaction(Transaction user);
}
