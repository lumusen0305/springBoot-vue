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
    List<AccountOrderJPA> findByAccount(String account);

    void deleteByName(Integer id);
    @Query(value = "DELETE FROM accountorder b WHERE b.account= :account AND b.name= :name", nativeQuery = true)
    List<AccountOrderJPA> deleteByAccountAndName(@Param("account") String account, @Param("name") String name);
}