// import * as m1 from './118_hello.js';

// 獲取元素
const btn = document.getElementById('btn');

btn.onclick = function() {
    // 以前我們寫法:
    // import * as m1 from './118_hello.js';
    // m1.hello();


    // 動態import()
    import ('./118_hello.js').then(module => {
        module.hello();
    });
}