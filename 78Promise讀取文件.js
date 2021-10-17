// 需要用到node.js的api
// 1. 引入 fs模塊    (fs是node.js的一個核心模塊)
const { log } = require('console');
const fs = require('fs');

// 2.調用方法讀取文件
// fs.readFile('./78.5 被讀取文件.md', (err, data) => {
//     // 如果失敗
//     if (err) throw err;
//     // 如果沒有失敗,則輸出內容
//     console.log(data.toString());
// });

// 在下方的terminal 輸入  node 78Promise讀取文件.js

// 3.使用 Promise 封裝
const p = new Promise(function(resolve, reject) {
    fs.readFile('./78.5 被讀取文件.md', (err, data) => {
        // 如果失敗
        if (err) reject(err);
        // 如果成功
        resolve(data);
    });
});

p.then(function(value) {
    console.log(value.toString());
}, function(reason) {
    console.log(reason);
});