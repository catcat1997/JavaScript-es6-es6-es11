// 81Promise實踐練習-多個文件內容讀取

// 引入fs 模塊
const { log } = require("console");
const fs = require("fs");


// 使用回調地獄的方式 讀取3個文件
// fs.readFile('./81 被讀3.md', (err, data1) => {
//     fs.readFile('./81 被讀2.md', (err, data2) => {
//         fs.readFile('./81 被讀1.md', (err, data3) => {
//             let result = data1 + '\r\n' + data2 + '\r\n' + data3;
//             console.log(result);
//         });
//     });
// });

// 使用Promise   (串連異步任務 一步步十分清楚)
const p = new Promise((resolve, reject) => {
    fs.readFile('./81 被讀3.md', (err, data) => {
        resolve(data);
    });
});
p.then(value => {
    // console.log(value.toString());
    return new Promise((resolve, reject) => {
        fs.readFile('./81 被讀2.md', (err, data) => {
            resolve([value, data]);
        });
    });
}).then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('./81 被讀1.md', (err, data) => {
            value.push(data);
            resolve(value);
        });
    });
}).then(value => {
    console.log(value.join('\r\n')); // join 數組 轉換 字符串化
});