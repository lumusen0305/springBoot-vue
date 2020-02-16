package com.example.demo.controller;

import com.example.demo.enity.AccountJPA;
import com.example.demo.enity.BookJPA;
import com.example.demo.enity.ProductJPA;
import com.example.demo.enity.ShoppingCartJPA;
import com.example.demo.repository.ProductRepository;
import com.example.demo.repository.ShoppingCartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.sql.DataSource;
import java.util.List;

@RestController
@RequestMapping("/shoppingcart")
public class ShoppingCartController {
    @Autowired
    ShoppingCartRepository shoppingCartRepository;

    @Autowired
    DataSource dataSource;

    //查
    @PostMapping("/order/{account)")
    public List<ShoppingCartJPA> findByAccount(@PathVariable("account") String account){
        List<ShoppingCartJPA> result =shoppingCartRepository.findByAccount(account);
        if(result != null){
            return result;
        }else{
            return result;
        }
    }
    //刪
    @DeleteMapping("deleteByAccountAndName/{account}/{name}")
    public void deleteByAccountAndName(@PathVariable("account") String account,@PathVariable("name") String name) {
        shoppingCartRepository.deleteByAccountAndName(account,name);
    }
    //增
    @PostMapping("/save")
    public boolean save(@RequestBody ShoppingCartJPA shoppingCartJPA){
        ShoppingCartJPA result = shoppingCartRepository.save(shoppingCartJPA);
        if(result != null){
            return true;
        }else{
            return false;
        }
    }
    //改

    @PutMapping("/update")
    public boolean update(@RequestBody ShoppingCartJPA book){
        ShoppingCartJPA result = shoppingCartRepository.save(book);
        if(result != null){
            return true;
        }else{
            return false;
        }
    }
}

