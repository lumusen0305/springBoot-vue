define({ "api": [
  {
    "type": "post",
    "url": "http://35.238.213.70:8081/account/checkcaptcha",
    "title": "確認驗證碼用 \"Params\"",
    "version": "3.1.0",
    "name": "CheckCaptcha",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>用戶email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "captcha",
            "description": "<p>用戶captcha</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>狀態碼</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>设备状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data",
            "description": "<p>bool值</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"status\": 1,\n    \"msg\": \"请求成功\",\n    \"data\": \"驗證碼正確\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "Account",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>SP语法出错、ACCESS数据库连接语句出错、文件引用与包含路径出错(如未启用父路径)、使用了服务器不支持的组件如FSO等</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 500 Not Found\n    {\n    \"code\": 500,\n    \"status\": 0,\n    \"msg\": \"錯誤消息\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "http://35.238.213.70:8081/account/checkEmail",
    "title": "Email查重",
    "version": "3.1.0",
    "name": "CheckEmail",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>用戶密碼</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>狀態碼</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>设备状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data",
            "description": "<p>用戶資訊</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"status\": 1,\n    \"msg\": \"请求成功\",\n    \"data\": true    //true代表可用這個Email\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "Account",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CanFindUser",
            "description": "<p>沒有對應用戶</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 1000 Not Found\n{\n    \"code\": 1000,\n    \"status\": 0,\n    \"msg\": \"錯誤消息\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "http://35.238.213.70:8081/account/checkUsername",
    "title": "Username查重",
    "version": "3.1.0",
    "name": "CheckUsername",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用戶名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>用戶密碼</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>狀態碼</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>设备状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data",
            "description": "<p>用戶資訊</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"status\": 1,\n    \"msg\": \"请求成功\",\n    \"data\": true    //true代表可用這個名子\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "Account",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CanFindUser",
            "description": "<p>沒有對應用戶</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 1000 Not Found\n{\n    \"code\": 1000,\n    \"status\": 0,\n    \"msg\": \"錯誤消息\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "http://35.238.213.70:8081/account/generatecaptcha",
    "title": "產生驗證碼",
    "version": "3.1.0",
    "name": "GenerateCaptcha",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>用戶email</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>狀態碼</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>设备状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data",
            "description": "<p>bool值</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"status\": 1,\n    \"msg\": \"请求成功\",\n    \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "Account",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>SP语法出错、ACCESS数据库连接语句出错、文件引用与包含路径出错(如未启用父路径)、使用了服务器不支持的组件如FSO等</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 500 Not Found\n    {\n    \"code\": 500,\n    \"status\": 0,\n    \"msg\": \"錯誤消息\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "http://35.238.213.70:8081/account/login",
    "title": "登入驗證",
    "version": "3.1.0",
    "name": "LoginAccount",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用戶名 or email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>用戶密碼</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>狀態碼</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>设备状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data",
            "description": "<p>用戶資訊</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"status\": 1,\n    \"msg\": \"请求成功\",\n    \"data\": [\n        {\n            \"id\": 2,\n            \"email\": \"csu_ds_ys@163.com\",\n            \"username\": \"Lumusen\",\n            \"phone\": \"666-666-666\",\n            \"password\": \"123456\",\n            \"cash\": null,\n            \"description\": null,\n            \"address\": null,\n            \"backgroudcolor\": null,\n            \"backgroudurl\": null,\n            \"avatar\": null,\n            \"power\": null\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "Account",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CanFindUser",
            "description": "<p>沒有對應用戶</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 1000 Not Found\n{\n    \"code\": 1000,\n    \"status\": 0,\n    \"msg\": \"錯誤消息\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "http://35.238.213.70:8081/accountorder/changeStatue",
    "title": "修改訂單狀態",
    "version": "3.1.0",
    "name": "AccountOrderChangeStatue",
    "group": "AccountOrder",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>訂單號</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "orderstatue",
            "description": "<p>訂單狀態</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>狀態碼</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>设备状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data",
            "description": "<p>商品信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"status\": 1,\n    \"msg\": \"请求成功\",\n    \"data\": \"訂單狀態以更改為：2\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "AccountOrder",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>SP语法出错、ACCESS数据库连接语句出错、文件引用与包含路径出错(如未启用父路径)、使用了服务器不支持的组件如FSO等</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 500 Not Found\n    {\n    \"code\": 500,\n    \"status\": 0,\n    \"msg\": \"錯誤消息\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "http://35.238.213.70:8081/accountorder/order",
    "title": "獲取用戶訂單",
    "version": "3.1.0",
    "name": "AccountOrderOrder",
    "group": "AccountOrder",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用戶名</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>狀態碼</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>设备状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data",
            "description": "<p>商品信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"status\": 1,\n    \"msg\": \"请求成功\",\n    \"data\": [\n        {\n            \"id\": 8,\n            \"product\": \"asq\",\n            \"account\": \"asdd\",\n            \"figure\": \"3\",\n            \"shoptime\": \"2020/04/08 02:38:27\",\n            \"gender\": null,\n            \"age\": null\n        },\n        {\n            \"id\": 9,\n            \"product\": \"asq\",\n            \"account\": \"asdd\",\n            \"figure\": \"3\",\n            \"shoptime\": \"2020/04/08 02:38:29\",\n            \"gender\": null,\n            \"age\": null\n        },\n        {\n            \"id\": 10,\n            \"product\": \"asq\",\n            \"account\": \"asdd\",\n            \"figure\": \"3\",\n            \"shoptime\": \"2020/04/08 02:38:59\",\n            \"gender\": null,\n            \"age\": null\n        },\n        {\n            \"id\": 11,\n            \"product\": \"asq\",\n            \"account\": \"asdd\",\n            \"figure\": \"3\",\n            \"shoptime\": \"2020/04/08 02:39:47\",\n            \"gender\": null,\n            \"age\": null\n        },\n        {\n            \"id\": 12,\n            \"product\": \"asq\",\n            \"account\": \"asdd\",\n            \"figure\": \"3\",\n            \"shoptime\": \"2020/04/08 02:41:22\",\n            \"gender\": null,\n            \"age\": null\n        },\n        {\n            \"id\": 13,\n            \"product\": \"asq\",\n            \"account\": \"asdd\",\n            \"figure\": \"3\",\n            \"shoptime\": \"2020/04/08 02:42:20\",\n            \"gender\": null,\n            \"age\": null\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "AccountOrder",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>SP语法出错、ACCESS数据库连接语句出错、文件引用与包含路径出错(如未启用父路径)、使用了服务器不支持的组件如FSO等</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 500 Not Found\n    {\n    \"code\": 500,\n    \"status\": 0,\n    \"msg\": \"錯誤消息\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "http://35.238.213.70:8081/accountorder/save",
    "title": "添加用戶訂單",
    "version": "3.1.0",
    "name": "AccountOrderSave",
    "group": "AccountOrder",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "StringList",
            "optional": false,
            "field": "account",
            "description": "<p>用戶名</p>"
          },
          {
            "group": "Parameter",
            "type": "StringList",
            "optional": false,
            "field": "product",
            "description": "<p>寵物名稱</p>"
          },
          {
            "group": "Parameter",
            "type": "StringList",
            "optional": false,
            "field": "figure",
            "description": "<p>寵物數量</p>"
          },
          {
            "group": "Parameter",
            "type": "StringList",
            "optional": false,
            "field": "age",
            "description": "<p>寵物年齡</p>"
          },
          {
            "group": "Parameter",
            "type": "StringList",
            "optional": false,
            "field": "gender",
            "description": "<p>寵物性別</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>狀態碼</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>设备状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data",
            "description": "<p>商品信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"status\": 1,\n    \"msg\": \"请求成功\",\n    \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "AccountOrder"
  },
  {
    "type": "post",
    "url": "http://35.238.213.70:8081/account/save",
    "title": "註冊",
    "version": "3.1.0",
    "name": "SaveAccount",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用戶名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>用戶密碼</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>用戶email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>用戶手機</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>狀態碼</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>设备状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data",
            "description": "<p>返回bool</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": 1,\n   \"msg\": \"请求成功\",\n   \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "Account",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RkNotFoundException",
            "description": "<p>找不到相关数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": {\n      \"code\": 404,\n      \"msg\": \"\",\n      \"path\" \"\"\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "http://35.238.213.70:8081/account/findAll",
    "title": "查詢所有用戶data",
    "version": "3.1.0",
    "name": "SaveAccount",
    "group": "Account",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>狀態碼</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>设备状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data",
            "description": "<p>返回data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"status\": 1,\n    \"msg\": \"请求成功\",\n    \"data\": [\n        {\n            \"id\": 1,\n            \"email\": null,\n            \"username\": \"1\",\n            \"phone\": null,\n            \"password\": null,\n            \"cash\": null,\n            \"description\": null,\n            \"address\": null,\n            \"backgroudcolor\": null,\n            \"backgroudurl\": null,\n            \"avatar\": null,\n            \"power\": \"0\"\n        },\n        {\n            \"id\": 2,\n            \"email\": null,\n            \"username\": \"1\",\n            \"phone\": null,\n            \"password\": null,\n            \"cash\": null,\n            \"description\": null,\n            \"address\": null,\n            \"backgroudcolor\": null,\n            \"backgroudurl\": null,\n            \"avatar\": null,\n            \"power\": \"0\"\n        },\n        {\n            \"id\": 3,\n            \"email\": null,\n            \"username\": \"1\",\n            \"phone\": null,\n            \"password\": null,\n            \"cash\": null,\n            \"description\": null,\n            \"address\": null,\n            \"backgroudcolor\": null,\n            \"backgroudurl\": null,\n            \"avatar\": null,\n            \"power\": \"0\"\n        },\n        {\n            \"id\": 4,\n            \"email\": null,\n            \"username\": \"1\",\n            \"phone\": null,\n            \"password\": null,\n            \"cash\": null,\n            \"description\": null,\n            \"address\": null,\n            \"backgroudcolor\": null,\n            \"backgroudurl\": null,\n            \"avatar\": null,\n            \"power\": \"0\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "Account",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RkNotFoundException",
            "description": "<p>找不到相关数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": {\n      \"code\": 404,\n      \"msg\": \"\",\n      \"path\" \"\"\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "http://35.238.213.70:8081/account/update",
    "title": "更新用戶資料",
    "version": "3.1.0",
    "name": "UpdateAccount",
    "group": "Account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>用戶id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>用戶名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>用戶密碼</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>用戶email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>用戶手機</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cash",
            "description": "<p>用戶手機</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>用戶自我介紹</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>用戶地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>頭貼url</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "backgroudcolor",
            "description": "<p>背景顏色</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "backgroudurl",
            "description": "<p>背景圖片url</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "power",
            "description": "<p>是否有管理員權限有為1無為0</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>狀態碼</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>设备状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data",
            "description": "<p>返回bool</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n   \"code\": 200,\n   \"status\": 1,\n   \"msg\": \"请求成功\",\n   \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "Account",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RkNotFoundException",
            "description": "<p>找不到相关数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": {\n      \"code\": 404,\n      \"msg\": \"\",\n      \"path\" \"\"\n  }\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "http://35.238.213.70:8081/product/findAll",
    "title": "顯示所有商品",
    "version": "3.1.0",
    "name": "Product/FndAll",
    "group": "Product",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>狀態碼</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>设备状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data",
            "description": "<p>商品信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n {\n    \"code\": 200,\n    \"status\": 1,\n    \"msg\": \"请求成功\",\n    \"data\": {\n        \"goodTag\": [\n            {\n                \"id\": 1,\n                \"productid\": \"1\",\n                \"tagdes\": \"tagdes\"\n            }\n        ],\n        \"good\": [\n            {\n                \"id\": 1,\n                \"money\": null,\n                \"url\": null,\n                \"category\": null,\n                \"name\": \"1\",\n                \"productdescription\": null,\n                \"love\": null,\n                \"likenum\": null\n            },\n            {\n                \"id\": 2,\n                \"money\": \"4\",\n                \"url\": null,\n                \"category\": null,\n                \"name\": null,\n                \"productdescription\": null,\n                \"love\": null,\n                \"likenum\": null\n            },\n            {\n                \"id\": 3,\n                \"money\": \"w\",\n                \"url\": null,\n                \"category\": null,\n                \"name\": null,\n                \"productdescription\": null,\n                \"love\": null,\n                \"likenum\": null\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "Product",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>SP语法出错、ACCESS数据库连接语句出错、文件引用与包含路径出错(如未启用父路径)、使用了服务器不支持的组件如FSO等</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 500 Not Found\n    {\n    \"code\": 500,\n    \"status\": 0,\n    \"msg\": \"錯誤消息\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "http://35.238.213.70:8081/product/addTag",
    "title": "添加標籤",
    "version": "3.1.0",
    "name": "ProductAddTag",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productid",
            "description": "<p>商品ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tagdes",
            "description": "<p>標籤</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>狀態碼</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>设备状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data",
            "description": "<p>商品信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"status\": 1,\n    \"msg\": \"请求成功\",\n    \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "Product",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>SP语法出错、ACCESS数据库连接语句出错、文件引用与包含路径出错(如未启用父路径)、使用了服务器不支持的组件如FSO等</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 500 Not Found\n    {\n    \"code\": 500,\n    \"status\": 0,\n    \"msg\": \"錯誤消息\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "http://35.238.213.70:8081/product/save",
    "title": "新增商品",
    "version": "3.1.0",
    "name": "ProductSave",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "money",
            "description": "<p>商品價位</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>商品圖片</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>商品種類</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>商品名稱</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productdescription",
            "description": "<p>商品描述</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "love",
            "description": "<p>商品點贊跟love eg:10,20</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tag",
            "description": "<p>商品標籤 eg:1,0,1,0,1,0,1,1</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>狀態碼</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>设备状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data",
            "description": "<p>商品信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"status\": 1,\n    \"msg\": \"请求成功\",\n    \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "Product",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>SP语法出错、ACCESS数据库连接语句出错、文件引用与包含路径出错(如未启用父路径)、使用了服务器不支持的组件如FSO等</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 500 Not Found\n    {\n    \"code\": 500,\n    \"status\": 0,\n    \"msg\": \"錯誤消息\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "http://35.238.213.70:8081/product/update",
    "title": "更新商品",
    "version": "3.1.0",
    "name": "UpdateSave",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "money",
            "description": "<p>商品價位</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>商品圖片</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>商品種類</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>商品名稱</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productdescription",
            "description": "<p>商品描述</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "love",
            "description": "<p>商品點贊跟love eg:10,20</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tag",
            "description": "<p>商品標籤 eg:1,0,1,0,1,0,1,1</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>狀態碼</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>设备状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data",
            "description": "<p>商品信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"status\": 1,\n    \"msg\": \"请求成功\",\n    \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "Product",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>SP语法出错、ACCESS数据库连接语句出错、文件引用与包含路径出错(如未启用父路径)、使用了服务器不支持的组件如FSO等</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 500 Not Found\n    {\n    \"code\": 500,\n    \"status\": 0,\n    \"msg\": \"錯誤消息\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "http://35.238.213.70:8081/shoppingcart/delete",
    "title": "刪除選中購物車",
    "version": "3.1.0",
    "name": "ShoppingCartDelete",
    "group": "ShoppingCart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>用戶名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product",
            "description": "<p>寵物名稱</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>狀態碼</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>设备状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data",
            "description": "<p>商品信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"status\": 1,\n    \"msg\": \"请求成功\",\n    \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "ShoppingCart",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>SP语法出错、ACCESS数据库连接语句出错、文件引用与包含路径出错(如未启用父路径)、使用了服务器不支持的组件如FSO等</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 500 Not Found\n    {\n    \"code\": 500,\n    \"status\": 0,\n    \"msg\": \"錯誤消息\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "http://35.238.213.70:8081/shoppingcart/order",
    "title": "獲取用戶購物車",
    "version": "3.1.0",
    "name": "ShoppingCartOrder",
    "group": "ShoppingCart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用戶名</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>狀態碼</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>设备状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data",
            "description": "<p>商品信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"status\": 1,\n    \"msg\": \"请求成功\",\n    \"data\": [\n        {\n            \"id\": 8,\n            \"product\": \"asq\",\n            \"account\": \"asdd\",\n            \"figure\": \"3\",\n            \"shoptime\": \"2020/04/08 02:38:27\",\n            \"gender\": null,\n            \"age\": null\n        },\n        {\n            \"id\": 9,\n            \"product\": \"asq\",\n            \"account\": \"asdd\",\n            \"figure\": \"3\",\n            \"shoptime\": \"2020/04/08 02:38:29\",\n            \"gender\": null,\n            \"age\": null\n        },\n        {\n            \"id\": 10,\n            \"product\": \"asq\",\n            \"account\": \"asdd\",\n            \"figure\": \"3\",\n            \"shoptime\": \"2020/04/08 02:38:59\",\n            \"gender\": null,\n            \"age\": null\n        },\n        {\n            \"id\": 11,\n            \"product\": \"asq\",\n            \"account\": \"asdd\",\n            \"figure\": \"3\",\n            \"shoptime\": \"2020/04/08 02:39:47\",\n            \"gender\": null,\n            \"age\": null\n        },\n        {\n            \"id\": 12,\n            \"product\": \"asq\",\n            \"account\": \"asdd\",\n            \"figure\": \"3\",\n            \"shoptime\": \"2020/04/08 02:41:22\",\n            \"gender\": null,\n            \"age\": null\n        },\n        {\n            \"id\": 13,\n            \"product\": \"asq\",\n            \"account\": \"asdd\",\n            \"figure\": \"3\",\n            \"shoptime\": \"2020/04/08 02:42:20\",\n            \"gender\": null,\n            \"age\": null\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "ShoppingCart",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>SP语法出错、ACCESS数据库连接语句出错、文件引用与包含路径出错(如未启用父路径)、使用了服务器不支持的组件如FSO等</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 500 Not Found\n    {\n    \"code\": 500,\n    \"status\": 0,\n    \"msg\": \"錯誤消息\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "http://35.238.213.70:8081/shoppingcart/save",
    "title": "新增購物車",
    "version": "3.1.0",
    "name": "ShoppingCartSave",
    "group": "ShoppingCart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>用戶名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product",
            "description": "<p>寵物名稱</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "figure",
            "description": "<p>寵物數量</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "age",
            "description": "<p>寵物年齡</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>寵物性別</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>狀態碼</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>设备状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data",
            "description": "<p>商品信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"status\": 1,\n    \"msg\": \"请求成功\",\n    \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "ShoppingCart",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>SP语法出错、ACCESS数据库连接语句出错、文件引用与包含路径出错(如未启用父路径)、使用了服务器不支持的组件如FSO等</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 500 Not Found\n    {\n    \"code\": 500,\n    \"status\": 0,\n    \"msg\": \"錯誤消息\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "http://35.238.213.70:8081/shoppingcart/update",
    "title": "新增購物車",
    "version": "3.1.0",
    "name": "ShoppingCartUpdate",
    "group": "ShoppingCart",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>用戶名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product",
            "description": "<p>寵物名稱</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "figure",
            "description": "<p>寵物數量</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "age",
            "description": "<p>寵物年齡</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>寵物性別</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>狀態碼</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>设备状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data",
            "description": "<p>商品信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"status\": 1,\n    \"msg\": \"请求成功\",\n    \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "ShoppingCart",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>SP语法出错、ACCESS数据库连接语句出错、文件引用与包含路径出错(如未启用父路径)、使用了服务器不支持的组件如FSO等</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 500 Not Found\n    {\n    \"code\": 500,\n    \"status\": 0,\n    \"msg\": \"錯誤消息\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    }
  }
] });
