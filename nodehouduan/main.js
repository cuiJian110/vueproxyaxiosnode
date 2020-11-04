const express = require("express");
// 创建app
const app = express();
// 处理参数
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
const bodyParser = require("body-parser");
// 解析 application/json
app.use(bodyParser.json()); 
// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// --解析二进制格式
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' })); 

// 路由
app.get("/users",(req,res) => {
    res.send("hhh急急急aada")
})
app.post("/apir/testPost1",(req,res) => {
    console.log(req.body)
    console.log("post1")
    res.send({
        page: 1,
        size: 10,
        url: "post1",
        datalist: []
    })
})
app.post("/apir/testPost2",(req,res) => {
    console.log(req.body)
    console.log("post2")
    res.send({
        page: 1,
        size: 10,
        url: "post2",
        datalist: []
    })
})
app.post("/apir/testPost3",(req,res) => {
    console.log(req.body)
    console.log("post3")
    res.send({
        page: 1,
        size: 10,
        url: "post3",
        datalist: []
    })
})
// 监听端口
app.listen("5000",() => console.log("5000 startaaaddd..."))