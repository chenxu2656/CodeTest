const express = require('express')

const app = express()
// req 是对请求报文的封装
// res 是对响应报文的封装
app.get('/',(req,res)=>{
    res.send('hello')
})

// 监听端口
app.listen('3000',()=>{
    console.log(`服务启动`);
})