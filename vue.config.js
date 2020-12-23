module.exports={
    //禁用eslint检查
    lintOnSave: false,
    devServer:{
        proxy:{
            '/api':{
                target:"http://localhost:4000",
                pathRewrite:{"^/api" : ""},
                changeOrigin:true
            }
        }
    }
}