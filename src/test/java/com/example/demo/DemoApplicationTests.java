package com.example.demo;

import com.example.demo.enity.BookJPA;
import com.example.demo.repository.BookRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.SQLException;

@SpringBootTest
class DemoApplicationTests {
    @Autowired
    private BookRepository bookRepository;

    @Test
    void contextLoad(){
        PageRequest pageRequest = PageRequest.of(0,3);
        Page<BookJPA> page=bookRepository.findAll(pageRequest);
        System.out.println(page);
    }
    @Test
    void save(){
        BookJPA bookJPA = new BookJPA();
        bookJPA.setAuthor("大肌肌大俠");
        bookJPA.setName("肌肌大俠的50種肌肌");
        BookJPA book1=bookRepository.save(bookJPA);
        System.out.println(book1);
    }
    @Test
    void findById(){
        BookJPA book = bookRepository.findById(1).get();
        System.out.println(book);
    }
    @Test
    public void testfindByNameAndPassword(){
        bookRepository.findByName("解忧杂货店");
    }

    @Test
    void update(){
        BookJPA book = new BookJPA();
        book.setId(117);
        book.setName("测试测试");
        BookJPA book1 = bookRepository.save(book);
        System.out.println(book1);
    }

    @Test
    void delete(){
        bookRepository.deleteById(117);
    }
}
