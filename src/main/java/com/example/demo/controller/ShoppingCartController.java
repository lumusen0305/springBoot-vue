package com.example.demo.controller;

import com.example.demo.enity.ShoppingCartJPA;
import com.example.demo.repository.ShoppingCartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.sql.DataSource;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/shoppingcart")
public class ShoppingCartController {
    @Autowired
    ShoppingCartRepository shoppingCartRepository;

    @Autowired
    DataSource dataSource;

    //查
    @PostMapping("/order")
    public Object order(@RequestParam("username") String username) {
        List<ShoppingCartJPA> result = null;
        System.out.println(username);
        result = shoppingCartRepository.findByAccount(username);
        if(result.isEmpty()){
            return false;
        }else{
            return result;
        }
    }

    //增
    @PostMapping("/save")
    public boolean save(@RequestParam("username") String username,@RequestParam("product") String product,@RequestParam("figure") String figure){
        ShoppingCartJPA shoppingCartJPA=new ShoppingCartJPA();
        shoppingCartJPA.setAccount(username);
        shoppingCartJPA.setProduct(product);
        shoppingCartJPA.setFigure(figure);
        shoppingCartJPA.setShoptime(getDateTime());
       ShoppingCartJPA result = shoppingCartRepository.save(shoppingCartJPA);
        if(result != null){
            return true;
        }else{
            return false;
        }
    }

    //改
    @PutMapping("/update")
    public boolean update(@RequestParam("username") String username,@RequestParam("product") String product,@RequestParam("figure") String figure){
        ShoppingCartJPA shoppingCartJPA=new ShoppingCartJPA();
        shoppingCartJPA.setAccount(username);
        shoppingCartJPA.setProduct(product);
        shoppingCartJPA.setFigure(figure);
        shoppingCartJPA.setShoptime(getDateTime());
        ShoppingCartJPA result = shoppingCartRepository.save(shoppingCartJPA);
        if(result != null){
            return true;
        }else{
            return false;
        }
    }

    //刪
    @DeleteMapping("/delete")
    public int delete(@RequestParam("username") String username,@RequestParam("product") String product,@RequestParam("figure") String figure) {
        return shoppingCartRepository.deleteByAccountAndProduct(username,product);
    }
    public String getDateTime(){
        SimpleDateFormat sdFormat = new SimpleDateFormat("yyyy/MM/dd hh:mm:ss");
        Date date = new Date();
        String strDate = sdFormat.format(date);
//System.out.println(strDate);
        return strDate;
    }


}