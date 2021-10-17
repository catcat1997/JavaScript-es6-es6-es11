// 引入fs模塊
const fs = require('fs');

// 讀取81 被讀123.md
function read1() {
    return new Promise((resolve, reject) => {
        fs.readFile("./81 被讀1.md", (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

function read2() {
    return new Promise((resolve, reject) => {
        fs.readFile("./81 被讀2.md", (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

function read3() {
    return new Promise((resolve, reject) => {
        fs.readFile("./81 被讀3.md", (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

// 聲明一個 async函數
async function main() {
    // 獲取被讀.md的內容
    let data1 = await read1();
    let data2 = await read2();
    let data3 = await read3();
    console.log(data1.toString());
    console.log(data2.toString());
    console.log(data3.toString());
}
// 執行
main();

// 在terminal內 輸入 node 103async與await結合讀取文件內容.js