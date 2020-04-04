package com.example.demo.controller;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.example.demo.enity.AccountOrderJPA;
import com.example.demo.enity.AccountOrderJPA;
import com.example.demo.enity.ShoppingCartJPA;
import com.example.demo.repository.AccountOrderRepository;
import com.example.demo.repository.AccountRepository;
import com.example.demo.repository.ShoppingCartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.sql.DataSource;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/accountorder")
public class AccountOrderController {
    @Autowired
    AccountOrderRepository accountOrderRepository;

    @Autowired
    DataSource dataSource;

    //增
//    @PostMapping("/save")
//    public boolean save(@RequestParam("username") String username,@RequestParam("product") String product,@RequestParam("figure") String figure){
//        AccountOrderJPA accountOrderJPA=new AccountOrderJPA();
//        accountOrderJPA.setAccount(username);
//        accountOrderJPA.setProduct(product);
//        accountOrderJPA.setFigure(figure);
//        accountOrderJPA.setShoptime(getDateTime());
//        AccountOrderJPA result = accountOrderRepository.save(accountOrderJPA);
//        if(result != null){
//            return true;
//        }else{
//            return false;
//        }
//    }
    @PostMapping("/save")
    public void save(@RequestBody List<AccountOrderJPA> accountOrderJPAS){
        int count = accountOrderJPAS.size();
        for (int i=0;i<count;i++){
            AccountOrderJPA temp=new AccountOrderJPA();
            accountOrderJPAS.get(i).setShoptime(getDateTime());
            temp=accountOrderJPAS.get(i);
            accountOrderRepository.save(temp);
        }
//                for(AccountOrderJPA user:accountOrderJPAS){
//                    AccountOrderJPA tempJPA=new AccountOrderJPA();
//                    tempJPA.setAccount(user.getAccount());
//                    tempJPA.setFigure(user.getFigure());
//                    tempJPA.setProduct(user.getProduct());
//                    tempJPA.setShoptime(getDateTime());
//                    System.out.println(tempJPA);
//                    System.out.println(accountOrderJPAS);
//
//                    accountOrderRepository.save(tempJPA);
//                }
        }
    @PostMapping("/test")
    public boolean save(@RequestParam("username") String username,@RequestParam("product") String product,@RequestParam("figure") String figure){
        AccountOrderJPA shoppingCartJPA=new AccountOrderJPA();
        shoppingCartJPA.setAccount(username);
        shoppingCartJPA.setProduct(product);
        shoppingCartJPA.setFigure(figure);
        shoppingCartJPA.setShoptime(getDateTime());
        AccountOrderJPA result = accountOrderRepository.save(shoppingCartJPA);
        if(result != null){
            return true;
        }else{
            return false;
        }
    }

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
    public String getDateTime(){
        SimpleDateFormat sdFormat = new SimpleDateFormat("yyyy/MM/dd hh:mm:ss");
        Date date = new Date();
        String strDate = sdFormat.format(date);
//System.out.println(strDate);
        return strDate;
    }
}

