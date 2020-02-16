package com.example.demo.controller;

import com.example.demo.enity.AccountJPA;
import com.example.demo.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.sql.DataSource;
import java.util.List;

@RestController
@RequestMapping("/account")

public class AccountController {
    @Autowired
    AccountRepository accountRepository;

    @Autowired
    DataSource dataSource;

    @PostMapping("/check/{email}/{password}")
    public Boolean check(@PathVariable("email") String email, @PathVariable("password") String password){
         List<AccountJPA> result =accountRepository.findByNameAndPassword(email,password);
        if(result != null){
            return true;
        }else{
            return false;
        }
    }

    @PostMapping("/save")
    public boolean save(@RequestBody AccountJPA accountJPA){
        AccountJPA result = accountRepository.save(accountJPA);
        if(result != null){
            return true;
        }else{
            return false;
        }
    }

    @PutMapping("/update")
    public boolean update(@RequestBody AccountJPA accountJPA){
        AccountJPA result = accountRepository.save(accountJPA);
        if(result != null){
            return true;
        }else{
            return false;
        }
    }


}
