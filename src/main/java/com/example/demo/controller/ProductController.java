package com.example.demo.controller;
import com.alibaba.fastjson.JSON;

import com.alibaba.fastjson.JSONObject;
import com.example.demo.enity.*;
import com.example.demo.repository.LikeTagRespository;
import com.example.demo.repository.LoveTagRespository;
import com.example.demo.repository.ProductRepository;
import com.example.demo.repository.TagMapRepository;
import com.fasterxml.jackson.annotation.JsonAutoDetect;
import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.json.JSONArray;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.sql.DataSource;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/product")
public class ProductController {
    @Autowired
    LoveTagRespository loveTagRespository;
    @Autowired
    LikeTagRespository likeTagRespository;
    @Autowired
    ProductRepository productRepository;
    @Autowired
    TagMapRepository tagMapRepository;
    @Autowired
    DataSource dataSource;

    @GetMapping("/findAll")
    public BaseResult<Object> findBy() throws JSONException {
        List<ProductJPA> productJPAList = productRepository.findAllByNull();
        List<TagMapJPA> productTagJPAList = tagMapRepository.findAll();

        HashMap hm = new HashMap();
        // Put elements to the map
        hm.put("good",productJPAList);
        hm.put("goodTag",productTagJPAList);
        if(productJPAList != null){
            return ResultUtil.success(hm);
        }else{
            return ResultUtil.error("ERRO");
        }
    }

    @PostMapping("/addTag")
    public BaseResult<Object> save(@RequestBody TagMapJPA tagMapJPA){
        TagMapJPA result = tagMapRepository.save(tagMapJPA);
        System.out.println(result);
        if(result != null){
            return ResultUtil.success(true);
        }else{
            return ResultUtil.error("商品Tag註冊失敗");
        }
    }
    @PostMapping("/save")
    public BaseResult<Object> save(@RequestBody ProductJPA productJPA){
        ProductJPA result = productRepository.save(productJPA);
        System.out.println(result);
        if(result != null){
            return ResultUtil.success(true);
        }else{
            return ResultUtil.error("商品註冊失敗");
        }
    }
    @PutMapping("/update")
    public BaseResult<Boolean> update(@RequestBody ProductJPA productJPA){
        ProductJPA result = productRepository.save(productJPA);
        if(result != null){
            return ResultUtil.success(true);
        }else{
            return ResultUtil.error("商品註冊失敗");
        }
    }
    @PostMapping("/addLove")
    public BaseResult<Object> addLove(@RequestBody LoveTagJPA likeTagJPA){
        ProductJPA result = productRepository.findByProductId(Integer.valueOf(likeTagJPA.getProductid()));
        LoveTagJPA loveTagJPA = new LoveTagJPA(likeTagJPA.getAccountid(),(likeTagJPA.getProductid()));
        loveTagRespository.save(loveTagJPA);
        result.setLove(Integer.toString(Integer.valueOf(result.getLove())+1));
        productRepository.save(result);
        if(result != null){
            return ResultUtil.success(result.getLove());
        }else{
            return ResultUtil.error("商品點贊失敗");
        }
    }
    @PostMapping("/addLikeNum")
    public BaseResult<Object> likeNum(@RequestBody LikeTagJPA likeTagJPA){
        ProductJPA result = productRepository.findByProductId(Integer.valueOf(likeTagJPA.getProductid()));
        LikeTagJPA likeTagJPAresult = new LikeTagJPA(likeTagJPA.getProductid(),likeTagJPA.getAccountid());
        likeTagRespository.save(likeTagJPAresult);
        result.setLikenum(Integer.toString(Integer.valueOf(result.getLikenum()+1)));
        productRepository.save(result);
        if(result != null){
            return ResultUtil.success(result.getLove());
        }else{
            return ResultUtil.error("商品點贊失敗");
        }
    }
    class tempPojo{
        private int id;

        private String money;

        private String url;

        private String category;

        private String name;

        private String productdescription;

        public int getId() {
            return id;
        }

        public void setId(int id) {
            this.id = id;
        }

        public String getMoney() {
            return money;
        }

        public void setMoney(String money) {
            this.money = money;
        }

        public String getUrl() {
            return url;
        }

        public void setUrl(String url) {
            this.url = url;
        }

        public String getCategory() {
            return category;
        }

        public void setCategory(String category) {
            this.category = category;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getProductdescription() {
            return productdescription;
        }

        public void setProductdescription(String productdescription) {
            this.productdescription = productdescription;
        }

        public String getLove() {
            return love;
        }

        public void setLove(String love) {
            this.love = love;
        }

        private String love;
    }
}

