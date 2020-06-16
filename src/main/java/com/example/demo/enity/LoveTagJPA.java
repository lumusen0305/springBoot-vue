package com.example.demo.enity;

import javax.persistence.*;

@Entity
@Table(name = "lovetag")
public class LoveTagJPA {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "productid")
    private String productid;

    @Column(name = "accountid")
    private String accountid;

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

    public String getAccountid() {
        return accountid;
    }

    public void setAccountid(String accountid) {
        this.accountid = accountid;
    }

    public LoveTagJPA(String productid, String accountid) {
        this.productid = productid;
        this.accountid = accountid;
    }

    public LoveTagJPA() {
    }
}
