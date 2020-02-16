package com.example.demo.controller;

import com.example.demo.enity.AccountOrderJPA;
import com.example.demo.enity.AccountOrderJPA;
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
    @PostMapping("/order/{account)")
    public List<AccountOrderJPA> findByAccount(@PathVariable("account") String account){
        List<AccountOrderJPA> result =accountOrderRepository.findByAccount(account);
        if(result != null){
            return result;
        }else{
            return result;
        }
    }
    //刪
    @DeleteMapping("deleteByAccountAndName/{account}/{name}")
    public void deleteByAccountAndName(@PathVariable("account") String account,@PathVariable("name") String name) {
        accountOrderRepository.deleteByAccountAndName(account,name);
    }
    //增
    @PostMapping("/save")
    public boolean save(@RequestBody AccountOrderJPA accountOrderJPA){
        AccountOrderJPA result = accountOrderRepository.save(accountOrderJPA);
        if(result != null){
            return true;
        }else{
            return false;
        }
    }
    //改

    @PutMapping("/update")
    public boolean update(@RequestBody AccountOrderJPA book){
        AccountOrderJPA result = accountOrderRepository.save(book);
        if(result != null){
            return true;
        }else{
            return false;
        }
    }
}
