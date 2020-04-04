package com.example.demo.controller;
import javax.servlet.http.Cookie;

import com.example.demo.enity.AccountJPA;
import com.example.demo.enity.Captcha;
import com.example.demo.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.demo.apply.email;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
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
    @PostMapping("/check")
    public boolean check(@RequestParam("name") String name, @RequestParam("password") String password) {
        List<AccountJPA> AccountJPAList = new ArrayList<AccountJPA>();
        List<AccountJPA> result = null;
        if (isEmail(name)){
            result = accountRepository.findByEmailAndPassword(name, password);
        }
        else {
            result = accountRepository.findByNameAndPassword(name, password);
        }
        if(result.isEmpty()){
            return false;
        }else{
            return true;
        }

    }





    @PostMapping("/save")
    public boolean save(@RequestParam("password") String password,@RequestParam("email") String email,@RequestParam("phone") String phone,@RequestParam("username") String username){
        AccountJPA accountJPA=new AccountJPA();
        accountJPA.setEmail(email);
        accountJPA.setUsername(username);
        accountJPA.setPassword(password);
        accountJPA.setPhone(phone);
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
    //生驗證碼
    @PostMapping("/generatecaptcha")
    public void generatecaptcha(@RequestParam("email") String email){
        Captcha captcha=new Captcha();
        String code=Integer.toString((int)(Math.random()*(9999-1000+1)+1000));
        captcha.setCaptcha(code);
        captcha.setEmail(email);
        captchaList.add(captcha);
        send(email,code);
        System.out.println(code);
    }
    //確認驗證碼
    @PostMapping("/checkcaptcha")
    public void getcaptcha(@RequestParam("email") String email,@RequestParam("captcha") String captcha){
        Captcha userCaptcha1=new Captcha();
        userCaptcha1.setCaptcha(captcha);
        userCaptcha1.setEmail(email);

        System.out.println(contains(captchaList,userCaptcha1));

    }

    @RequestMapping(value = "/getCookies",method = RequestMethod.GET)
    public  String getCookies(HttpServletRequest request){
        //HttpServletRequest 装请求信息类
        //HttpServletRespionse 装相应信息的类
        //   Cookie cookie=new Cookie("sessionId","CookieTestInfo");
        Cookie[] cookies =  request.getCookies();
        if(cookies != null){
            for(Cookie cookie : cookies){
                if(cookie.getName().equals("username")){
                    String  name=cookie.getValue();
                    return cookie.getValue();
                }
            }
        }

        return  null;
    }

    @RequestMapping(value = "/setCookies",method = RequestMethod.GET)
    public  String setCookies(@RequestParam("username") String name,HttpServletResponse response){
        //HttpServerletRequest 装请求信息类
        //HttpServerletRespionse 装相应信息的类
        Cookie cookie=new Cookie("username",name);
        response.addCookie(cookie);
        return "添加"+name+"信息成功";
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
