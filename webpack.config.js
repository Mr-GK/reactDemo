//此处webpack需要本地安装指定版本@3.11.0
var webpack = require("webpack");

module.exports = {
    //配置入口文件
    entry : __dirname + "/src/main.js",
    //出口文件
    output : {
        path : __dirname + "/dist/",
        filename : "app.js"
    },
    //开启资源地图模式，方便代码调试
    devtool : "source-map", 
    //找到所有的js文件并且进行解析
    //babel-loader 用来解析jsx语法
    module : {
        rules : [
            {
                test : /\.js$/,
                exclude : /node_modules/,
                loader:"babel-loader"
            }//?presets[]=env&presets[]=react
        ]
    },
    // 开发环境服务（development开发）
    devServer : {
        contentBase : __dirname + "/dist/",
        port : 3000,
        //是否热刷新
        inline : true
    },
    // 插口
    plugins : [
        new webpack.ProvidePlugin({ //配置全局对象
            React : "react"
        })
    ]
}