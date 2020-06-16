package com.example.demo.repository;

import com.example.demo.enity.LikeTagJPA;
import com.example.demo.enity.LoveTagJPA;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface LoveTagRespository   extends JpaRepository<LoveTagJPA, Integer> {
    @Query(value = "select * from lovetag b where b.productid= :productid and b.accountid= :accountid", nativeQuery = true)
    LoveTagJPA findByTag(@Param("productid") String productid, @Param("accountid") String accountid);

    @Query(value = "select * from lovetag b where b.accountid= :accountid", nativeQuery = true)
    List<LoveTagJPA> findById(@Param("accountid") String accountid);
}
