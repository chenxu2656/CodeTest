const express = require('express')
const app = express()
// 创建路由规则
app.get('/',(req,res)=>{
    res.send('hello')
})
// 当路径是/server时 会执行毁掉函数 并由 response做出响应
app.get('/server',(req,res)=>{
// 设置响应头 设置允许跨域
    res.setHeader('Access-Control-Allow-Origin','*')
    res.send('hello ajax')

})
app.post('/server',(req,res)=>{
    // 设置响应头 设置允许跨域
        res.setHeader('Access-Control-Allow-Origin','*')
        res.send('hello ajax post')    
    })
app.listen(8000,()=>{
    console.log(`listen on localhost:8000`);
})