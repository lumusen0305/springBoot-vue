package com.example.demo.enity;

import javax.persistence.*;

@Entity
@Table(name = "accountorder")
public class AccountOrderJPA {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "productid")
    private String productid;

    @Column(name = "account")
    private String account;

    @Column(name = "figure")
    private String figure;

    @Column(name = "shoptime")
    private String shoptime;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getProductid() {
        return productid;
    }

    public void setProductid(String productid) {
        this.productid = productid;
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

