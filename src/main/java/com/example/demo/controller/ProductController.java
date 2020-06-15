package com.example.demo.controller;
import com.alibaba.fastjson.JSON;

import com.alibaba.fastjson.JSONObject;
import com.example.demo.enity.BaseResult;
import com.example.demo.enity.ProductJPA;
import com.example.demo.enity.ResultUtil;
import com.example.demo.enity.TagMapJPA;
import com.example.demo.repository.ProductRepository;
import com.example.demo.repository.TagMapRepository;
import com.fasterxml.jackson.annotation.JsonAutoDetect;
import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.json.JSONArray;

import javax.sql.DataSource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/product")
public class ProductController {

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

