import ajax from './ajax'

//定义函数发送首页三级分类请求
export function reqCategoryList(){
    return ajax({
        url:'/product/getBaseCategoryList',
        method:'get'
    })
    // return ajax.get('http://39.99.186.36/api')  //简写形式
}