package com.example.demo.repository;
import com.example.demo.enity.AccountJPA;
import com.example.demo.enity.ProductJPA;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductRepository extends JpaRepository<ProductJPA, Integer> {
    List<ProductJPA> findAll();
    @Query(value = "select * from product", nativeQuery = true)
    List<ProductJPA> findAllByNull();
}
