package com.example.demo.repository;

import com.example.demo.enity.LikeTagJPA;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface LikeTagRespository extends JpaRepository<LikeTagJPA, Integer> {
    @Query(value = "select * from liketag b where b.productid= :productid and b.accountid= :accountid", nativeQuery = true)
    LikeTagJPA findByTag(@Param("productid") String productid,@Param("accountid") String accountid);

    @Query(value = "select * from liketag b where b.accountid= :accountid", nativeQuery = true)
    List<LikeTagJPA> findById(@Param("accountid") String accountid);
}
