window.addEventListener('load', function () {
    var that;
    class Tab {
        constructor(id) {
            that = this;
            // 獲取元素
            this.main = document.querySelector(id);

            this.add = this.main.querySelector('.tabadd');
            this.ul = this.main.querySelector('.firstnav ul:first-child');
            this.fsection = this.main.querySelector('.tabcon');
            this.init();
        }
        init() {
            this.updateNode();
            // init初始化操作讓相關的元素綁定事件
            for (var i = 0; i < this.lis.length; i++) {
                this.lis[i].index = i;
                // this.lis[i].onclick = function() {
                //     console.log(this.index);
                // }
                this.lis[i].onclick = this.toggleTab;
                // this.toggleTab不要加()  因為this是lis 沒有toogleTab()這個方法
                // this.toogleTab 是 指向函數的地址
                //調用函數不加括號：不會執行函數體，自然不會有函數返回值。
                // 而是把函數名稱作為函數的指針， ***
                // 把整個函數體傳過去，在需要的時候好找到函數體去執行。 ***

                this.remove[i].onclick = this.removeTab;
                this.spans[i].ondblclick = this.editTab;
                this.sections[i].ondblclick = this.editTab;
            }
            this.add.onclick = this.addTab;
            // this.add.addEventListener('click', this.addTab);
        }
        updateNode() {
            //重新獲取所有 li和section
            this.lis = this.main.querySelectorAll('li');
            this.sections = this.main.querySelectorAll('section');
            this.remove = this.main.querySelectorAll('.firstnav img');
            this.spans = this.main.querySelectorAll('.firstnav li span:first-child');
        }
        // 1. 切換功能
        toggleTab() {
            // console.log(this.index); // lis調用這方法, lis內有.index
            // lis調用toggleTab  this指向lis 
            that.clearClass();
            this.className = 'liactive';
            that.sections[this.index].className = 'conactive';
        }
        clearClass() {
            for (var i = 0; i < this.lis.length; i++) {
                this.lis[i].className = '';
                this.sections[i].className = '';
            }
        }
        // 2.添加功能
        addTab() {
            // console.log(this);
            // console.log(that);
            that.clearClass();
            var li = '<li class="liactive"><span>新測試</span><img src="close.png" alt="" class="close"></li>';
            that.ul.insertAdjacentHTML('beforeend', li);
            // insertAdjacentHTML 支持追加字符串元素
            var section = '<section class="conactive">新測試</section>';
            that.fsection.insertAdjacentHTML('beforeend', section);
            that.init(); // 利用init 重新獲取所有li和section的DOM 和 給予新的li綁定事件
        }
        // 3. 刪除功能
        removeTab(e) {
            e.stopPropagation();
            var index = this.parentNode.index;
            console.log(index);
            // 因為冒泡, 點了remove同時會點了toggleTab, 所以要阻止冒泡 
            // 利用e 事件對象e.stopPropagation();
            that.lis[index].remove();
            that.sections[index].remove();
            that.init();
            // 重新獲取元素DOM init

            //當我們remove的不是選中狀態的li 原來的選定狀態不變
            if (document.querySelector('.liactive')) return;
            // 當remove了li 時,給上一個li 處於選定狀態
            index--;
            // 手動代碼調用 點擊事件 不需要用鼠標點擊
            that.lis[index] && that.lis[index].click();
            // 如果&&前 為真 ,就調用 &&後
            // 如果&&前 為假 ,就不調用了
            // 如果index-1 (沒有的) 為假, 就不調用了

        }
        // 4. 修改功能
        editTab() {
            console.log(this);
            var str = this.innerHTML;
            // 雙擊文字 會默認選定文字  我們要禁字雙擊選定
            window.getSelection ? window.getSelection().removeAllRanges() : document.getSelection.empty();
            // 生成文字框做修改
            this.innerHTML = '<input type="text" />';
            var input = this.children[0];
            input.value = str;
            input.select(); // 文本框里面的文字處於選定狀態
            input.onblur = function () {
                // 這里的this 是input  因為在監聽函數onblur內
                this.parentNode.innerHTML = this.value;
            };
            // 接下enter也可以給span值 enter的ASCII碼 13
            input.onkeyup = function (e) {
                if (e.keyCode == 13) {
                    this.blur(); //直接調用onblur
                }
            };
        }
    }
    new Tab('#tab');
});