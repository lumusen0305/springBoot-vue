package com.example.demo;

import com.alibaba.fastjson.JSON;
import com.example.demo.enity.BookJPA;
import com.example.demo.repository.BookRepository;
import net.minidev.json.JSONObject;
import org.json.JSONArray;
import org.json.JSONException;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.*;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.web.client.RestTemplate;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

@SpringBootTest
class DemoApplicationTests {
    @Autowired
    private BookRepository bookRepository;





    @Test
    void save() throws JSONException {
        Map<String, String> map1 = new HashMap<String, String>();
        map1.put("name", "Alexia");
        map1.put("sex", "female");
        map1.put("age", "23");
        JSONArray jo = new JSONArray();
        jo.put(map1);
        jo.put(map1);

        System.out.println( jo);
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
