package com.example.demo.enity;

import javax.persistence.*;

@Entity
@Table(name = "accountorder")
public class AccountOrderJPA {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "product")
    private String product;

    @Column(name = "account")
    private String account;

    @Column(name = "figure")
    private String figure;

    @Column(name = "shoptime")
    private String shoptime;

    @Column(name = "gender")
    private String gender;

    @Column(name = "age")
    private String age;

    @Column(name = "orderstatue")
    private String orderstatue;


    public String getOrderstatue() {
        return orderstatue;
    }

    public void setOrderstatue(String orderstatue) {
        this.orderstatue = orderstatue;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getProduct() {
        return product;
    }

    public void setProduct(String produc) {
        this.product = produc;
    }

    public String getAccount() {
        return account;
    }

    public void setAccount(String account) {
        this.account = account;
    }

    public String getFigure() {
        return figure;
    }

    public void setFigure(String figure) {
        this.figure = figure;
    }

    public String getShoptime() {
        return shoptime;
    }

    public void setShoptime(String shoptime) {
        this.shoptime = shoptime;
    }
}

        ;
