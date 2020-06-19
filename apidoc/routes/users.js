/**
 *
 * @api {put}http://35.238.213.70:8081/account/update 更新用戶資料
 * @apiVersion 3.1.0
 * @apiName UpdateAccount
 * @apiGroup Account
 *
 * @apiParam {String}  id  用戶id
 * @apiParam {String}  account  用戶名
 * @apiParam {String}  password  用戶密碼
 * @apiParam {String} email  用戶email
 * @apiParam {String} phone 用戶手機
 * @apiParam {String} cash 用戶手機
 * @apiParam {String} description 用戶自我介紹
 * @apiParam {String} address 用戶地址
 * @apiParam {String} avatar 頭貼url
 * @apiParam {String} backgroudcolor 背景顏色
 * @apiParam {String} backgroudurl 背景圖片url
 * @apiParam {String} power 是否有管理員權限有為1無為0
 * @apiParam {bool} darktheme 黑色主題
 * @apiSuccess {String} code 狀態碼
 * @apiSuccess {Number} status 设备状态
 * @apiSuccess {Number} msg 返回信息
 * @apiSuccess {Number} data  返回bool

 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
*{
*    "code": 200,
*    "status": 1,
*    "msg": "请求成功",
*    "data": true
*}
 *
 * @apiUse RkNotFoundException
 *
 */
/**
 *
 * @apiDefine 500Error
 *
 * @apiError 500 SP语法出错、ACCESS数据库连接语句出错、文件引用与包含路径出错(如未启用父路径)、使用了服务器不支持的组件如FSO等
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Not Found
 *     {
    "code": 500,
    "status": 0,
    "msg": "錯誤消息",
    "data": null
}
 *
 */

/**
 *
 * @apiDefine RkNotFoundException
 *
 * @apiError RkNotFoundException 找不到相关数据
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": {
 *           "code": 404,
 *           "msg": "",
 *           "path" ""
 *       }
 *     }
 *
 */
/**
 *
 * @api {get}http://35.238.213.70:8081/account/checkLoveNum 查詢喜歡商品
 * @apiVersion 3.1.0
 * @apiName checkLoveNum
 * @apiGroup Account
  * @apiParam {Int}  id  用戶id
 * @apiSuccess {String} code 狀態碼
 * @apiSuccess {Number} status 设备状态
 * @apiSuccess {Number} msg 返回信息
 * @apiSuccess {Number} data  返回bool

 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
    "code": 200,
    "status": 1,
    "msg": "请求成功",
    "data": [
        {
            "id": 1,
            "productid": "4",
            "accountid": "5"
        }
    ]
}
 *
 * @apiUse RkNotFoundException
 *
 */
/**
 *
 * @api {get}http://35.238.213.70:8081/account/checkLikeNum 查詢點贊商品
 * @apiVersion 3.1.0
 * @apiName checkLikeNum
 * @apiGroup Account
 *
 * @apiParam {Int}  id  用戶id
 * @apiSuccess {String} code 狀態碼
 * @apiSuccess {Number} status 设备状态
 * @apiSuccess {Number} msg 返回信息
 * @apiSuccess {Number} data  返回bool

 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
    "code": 200,
    "status": 1,
    "msg": "请求成功",
    "data": [
        {
            "id": 1,
            "productid": "4",
            "accountid": "5"
        }
    ]
}
 *
 * @apiUse RkNotFoundException
 *
 */

/**
 *
 * @api {post}http://35.238.213.70:8081/account/save 註冊
 * @apiVersion 3.1.0
 * @apiName SaveAccount
 * @apiGroup Account
 *
 * @apiParam {String}  username  用戶名
 * @apiParam {String}  password  用戶密碼
 * @apiParam {String} email  用戶email
 * @apiParam {String} phone 用戶手機
 * 
 * @apiSuccess {String} code 狀態碼
 * @apiSuccess {Number} status 设备状态
 * @apiSuccess {Number} msg 返回信息
 * @apiSuccess {Number} data  返回bool

 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
*{
*    "code": 200,
*    "status": 1,
*    "msg": "请求成功",
*    "data": true
*}
 *
 * @apiUse RkNotFoundException
 *
 */


/**
 *
 * @api {get}http://35.238.213.70:8081/account/findAll 查詢所有用戶data
 * @apiVersion 3.1.0
 * @apiName FindAll
 * @apiGroup Account

 * 
 * @apiSuccess {String} code 狀態碼
 * @apiSuccess {Number} status 设备状态
 * @apiSuccess {Number} msg 返回信息
 * @apiSuccess {Number} data  返回data

 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
    "code": 200,
    "status": 1,
    "msg": "请求成功",
    "data": [
        {
            "id": 1,
            "email": null,
            "username": "1",
            "phone": null,
            "password": null,
            "cash": null,
            "description": null,
            "address": null,
            "backgroudcolor": null,
            "backgroudurl": null,
            "avatar": null,
            "power": "0"
        },
        {
            "id": 2,
            "email": null,
            "username": "1",
            "phone": null,
            "password": null,
            "cash": null,
            "description": null,
            "address": null,
            "backgroudcolor": null,
            "backgroudurl": null,
            "avatar": null,
            "power": "0"
        },
        {
            "id": 3,
            "email": null,
            "username": "1",
            "phone": null,
            "password": null,
            "cash": null,
            "description": null,
            "address": null,
            "backgroudcolor": null,
            "backgroudurl": null,
            "avatar": null,
            "power": "0"
        },
        {
            "id": 4,
            "email": null,
            "username": "1",
            "phone": null,
            "password": null,
            "cash": null,
            "description": null,
            "address": null,
            "backgroudcolor": null,
            "backgroudurl": null,
            "avatar": null,
            "power": "0"
        }
    ]
}
 *
 * @apiUse RkNotFoundException
 *
 */
/**
 *
 * @apiDefine CanFindUser
 *
 * @apiError CanFindUser 沒有對應用戶
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 1000 Not Found
{
    "code": 1000,
    "status": 0,
    "msg": "錯誤消息",
    "data": null
}
 *
 */
/**
 *
 * @api {post}http://35.238.213.70:8081/account/login 登入驗證
 * @apiVersion 3.1.0
 * @apiName LoginAccount
 * @apiGroup Account
 *
 * @apiParam {String}  username  用戶名 or email
 * @apiParam {String}  password  用戶密碼

 * 
 * @apiSuccess {String} code 狀態碼
 * @apiSuccess {Number} status 设备状态
 * @apiSuccess {Number} msg 返回信息
 * @apiSuccess {Number} data  用戶資訊

 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
    "code": 200,
    "status": 1,
    "msg": "请求成功",
    "data": [
        {
            "id": 26,
            "email": "fh831.cp9gw@gmail.com",
            "username": "Huang",
            "phone": "18673222222",
            "password": "gggggg",
            "cash": null,
            "description": null,
            "address": null,
            "backgroudcolor": null,
            "backgroudurl": null,
            "avatar": null,
            "power": "0"
        }
    ]
}
 * @apiUse CanFindUser
 *
 */


/**
 *
 * @api {post}http://35.238.213.70:8081/account/checkUsername Username查重
 * @apiVersion 3.1.0
 * @apiName CheckUsername
 * @apiGroup Account
 *
 * @apiParam {String}  username  用戶名
 * @apiParam {String}  password  用戶密碼

 * 
 * @apiSuccess {String} code 狀態碼
 * @apiSuccess {Number} status 设备状态
 * @apiSuccess {Number} msg 返回信息
 * @apiSuccess {Number} data  用戶資訊

 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
    "code": 200,
    "status": 1,
    "msg": "请求成功",
    "data": true    //true代表可用這個名子
}
 * @apiUse CanFindUser
 *
 */

 /**
 *
 * @api {post}http://35.238.213.70:8081/account/checkEmail Email查重
 * @apiVersion 3.1.0
 * @apiName CheckEmail
 * @apiGroup Account
 *
 * @apiParam {String}  email   email
 * @apiParam {String}  password  用戶密碼

 * 
 * @apiSuccess {String} code 狀態碼
 * @apiSuccess {Number} status 设备状态
 * @apiSuccess {Number} msg 返回信息
 * @apiSuccess {Number} data  用戶資訊

 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
    "code": 200,
    "status": 1,
    "msg": "请求成功",
    "data": true    //true代表可用這個Email
}
 * @apiUse CanFindUser
 *
 */

/**
 *
 * @api {post}http://35.238.213.70:8081/account/generatecaptcha  產生驗證碼
 * @apiVersion 3.1.0
 * @apiName GenerateCaptcha
 * @apiGroup Account
 *
 * @apiParam {String}  email  用戶email

 * 
 * @apiSuccess {String} code 狀態碼
 * @apiSuccess {Number} status 设备状态
 * @apiSuccess {Number} msg 返回信息
 * @apiSuccess {Number} data  bool值

 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
    "code": 200,
    "status": 1,
    "msg": "请求成功",
    "data": true
}
 * @apiUse 500Error
 *
 */

/**
 *
 * @api {post}http://35.238.213.70:8081/account/checkcaptcha  確認驗證碼用 "Params"
 * @apiVersion 3.1.0
 * @apiName CheckCaptcha
 * @apiGroup Account
 *
 * @apiParam {String}  email  用戶email
 * @apiParam {String}  captcha  用戶captcha
 * 
 * @apiSuccess {String} code 狀態碼
 * @apiSuccess {Number} status 设备状态
 * @apiSuccess {Number} msg 返回信息
 * @apiSuccess {Number} data  bool值

 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
    "code": 200,
    "status": 1,
    "msg": "请求成功",
    "data": "驗證碼正確"
}
 * @apiUse 500Error
 *
 */

/**
 *
 * @api {get}http://35.238.213.70:8081/product/findAll  顯示所有商品
 * @apiVersion 3.1.0
 * @apiName Product/FndAll
 * @apiGroup Product
 *
 * 
 * @apiSuccess {String} code 狀態碼
 * @apiSuccess {Number} status 设备状态
 * @apiSuccess {Number} msg 返回信息
 * @apiSuccess {Number} data  商品信息

 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 {
    "code": 200,
    "status": 1,
    "msg": "请求成功",
    "data": {
        "goodTag": [
            {
                "id": 1,
                "productid": "1",
                "tagdes": "tagdes"
            }
        ],
        "good": [
            {
                "id": 1,
                "money": null,
                "url": null,
                "category": null,
                "name": "1",
                "productdescription": null,
                "love": null,
                "likenum": null
            },
            {
                "id": 2,
                "money": "4",
                "url": null,
                "category": null,
                "name": null,
                "productdescription": null,
                "love": null,
                "likenum": null
            },
            {
                "id": 3,
                "money": "w",
                "url": null,
                "category": null,
                "name": null,
                "productdescription": null,
                "love": null,
                "likenum": null
            }
        ]
    }
}
 * @apiUse 500Error
 *
 */

/**
 *
 * @api {post}http://35.238.213.70:8081/product/save  新增商品
 * @apiVersion 3.1.0
 * @apiName ProductSave
 * @apiGroup Product
 *
 * @apiParam {String}  money  商品價位
 * @apiParam {String}  url  商品圖片
 * @apiParam {String}  category  商品種類
 * @apiParam {String}  name  商品名稱
 * @apiParam {String}  productdescription  商品描述
 * @apiParam {String}  love  love 
 * @apiParam {String}  likenum  商品點贊
 * @apiSuccess {String} code 狀態碼
 * @apiSuccess {Number} status 设备状态
 * @apiSuccess {Number} msg 返回信息
 * @apiSuccess {Number} data  商品信息

 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
    "code": 200,
    "status": 1,
    "msg": "请求成功",
    "data": true
}
 * @apiUse 500Error
 *
 */
/**
 *
 * @api {post}http://35.238.213.70:8081/product/addLove  addLove(發送請求該id的love+1)
 * @apiVersion 3.1.0
 * @apiName addLove
 * @apiGroup Product
 *
 * @apiParam {String}  productid  商品id
 * @apiParam {String}  accountid  用戶id
 * @apiSuccess {String} code 狀態碼
 * @apiSuccess {Number} status 设备状态
 * @apiSuccess {Number} msg 返回信息
 * @apiSuccess {Number} data  商品信息

 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
    "code": 200,
    "status": 1,
    "msg": "请求成功",
    "data": "5" //目前數量
}
 * @apiUse 500Error
 *
 */

/**
 *
 * @api {post}http://35.238.213.70:8081/product/addLikeNum  addLikeNum(LikeNum+1)
 * @apiVersion 3.1.0
 * @apiName addLikeNum
 * @apiGroup Product
 *
 * @apiParam {String}  productid  商品id
 * @apiParam {String}  accountid  用戶id
 * @apiSuccess {String} code 狀態碼
 * @apiSuccess {Number} status 设备状态
 * @apiSuccess {Number} msg 返回信息
 * @apiSuccess {Number} data  商品信息
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
    "code": 200,
    "status": 1,
    "msg": "请求成功",
    "data": "5" //目前數量
}
 * @apiUse 500Error
 *
 */

/**
 *
 * @api {post}http://35.238.213.70:8081/product/addTag  添加標籤
 * @apiVersion 3.1.0
 * @apiName ProductAddTag
 * @apiGroup Product
 *
 * @apiParam {String}  productid   商品ID
 * @apiParam {String}  tagdes  標籤
 * @apiSuccess {String} code 狀態碼
 * @apiSuccess {Number} status 设备状态
 * @apiSuccess {Number} msg 返回信息
 * @apiSuccess {Number} data  商品信息

 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
    "code": 200,
    "status": 1,
    "msg": "请求成功",
    "data": true
}
 * @apiUse 500Error
 *
 */
/**
 *
 * @api {put}http://35.238.213.70:8081/product/update  更新商品
 * @apiVersion 3.1.0
 * @apiName UpdateSave
 * @apiGroup Product
 *
 * @apiParam {Int}  id  商品id
 * @apiParam {String}  money  商品價位
 * @apiParam {String}  url  商品圖片
 * @apiParam {String}  category  商品種類
 * @apiParam {String}  name  商品名稱
 * @apiParam {String}  productdescription  商品描述
 * @apiParam {String}  love  商品點贊跟love eg:10,20
 * @apiSuccess {String} code 狀態碼
 * @apiSuccess {Number} status 设备状态
 * @apiSuccess {Number} msg 返回信息
 * @apiSuccess {Number} data  商品信息

 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
    "code": 200,
    "status": 1,
    "msg": "请求成功",
    "data": true
}
 * @apiUse 500Error
 *
 */


/**
 *
 * @api {post}http://35.238.213.70:8081/shoppingcart/order  獲取用戶購物車
 * @apiVersion 3.1.0
 * @apiName ShoppingCartOrder
 * @apiGroup ShoppingCart
 *
 * @apiParam {String}  account  用戶名
 * @apiSuccess {String} code 狀態碼
 * @apiSuccess {Number} status 设备状态
 * @apiSuccess {Number} msg 返回信息
 * @apiSuccess {Number} data  商品信息

 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 {
    "code": 200,
    "status": 1,
    "msg": "请求成功",
    "data": [
        {
            "id": 4,
            "product": "w",
            "account": "2",
            "figure": null,
            "shoptime": "2020/06/16 07:42:46",
            "gender": null,
            "age": null,
            "img": null,
            "type": null,
            "price": null
        },
        {
            "id": 5,
            "product": "4",
            "account": "2",
            "figure": null,
            "shoptime": "2020/06/16 07:42:51",
            "gender": null,
            "age": null,
            "img": null,
            "type": null,
            "price": null
        }
    ]
}

 * @apiUse 500Error
 *
 */

/**
 *
 * @api {post}http://35.238.213.70:8081/shoppingcart/save  新增購物車
 * @apiVersion 3.1.0
 * @apiName ShoppingCartSave
 * @apiGroup ShoppingCart
 *
 * @apiParam {String}  account  用戶名
 * @apiParam {String}  product  寵物名稱
 * @apiParam {String}  figure  寵物數量
 * @apiParam {String}  age  寵物年齡
 * @apiParam {String}  gender  寵物性別
 * @apiParam {String}  type  寵物種類
 * @apiParam {String}  img  寵物url
 * @apiParam {String}  price  寵物價錢
 * @apiSuccess {String} code 狀態碼
 * @apiSuccess {Number} status 设备状态
 * @apiSuccess {Number} msg 返回信息
 * @apiSuccess {Number} data  商品信息

 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
    "code": 200,
    "status": 1,
    "msg": "请求成功",
    "data": true
}
 * @apiUse 500Error
 *
 */

/**
 *
 * @api {put}http://35.238.213.70:8081/shoppingcart/update  更改購物車
 * @apiVersion 3.1.0
 * @apiName ShoppingCartUpdate
 * @apiGroup ShoppingCart
 *
 * @apiParam {Int}  id  用戶id
 * @apiParam {String}  account  用戶名
 * @apiParam {String}  product  寵物名稱
 * @apiParam {String}  figure  寵物數量
 * @apiParam {String}  age  寵物年齡
 * @apiParam {String}  gender  寵物性別
 * @apiParam {String}  type  寵物種類
 * @apiParam {String}  img  寵物url
 * @apiParam {String}  price  寵物價錢
 * @apiSuccess {String} code 狀態碼
 * @apiSuccess {Number} status 设备状态
 * @apiSuccess {Number} msg 返回信息
 * @apiSuccess {Number} data  商品信息

 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
    "code": 200,
    "status": 1,
    "msg": "请求成功",
    "data": true
}
 * @apiUse 500Error
 *
 */

/**
 *
 * @api {delete}http://35.238.213.70:8081/shoppingcart/delete  刪除選中購物車
 * @apiVersion 3.1.0
 * @apiName ShoppingCartDelete
 * @apiGroup ShoppingCart
 *
 * @apiParam {String}  account  用戶名
 * @apiParam {String}  product  寵物名稱
 * @apiSuccess {String} code 狀態碼
 * @apiSuccess {Number} status 设备状态
 * @apiSuccess {Number} msg 返回信息
 * @apiSuccess {Number} data  商品信息

 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
    "code": 200,
    "status": 1,
    "msg": "请求成功",
    "data": true
}
 * @apiUse 500Error
 *
 */


/**
 *
 * @api {post}http://35.238.213.70:8081/accountorder/order  獲取用戶訂單
 * @apiVersion 3.1.0
 * @apiName AccountOrderOrder
 * @apiGroup AccountOrder
 *
 * @apiParam {String}  account  用戶名
 * @apiSuccess {String} code 狀態碼
 * @apiSuccess {Number} status 设备状态
 * @apiSuccess {Number} msg 返回信息
 * @apiSuccess {Number} data  商品信息

 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
    "code": 200,
    "status": 1,
    "msg": "请求成功",
    "data": [
        {
            "id": 8,
            "product": "asq",
            "account": "asdd",
            "figure": "3",
            "shoptime": "2020/04/08 02:38:27",
            "gender": null,
            "age": null
        },
        {
            "id": 9,
            "product": "asq",
            "account": "asdd",
            "figure": "3",
            "shoptime": "2020/04/08 02:38:29",
            "gender": null,
            "age": null
        },
        {
            "id": 10,
            "product": "asq",
            "account": "asdd",
            "figure": "3",
            "shoptime": "2020/04/08 02:38:59",
            "gender": null,
            "age": null
        },
        {
            "id": 11,
            "product": "asq",
            "account": "asdd",
            "figure": "3",
            "shoptime": "2020/04/08 02:39:47",
            "gender": null,
            "age": null
        },
        {
            "id": 12,
            "product": "asq",
            "account": "asdd",
            "figure": "3",
            "shoptime": "2020/04/08 02:41:22",
            "gender": null,
            "age": null
        },
        {
            "id": 13,
            "product": "asq",
            "account": "asdd",
            "figure": "3",
            "shoptime": "2020/04/08 02:42:20",
            "gender": null,
            "age": null
        }
    ]
}

 * @apiUse 500Error
 *
 */


/**
 *
 * @api {get}http://35.238.213.70:8081/accountorder/findAll 查詢所有訂單
 * @apiVersion 3.1.0
 * @apiName AccountOrderFindAll
 * @apiGroup AccountOrder
 * 
 * @apiSuccess {String} code 狀態碼
 * @apiSuccess {Number} status 设备状态
 * @apiSuccess {Number} msg 返回信息
 * @apiSuccess {Number} data  返回data

 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
    "code": 200,
    "status": 1,
    "msg": "请求成功",
    "data": [
        {
            "id": 4,
            "product": "w",
            "account": "2",
            "figure": null,
            "shoptime": "2020/06/16 07:42:46",
            "gender": null,
            "age": null,
            "img": null,
            "type": null,
            "price": null
        },
        {
            "id": 5,
            "product": "4",
            "account": "2",
            "figure": null,
            "shoptime": "2020/06/16 07:42:51",
            "gender": null,
            "age": null,
            "img": null,
            "type": null,
            "price": null
        }
    ]
}
 *
 * @apiUse RkNotFoundException
 *
 */


/**
 *
 * @api {post} http://35.238.213.70:8081/accountorder/save 添加用戶訂單
 * @apiVersion 3.1.0
 * @apiName AccountOrderSave
 * @apiGroup AccountOrder
 *
 * @apiParam {String}  account  用戶名
 * @apiParam {String}  product  寵物名稱
 * @apiParam {String}  figure  寵物數量
 * @apiParam {String}  age  寵物年齡
 * @apiParam {String}  gender  寵物性別
 * @apiParam {String}  type  寵物種類
 * @apiParam {String}  img  寵物url
 * @apiParam {String}  price  寵物價錢
 * @apiSuccess {String} code 狀態碼
 * @apiSuccess {Number} status 设备状态
 * @apiSuccess {Number} msg 返回信息
 * @apiSuccess {Number} data  商品信息

 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
    "code": 200,
    "status": 1,
    "msg": "请求成功",
    "data": true
}
 */

/**
 *
 * @api {put} http://35.238.213.70:8081/accountorder/changeStatue 修改訂單狀態
 * @apiVersion 3.1.0
 * @apiName AccountOrderChangeStatue
 * @apiGroup AccountOrder
 *
 * @apiParam {int}  id  訂單號
 * @apiParam {String}  orderstatue  訂單狀態
 * @apiSuccess {String} code 狀態碼
 * @apiSuccess {Number} status 设备状态
 * @apiSuccess {Number} msg 返回信息
 * @apiSuccess {Number} data  商品信息

 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
    "code": 200,
    "status": 1,
    "msg": "请求成功",
    "data": "訂單狀態以更改為：2"
}
 * @apiUse 500Error
 *
 */