package com.example.demo.repository;

import com.example.demo.enity.AccountJPA;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest

class AccountRepositoryTest {
    @Autowired
    private AccountRepository accountRepository;

    @Test
    void findAll(){
        accountRepository.findAll();
    }
}