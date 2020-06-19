package com.example.demo.enity;

import java.util.List;

public class ResultUtil {
    public static <T> BaseResult<T> success(T data) {
        return commonResult(1, 200, "请求成功", data);
    }

    public static <T> BaseResult<T> error(String errorMsg) {
        return error(1000, errorMsg);
    }

    public static <T> BaseResult<T> error(Integer code, String errorMsg) {
        return commonResult(0, code, errorMsg, null);
    }

    private static <T> BaseResult<T> commonResult(Integer status, Integer code, String errMsg, T data) {
        BaseResult<T> result = new BaseResult<>();
        result.setStatus(status);
        result.setCode(code);
        result.setMsg(errMsg);
        result.setData(data);
        return result;
    }

    public static <T> BaseResult<Object> cannotFind(T data) {
        return commonResult(1, 200, "沒有data請添加數據", data);
    }
}
