const express = require('express')
const app = express()
// 创建路由规则
app.get('/', (req, res) => {
    res.send('hello')
})
// 当路径是/server时 会执行毁掉函数 并由 response做出响应
app.get('/server', (req, res) => {
    // 设置响应头 设置允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.send('hello ajax')

})
app.all('/server', (req, res) => {
    // 设置响应头 设置允许跨域
    // 星号表示所有类型的头信息
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    res.send('hello ajax post')
})
app.all('/json-server', (req, res) => {
    // 设置响应头 设置允许跨域
    // 星号表示所有类型的头信息
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    const data = {
        "name": "xuchen",
        "age": "20"
    }
    // 直接放进去不行 因为只能接受buffer或者字符串
    res.send(data)
})
app.get('/ie', (req, res) => {
    // 设置响应头 设置允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.send('hello ie2')

})
app.get('/await', (req, res) => {
    // 设置响应头 设置允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*')
    setTimeout(() => {
        res.send('hello 延时响应')
    }, 3000)
    // 3秒后在进行返回 

})
app.all('/jquery', (req, res) => {
    // 设置响应头 设置允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    const data = {
        "name": "xuchen",
        "age": "20"
    }
    res.send(data)
})
app.all('/axios-server', (req, res) => {
    // 设置响应头 设置允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    const data = {
        "name": "xuchen",
        "age": "20"
    }
    res.send(data)
})
app.listen(8000, () => {
    console.log(`listen on localhost:8000`);
})