package com.realworldback.project.domain.repository;

import com.realworldback.project.persistence.entity.Transaction;

import java.util.List;
import java.util.Optional;

public interface ITransactionRepository {

    List<Transaction> getAllTransactions();
    Optional<Transaction> getTransactionById(int transactionId);
    Transaction createTransaction(Transaction user);
}
