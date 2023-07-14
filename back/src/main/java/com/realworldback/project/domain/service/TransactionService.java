package com.realworldback.project.domain.service;

import com.realworldback.project.persistence.TransactionRepository;
import com.realworldback.project.persistence.entity.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;

    public List<Transaction> getAllTransactions() {
        return (List<Transaction>) transactionRepository.getAllTransactions();
    }

    public Optional<Transaction> getTransactionById(int transactionId) {
        return transactionRepository.getTransactionById(transactionId);
    }

    public Transaction createTransaction(Transaction user) {
        return transactionRepository.createTransaction(user);
    }
}
