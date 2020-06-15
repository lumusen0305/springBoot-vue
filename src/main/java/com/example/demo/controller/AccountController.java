package com.example.demo.controller;
import javax.servlet.http.Cookie;

import com.example.demo.enity.AccountJPA;
import com.example.demo.enity.BaseResult;
import com.example.demo.enity.Captcha;
import com.example.demo.enity.ResultUtil;
import com.example.demo.repository.AccountRepository;
import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.demo.apply.email;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/account")

public class AccountController extends email{
    @Autowired
    AccountRepository accountRepository;

    @Autowired
    DataSource dataSource;

    public List<Captcha> captchaList=new ArrayList<Captcha>();
    @PostMapping("/login")
    public BaseResult<Object> check(@RequestBody AccountJPA accountJPA){
        List<AccountJPA> AccountJPAList = new ArrayList<AccountJPA>();
        List<AccountJPA> result = null;
        if (isEmail(accountJPA.getUsername())){
            result = accountRepository.findByEmailAndPassword(accountJPA.getUsername(), accountJPA.getPassword());
        }
        else {
            result = accountRepository.findByNameAndPassword(accountJPA.getUsername(), accountJPA.getPassword());
        }
        if(result.isEmpty()){
            return ResultUtil.error("帳號密碼錯誤");
        }else{
            return ResultUtil.success(result);
        }

    }
    @PostMapping("/checkUsername")
    public BaseResult<Object> checkUsername(@RequestBody AccountJPA accountJPA) throws JSONException {
        List<AccountJPA> result = null;
        result = accountRepository.findByAccount(accountJPA.getUsername());
        if(result.size()==0){
            return ResultUtil.success(true);
        }else{
            return ResultUtil.success(false);
        }
    }
    @PostMapping("/checkEmail")
    public BaseResult<Object> checkEmail(@RequestBody AccountJPA accountJPA)  {
        List<AccountJPA> result = null;
        result = accountRepository.findByEmail(accountJPA.getUsername());
        if(result.size()==0){
            return ResultUtil.success(true);
        }else{
            return ResultUtil.success(false);
        }
    }

    @GetMapping("/findAll")
    public BaseResult<Object> findBy() throws JSONException {
        List<AccountJPA> result = null;
        result = accountRepository.findAll();
        if(result.isEmpty()){
            return ResultUtil.error("ERRO");
        }else{
            return ResultUtil.success(result);
        }
    }

//    @PostMapping("/save")
//    public BaseResult<Boolean> save(@RequestParam("password") String password, @RequestParam("email") String email, @RequestParam("phone") String phone, @RequestParam("username") String username){
//        AccountJPA accountJPA=new AccountJPA();
//        accountJPA.setEmail(email);
//        accountJPA.setUsername(username);
//        accountJPA.setPassword(password);
//        accountJPA.setPhone(phone);
//        AccountJPA result = accountRepository.save(accountJPA);
//        if(result != null){
//            return ResultUtil.success(true);
//        }else{
//            return ResultUtil.error("註冊失敗");
//        }
//    }
    @PostMapping("/save")
    public BaseResult<Boolean> save(@RequestBody AccountJPA accountJPA){
        accountJPA.setPower("0");
        AccountJPA result = accountRepository.save(accountJPA);
        if(result != null){
            return ResultUtil.success(true);
        }else{
            return ResultUtil.error("註冊失敗");
        }
    }

    @PutMapping("/update")
    public BaseResult<Boolean> update(@RequestBody AccountJPA accountJPA){
        AccountJPA result = accountRepository.save(accountJPA);
        if(result != null){
            return ResultUtil.success(true);
        }else{
            return ResultUtil.error("註冊失敗");
        }

    }
    //生驗證碼
    @PostMapping("/generatecaptcha")
    public BaseResult<Boolean> generatecaptcha(@RequestBody AccountJPA accountJPA){
        Captcha captcha=new Captcha();
        String code=Integer.toString((int)(Math.random()*(9999-1000+1)+1000));
        captcha.setCaptcha(code);
        captcha.setEmail(accountJPA.getEmail());
        captchaList.add(captcha);
        send(accountJPA.getEmail(),code);
        System.out.println(code);
        return ResultUtil.success(true);
    }
    //確認驗證碼
    @PostMapping("/checkcaptcha")
    public BaseResult<String> getcaptcha(@RequestParam("email") String email, @RequestParam("captcha") String captcha){
        Captcha userCaptcha1=new Captcha();
        userCaptcha1.setCaptcha(captcha);
        userCaptcha1.setEmail(email);
        if (contains(captchaList,userCaptcha1) == true){
            return ResultUtil.success("驗證碼正確");
        }
        else {
            return ResultUtil.error("驗證碼錯誤");
        }
    }

    public boolean isEmail(String email){
        int result1 = email.indexOf("@");
        if(result1 != -1){
            return true;
        }else{
            return false;
        }

    }


     public boolean contains(List<Captcha> list,Captcha captcha) {
        int s = list.size();
        if (list != null) {
            for (int i = 0; i < s; i++) {

                if (list.get(i).getCaptcha().equals(captcha.getCaptcha())&&list.get(i).getEmail().equals(captcha.getEmail())) {
                    return true;
                }

            }
        }
        return false;

    }

    }
