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
    @PostMapping("/save")
    public boolean save(@RequestParam("username") String username,@RequestParam("product") String product,@RequestParam("figure") String figure){
        ShoppingCartJPA shoppingCartJPA=new ShoppingCartJPA();
        shoppingCartJPA.setAccount(username);
        shoppingCartJPA.setProduct(product);
        shoppingCartJPA.setFigure(figure);
       ShoppingCartJPA result = shoppingCartRepository.save(shoppingCartJPA);
        if(result != null){
            return true;
        }else{
            return false;
        }
    }
    @PutMapping("/update")
    public boolean update(@RequestParam("username") String username,@RequestParam("product") String product,@RequestParam("figure") String figure){
        ShoppingCartJPA shoppingCartJPA=new ShoppingCartJPA();
        shoppingCartJPA.setAccount(username);
        shoppingCartJPA.setProduct(product);
        shoppingCartJPA.setFigure(figure);
        ShoppingCartJPA result = shoppingCartRepository.save(shoppingCartJPA);
        if(result != null){
            return true;
        }else{
            return false;
        }
    }
    //查
    @PostMapping("/order")
    public boolean order(@RequestParam("username") String username) {
        List<ShoppingCartJPA> result = null;
        System.out.println(username);
        result = shoppingCartRepository.findByAccount(username);
        if(result.isEmpty()){
            return false;
        }else{
            return true;
        }
    }
}