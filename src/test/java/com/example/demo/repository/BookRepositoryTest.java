package com.example.demo.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class BookRepositoryTest {
    @Autowired
    private ShoppingCartRepository accountRepository;

    @Test
    void findAll(){
        accountRepository.findAll();
    }

}