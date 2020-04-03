package com.example.demo.controller;

import com.example.demo.enity.AccountOrderJPA;
import com.example.demo.enity.AccountOrderJPA;
import com.example.demo.enity.ShoppingCartJPA;
import com.example.demo.repository.AccountOrderRepository;
import com.example.demo.repository.AccountRepository;
import com.example.demo.repository.ShoppingCartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.sql.DataSource;
import java.util.List;

@RestController
@RequestMapping("/accountorder")
public class AccountOrderController {
    @Autowired
    AccountOrderRepository accountOrderRepository;

    @Autowired
    DataSource dataSource;


    //查
    @PostMapping("/order")
    public boolean order(@RequestParam("username") String username) {
        List<AccountOrderJPA> result = null;
        System.out.println(username);
        result = accountOrderRepository.findByAccount(username);
        if(result.isEmpty()){
            return false;
        }else{
            return true;
        }
    }
}

