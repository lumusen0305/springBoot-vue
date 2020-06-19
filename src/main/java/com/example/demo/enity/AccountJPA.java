package com.example.demo.enity;

import javax.persistence.*;

@Entity


@Table(name = "account")
public class AccountJPA {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name="email")
    private String email;

    @Column(name="username")
    private String username;

    @Column(name="phone")
    private String phone;

    @Column(name="password")
    private String password;

    @Column(name="cash")
    private String cash;

    @Column(name="description")
    private String description;

    @Column(name="address")
    private String address;

    @Column(name="backgroudcolor")
    private String backgroudcolor;

    @Column(name="backgroudurl")
    private String backgroudurl;

    @Column(name="avatar")
    private String avatar;

    @Column(name="power")
    private String power;

    @Column(name="darktheme")
    private boolean darktheme;

    public boolean isDarktheme() {
        return darktheme;
    }

    public void setDarktheme(boolean darktheme) {
        this.darktheme = darktheme;
    }

    public String getPower() {
        return power;
    }

    public void setPower(String power) {
        this.power = power;
    }

    public String getBackgroudcolor() {
        return backgroudcolor;
    }

    public void setBackgroudcolor(String backgroudcolor) {
        this.backgroudcolor = backgroudcolor;
    }

    public String getBackgroudurl() {
        return backgroudurl;
    }

    public void setBackgroudurl(String backgroudurl) {
        this.backgroudurl = backgroudurl;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getCash() {
        return cash;
    }

    public void setCash(String cash) {
        this.cash = cash;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}




