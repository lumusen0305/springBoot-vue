package com.example.demo.repository;

import com.example.demo.enity.BookJPA;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BookRepository  extends JpaRepository<BookJPA, Integer> {
    List<BookJPA> findAll();


    @Query(value = "select * from book b where b.name = :name ", nativeQuery = true)
    List<BookJPA> findByName(@Param("name") String name);

}
