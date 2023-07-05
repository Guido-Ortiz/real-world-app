package com.demo.project.persistence;

import com.demo.project.domain.repository.ITransactionRepository;
import com.demo.project.domain.repository.IUserRepository;
import com.demo.project.persistence.crud.TransactionCrudRepository;
import com.demo.project.persistence.crud.UserCrudRepository;
import com.demo.project.persistence.entity.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class TransactionRepository implements ITransactionRepository {

    @Autowired
    private TransactionCrudRepository transactionCrudRepository;


    @Override
    public List<Transaction> getAllTransactions() {
        return (List<Transaction>) transactionCrudRepository.findAll();
    }

    @Override
    public Optional<Transaction> getTransactionById(int transactionId) {
        return transactionCrudRepository.findById(transactionId);
    }

    @Override
    public Transaction createTransaction(Transaction user) {
        return null;
    }
}
