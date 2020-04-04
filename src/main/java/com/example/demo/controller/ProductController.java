package com.example.demo.controller;

import com.example.demo.enity.BookJPA;
import com.example.demo.enity.ProductJPA;
import com.example.demo.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.sql.DataSource;
import java.util.List;

@RestController
@RequestMapping("/product")
public class ProductController {
    @Autowired
    ProductRepository productRepository;

    @Autowired
    DataSource dataSource;

    @GetMapping("/findAll")
    public List<ProductJPA> findBy(){
        List<ProductJPA> productJPAList = productRepository.findAllByNull();
        return productJPAList;
    }
    @PostMapping("/save")
    public String save(@RequestBody ProductJPA productJPA){
        ProductJPA result = productRepository.save(productJPA);
        if(result != null){
            return "success";
        }else{
            return "error";
        }
    }
    @PutMapping("/update")
    public String update(@RequestBody ProductJPA productJPA){
        ProductJPA result = productRepository.save(productJPA);
        if(result != null){
            return "success";
        }else{
            return "error";
        }
    }
}

