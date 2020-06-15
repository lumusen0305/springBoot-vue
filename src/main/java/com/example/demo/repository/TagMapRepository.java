package com.example.demo.repository;

import com.example.demo.enity.TagMapJPA;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TagMapRepository  extends JpaRepository<TagMapJPA, Integer> {
    List<TagMapJPA> findAll();
    @Query(value = "select tagdes from tagmap b where b.productid= :productid", nativeQuery = true)
    List<String> findByProductId(@Param("productid") String productid);
}
