package com.example.demo.enity;

import javax.persistence.*;

@Entity
@Table(name = "tagmap")
public class TagMapJPA {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "productid")
    private String productid;

    @Column(name = "tagdes")
    private String tagdes;

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

    public String getTagdes() {
        return tagdes;
    }

    public void setTagdes(String tagdes) {
        this.tagdes = tagdes;
    }
}
