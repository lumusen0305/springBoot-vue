package com.example.demo.controller;

import com.example.demo.enity.BookJPA;
import com.example.demo.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

import javax.sql.DataSource;
import java.util.List;


@RestController
@RequestMapping("/book")
public class BookController {
    @Autowired
    BookRepository bookRepository;

    @Autowired
    DataSource dataSource;

        @GetMapping("/findAll/{page}/{size}")
        public Page<BookJPA> findAll(@PathVariable("page") Integer page, @PathVariable("size") Integer size){
            PageRequest request = PageRequest.of(page,size);
            return bookRepository.findAll(request);
        }

    @PostMapping("/save")
    public String save(@RequestBody BookJPA book){
        BookJPA result = bookRepository.save(book);
        if(result != null){
            return "success";
        }else{
            return "error";
        }
    }

    @PutMapping("/update")
    public String update(@RequestBody BookJPA book){
        BookJPA result = bookRepository.save(book);
        if(result != null){
            return "success";
        }else{
            return "error";
        }
    }

    @GetMapping("/findById/{id}")
    public BookJPA findById(@PathVariable("id") Integer id){
        return bookRepository.findById(id).get();
    }

    @DeleteMapping("deleteById/{id}")
    public void deleteById(@PathVariable("id") Integer id) {
        bookRepository.deleteById(id);
        }

    @GetMapping("/findByname")
    public List<BookJPA> testfindByNameAndPassword(){
        return bookRepository.findByName("解忧杂货店");
    }
    }
