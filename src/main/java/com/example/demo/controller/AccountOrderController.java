package com.example.demo.controller;

import com.example.demo.enity.*;
import com.example.demo.enity.AccountOrderJPA;
import com.example.demo.repository.AccountOrderRepository;
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

    @PostMapping("/save")
    public BaseResult<? extends Object> save(@RequestBody List<AccountOrderJPA> accountOrderJPAS){
        int count = accountOrderJPAS.size();
        AccountOrderJPA result = null;
        for (int i=0;i<count;i++){
            AccountOrderJPA temp=new AccountOrderJPA();
            accountOrderJPAS.get(i).setShoptime(getDateTime());
            temp=accountOrderJPAS.get(i);
            result = accountOrderRepository.save(temp);
        }
        if(result != null){
            return ResultUtil.success(true);
        }else{
            return ResultUtil.error("註冊失敗");
        }
    }
//    @PostMapping("/changStatue")



    //查
    @PostMapping("/order")
    public BaseResult<Object> order(@RequestBody AccountOrderJPA accountOrderJPA) {
        List<AccountOrderJPA> result = null;
        result = accountOrderRepository.findByAccount(accountOrderJPA.getAccount());
        if(result.isEmpty()){
            return ResultUtil.error("查詢失敗");
        }else{
            return ResultUtil.success(result);
        }
    }
    @GetMapping("/findAll")
    public BaseResult<Object> findAll() {
        List<AccountOrderJPA> result = null;
        result = accountOrderRepository.findAll();
        if(result.isEmpty()){
            return ResultUtil.error("查詢失敗");
        }else{
            return ResultUtil.success(result);
        }
    }
    @PutMapping("/changeStatue")
    public BaseResult<Object> changeStatue(@RequestBody AccountOrderJPA accountOrderJPA) {
        AccountOrderJPA result = null;
        result = accountOrderRepository.findById(accountOrderJPA.getId());
        if(result==null){
            return ResultUtil.error("查無此訂單修改無效");
        }else{
            result.setOrderstatue(accountOrderJPA.getOrderstatue());
            AccountOrderJPA resultSave = accountOrderRepository.save(result);
            if(result != null){
                return ResultUtil.success("訂單狀態以更改為："+accountOrderJPA.getOrderstatue());
            }else{
                return ResultUtil.error("訂單狀態變動失敗");
            }
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

