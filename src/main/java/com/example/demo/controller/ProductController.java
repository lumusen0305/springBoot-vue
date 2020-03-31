package com.example.demo.controller;

import com.example.demo.enity.ProductJPA;
import com.example.demo.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}

