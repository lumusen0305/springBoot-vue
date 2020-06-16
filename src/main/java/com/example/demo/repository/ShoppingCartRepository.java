package com.example.demo.repository;

import com.example.demo.enity.AccountJPA;
import com.example.demo.enity.AccountOrderJPA;
import com.example.demo.enity.ProductJPA;
import com.example.demo.enity.ShoppingCartJPA;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface ShoppingCartRepository  extends JpaRepository<ShoppingCartJPA, Integer> {
    List<ShoppingCartJPA> findAll();

    @Query(value = "select * from shoppingcart b where b.account=?1", nativeQuery = true)
    List<ShoppingCartJPA> findByAccount(@Param("account") String account);

    @Query(value = "select * from shoppingcart b where b.id=?1", nativeQuery = true)
    ShoppingCartJPA findByAccountId(@Param("id") int id);

    @Query(value = "select * from product b where b.name=?1", nativeQuery = true)
    ProductJPA searchProduct(@Param("product") String name);
    @Modifying
    @Transactional
    @Query(value = "delete from shoppingcart b where b.account= :account and b.product= :product", nativeQuery = true)
    int deleteByAccountAndProduct(@Param("account") String account,@Param("product") String product);

}