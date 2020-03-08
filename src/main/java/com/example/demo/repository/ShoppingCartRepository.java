package com.example.demo.repository;

import com.example.demo.enity.AccountJPA;
import com.example.demo.enity.AccountOrderJPA;
import com.example.demo.enity.ShoppingCartJPA;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ShoppingCartRepository  extends JpaRepository<ShoppingCartJPA, Integer> {
    List<ShoppingCartJPA> findAll();

    @Query(value = "select * from shoppingcart b where b.account=?1", nativeQuery = true)
List<ShoppingCartJPA> findByAccount(String account);

    @Query(value = "DELETE FROM shoppingcart b WHERE b.account= :account AND b.name= :name", nativeQuery = true)
    List<AccountJPA> deleteByAccountAndName(@Param("account") String account,@Param("name") String name);
}