package com.example.demo.repository;
import com.example.demo.enity.AccountJPA;
import com.example.demo.enity.ProductJPA;
import com.example.demo.enity.TagMapJPA;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductRepository extends JpaRepository<ProductJPA, Integer> {
    List<ProductJPA> findAll();
    @Query(value = "select * from product", nativeQuery = true)
    List<ProductJPA> findAllByNull();

//    @Query(value = "select * from tagmap ", nativeQuery = true)
//    List<TagMapJPA> findByProductId();

    @Query(value = "select * from product b where b.id=?1", nativeQuery = true)
    ProductJPA findByProductId(int id);
}
