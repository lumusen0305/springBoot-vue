package com.example.demo.repository;

import com.example.demo.enity.AccountJPA;
import com.example.demo.enity.BookJPA;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AccountRepository extends JpaRepository<AccountJPA, Integer> {
    List<AccountJPA> findAll();

    @Query(value = "select * from account b where b.email= :email and b.password= :password", nativeQuery = true)
    List<AccountJPA> findByNameAndPassword(@Param("email") String email,@Param("password") String password);


    @Query(value = "select * from account b where b.email=?1", nativeQuery = true)
    List<AccountJPA> findByAccount(String email);

}