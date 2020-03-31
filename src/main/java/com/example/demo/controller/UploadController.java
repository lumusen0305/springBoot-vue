package com.example.demo.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.util.Calendar;
import java.util.UUID;

import java.util.logging.Logger;
@RestController
@RequestMapping("/sys/upload")
public class UploadController  {

    /**
     * 上傳圖片
     * @param file
     * @param request
     * @throws IOException
     */
    private static Logger logger = Logger.getLogger(UploadController.class.getName());

    @RequestMapping( value = "/uploadPic")
    @ResponseBody

    public String uploadPic(@RequestParam(value = "file", required = false) MultipartFile file, HttpServletRequest request) throws IOException {
        //目前這裡是寫死的本地硬碟路徑
        String path = "D:/img";
        logger.info("path:" + path);
        //獲取檔名稱
        String fileName = file.getOriginalFilename();
        //獲取檔名字尾
        Calendar currTime = Calendar.getInstance();
        String time = String.valueOf(currTime.get(Calendar.YEAR))+String.valueOf((currTime.get(Calendar.MONTH)+1));
        //獲取檔名字尾
        String suffix = fileName.substring(file.getOriginalFilename().lastIndexOf("."));
        suffix = suffix.toLowerCase();
        if(suffix.equals(".jpg") || suffix.equals(".jpeg") || suffix.equals(".png")/* || suffix.equals(".gif")*/){
            fileName = UUID.randomUUID().toString()+suffix;
            File targetFile = new File(path, fileName);
            if(!targetFile.getParentFile().exists()){    //注意，判斷父級路徑是否存在
                targetFile.getParentFile().mkdirs();
            }
            long size = 0;
            //儲存
            try {
                file.transferTo(targetFile);
                size = file.getSize();
            } catch (Exception e) {
                e.printStackTrace();
                return "上傳失敗！";
            }
            //專案url，這裡可以使用常量或者去資料字典獲取相應的url字首；
            String fileUrl="http://localhost:8080";
            //檔案獲取路徑
            fileUrl = fileUrl + request.getContextPath() + "/img/" + fileName;
            logger.info("fileUrl:" + fileUrl);
            return "fileUrl"+ fileUrl;
        }else{
            return "圖片格式有誤，請上傳.jpg、.png、.jpeg格式的檔案";
        }

    }
}