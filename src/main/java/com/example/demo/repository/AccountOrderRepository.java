package com.example.demo.repository;

import com.example.demo.enity.AccountJPA;
import com.example.demo.enity.AccountOrderJPA;
import com.example.demo.enity.ShoppingCartJPA;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AccountOrderRepository  extends JpaRepository<AccountOrderJPA, Integer> {
    List<AccountOrderJPA> findAll();

    @Query(value = "select * from accountorder b where b.account=?1", nativeQuery = true)
    List<AccountOrderJPA> findByAccount(String username);

    @Query(value = "select * from accountorder b where b.id=?1", nativeQuery = true)
    AccountOrderJPA findById(int id);


}