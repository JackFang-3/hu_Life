//1.引入express
const { request, response } = require('express');
const express = require('express');

// 2.创建应用对象
const app = express();

// 3.创建路由规则

// request 是对请求报文的封装
// response 是对响应报文的封装

//axios服务
app.get('/grade', (request, response) => {
    // 设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 接受query参数
    let name = request.query.username;

    if (name === '119') {
        // 设置响应体
        const data = {
            code: 200,
            data: [
                {
                    "course": "c和c++",
                    "grade": 4,
                    "point": 3.8
                },
                {
                    "course": "数据结构",
                    "grade": 4,
                    "point": 3.7
                },
                {
                    "course": "Java2实用教程",
                    "grade": 4,
                    "point": 3.6
                },
                {
                    "course": "Java设计模式",
                    "grade": 4,
                    "point": 3.5
                },
                {
                    "course": "人工智能",
                    "grade": 3,
                    "point": 4.0
                },
                {
                    "course": "计算机图形学",
                    "grade": 4,
                    "point": 3.6
                },
                {
                    "course": "计算机操作系统",
                    "grade": 4,
                    "point": 3.4
                },
                {
                    "course": "计算机网络",
                    "grade": 4,
                    "point": 3.2
                },
                {
                    "course": "TCP/IP",
                    "grade": 4,
                    "point": 3.4
                },
                {
                    "course": "数据库系统概论",
                    "grade": 4,
                    "point": 4.0
                },
                {
                    "course": "软件测试",
                    "grade": 4,
                    "point": 3.0
                },
                {
                    "course": "软件体系结构与设计",
                    "grade": 4,
                    "point": 3.3
                },
                {
                    "course": "数据挖掘",
                    "grade": 3,
                    "point": 3.8
                },
                {
                    "course": "信息安全导论",
                    "grade": 2,
                    "point": 4.0
                },
                {
                    "course": "形势与政策1",
                    "grade": 4,
                    "point": 3.8
                },
                {
                    "course": "形势与政策2",
                    "grade": 4,
                    "point": 3.8
                },
                {
                    "course": "形势与政策3",
                    "grade": 4,
                    "point": 3.8
                },
                {
                    "course": "形势与政策4",
                    "grade": 4,
                    "point": 3.8
                },
                {
                    "course": "形势与政策5",
                    "grade": 4,
                    "point": 3.8
                },
                {
                    "course": "形势与政策6",
                    "grade": 4,
                    "point": 3.8
                }
            ]
        }
        response.send(data);
    }
});

app.get('/login', (request, response) => {
    // 设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 接受query参数
    let username = request.query.username
    let password = request.query.password

    if (username == "20191687310119" && password == "310119") {
        // 设置响应体
        const data = {
            code: 200,
            userInfo: {
                "name": "房凯军",
                "id": 20191687310119,
                "home": "计算机与科学技术学院",
                "major": "软件工程",
                "phone": 15991374891,
                "images": "machao"
            }
        }

        response.send(data);
    }
    else if (username == "20191687310105" && password == "310105") {
        // 设置响应体
        const data = {
            code: 200,
            userInfo: {
                "name": "彭统",
                "id": 20191687310105,
                "home": "计算机与科学技术学院",
                "major": "软件工程",
                "phone": 1387245615,
                "images": "hanxin"
            }
        }
        response.send(data);
    }
    else if (username == "20191687310124" && password == "310124") {
        const data = {
            code: 200,
            userInfo: {
                "name": "王恒",
                "id": 20191687310124,
                "home": "计算机与科学技术学院",
                "major": "软件工程",
                "phone": 1683672868,
                "images": "jvzi"
            }
        }
        response.send(data)
    }
    else {
        response.send("-v- 用户未注册 或 密码错误 -v-")
    }

});

// 4.监听端口启动服务
app.listen(8000, () => {
    console.log("海大校园服务器已经启动成功·，8000 端口正在监听中....");
})