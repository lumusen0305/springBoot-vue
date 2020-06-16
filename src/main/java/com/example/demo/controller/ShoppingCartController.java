package com.example.demo.controller;

import com.example.demo.enity.BaseResult;
import com.example.demo.enity.ProductJPA;
import com.example.demo.enity.ResultUtil;
import com.example.demo.enity.ShoppingCartJPA;
import com.example.demo.repository.ShoppingCartRepository;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.sql.DataSource;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
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
    public BaseResult<Object> order(@RequestBody ShoppingCartJPA shoppingCartJPA) {
        List<ShoppingCartJPA> result = null;
        result = shoppingCartRepository.findByAccount(shoppingCartJPA.getAccount());

        if (result.isEmpty()) {
            return ResultUtil.error("查詢失敗");
        } else {
            return ResultUtil.success(result);
        }
    }

    //增
    @PostMapping("/save")
    public BaseResult<Object> save(@RequestBody ShoppingCartJPA shoppingCartJPA) {
        shoppingCartJPA.setShoptime(getDateTime());
        ShoppingCartJPA result = shoppingCartRepository.save(shoppingCartJPA);
        if (result != null) {
            return ResultUtil.success(true);
        } else {
            return ResultUtil.error("添加失敗");
        }
    }

    //改
    @PutMapping("/update")
    public BaseResult<Object> update(@RequestBody ShoppingCartJPA shoppingCartJPA) {
        shoppingCartJPA.setShoptime(getDateTime());
        ShoppingCartJPA result = shoppingCartRepository.save(shoppingCartJPA);
        if (result != null) {
            return ResultUtil.success(true);
        } else {
            return ResultUtil.error("添加失敗");
        }
    }

    //刪
    @DeleteMapping("/delete")
    public BaseResult<Boolean> delete(@RequestBody List<ShoppingCartJPA> shoppingCartJPAS) {
        int count = shoppingCartJPAS.size();
        for (int i = 0; i < count; i++) {
            shoppingCartRepository.deleteByAccountAndProduct(shoppingCartJPAS.get(i).getAccount(), shoppingCartJPAS.get(i).getProduct());
        }
        return ResultUtil.success(true);
    }

    public String getDateTime() {
        SimpleDateFormat sdFormat = new SimpleDateFormat("yyyy/MM/dd hh:mm:ss");
        Date date = new Date();
        String strDate = sdFormat.format(date);
//System.out.println(strDate);
        return strDate;
    }
}