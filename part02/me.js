/*
    词典
    speed:  code的显示速度
    string: code的显示内容及style的内容
    string3:js的显示内容和实际内容
    想法
    用 $ 和 % 进行控速
    文本内容(1X)-->CSS内容(0.4X)-->JS清空操作(0.2X)-->新文本写入(2X)
    -->新文本CSS(0.8X)-->JS清空(0.4X)-->总结文本(0.7X)
    想法2
    文本内容动画
*/
let code = document.querySelector("#code");
let style = document.querySelector("#style");
let jscode = document.querySelector("#jscode");
let text = document.querySelector("#text");
let border01 = document.querySelector("#border01")
let content = document.querySelector("#content")
let body = document.querySelector("body")
let string =
    `#text{
    animation-name: textchangeback;
}
/* 大家好，我是施嘉宇
 * 这是我的个人介绍
 * 
 * 此部分是CSS样式
 * 在这部分我会修改CSS来进行网页的优化
**/
#border01{
    border: 2px solid green;
    width: 90%;
    height: 90%;
    margin: 5%;
    border-style: dashed;
}
#table{
    table-layout: fixed;
    text-align: center;
    width: 100%;
    border-collapse: 0;
}
td{
    outline:2px solid gray;
}
th{
    font-size: 20px;
    vertical-align: middle;
}
#table img{
    width: 80%;
    animation-duration: 4s;
    animation-fill-mode: forwards;
    animation-name: imgshow;
}
`;
let string2 = "";
let n = 0;
let speed = 20;
let step = () => {
    setTimeout(() => {
        if (string[n] === "\n") {
            string2 += "<br>"
        } else if (string[n] === " ") {
            string2 += "&nbsp;"
        } else {
            string2 += string[n]
        }
        code.innerHTML = string2
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999)
        if (n < string.length - 1) {
            n += 1
            step()
        } else {
            step2()
        }
    }, speed)
};
let i = 0;
let step4 = () => {
    setTimeout(() => {
        if (i === 0) {
            code.innerHTML =
                `/* 喏,就这么点东西
             **/
            `
            i++
            step4()
        } else if (i === 1) {
            jscode.innerHTML =
                `//挺没意思的
            `
            i++
            step4()
        } else if (i === 2) {
            border01.innerHTML =
                `<div id="newthing">所以我想整点东西出来撑过这漫长的几分钟</div>
             
            `
            style.innerHTML +=
                `
            #newthing{
                color: pink;
            }
            #text{
                animation-name: textchange;
            }
            `
            i++
            step4()
        } else if (i === 3) {
            text.innerHTML =
                `
            那么问题来了,整啥好呢?<br>
            聊家乡?一穷二白,年年人口流失,房价还在往上涨<br>
            聊特产?发达的物流让特产不再特殊<br>
            聊历史?"据说"是曹操养马的地方<br>
            聊人文?也妹啥人文能聊,算不上可爱的小城,甚至有点死气沉沉<br>
            `
            i++
            step4()
        } else if (i === 4) {
            border01.innerHTML =
                `
            算了,画个皮卡丘来收尾吧;<br>
            现在,清空全部<br>
            代码就直接映在皮卡丘左边吧<br>
            `
            i++
            step4()
        } else if (i === 5) {

            let step5lock = () => {
                setTimeout(() => {
                    code.remove()
                    content.remove()
                    jscode.remove()
                    text.remove()
                    style.remove()
                    string = ``
                    string2 = ""
                    n = 0
                    step5()
                }, 10000)    //10000记得改
            }
            step5lock();
        }
    }, 2000)
}
let step5 = () => {
    // 在这边加东西
    body.innerHTML +=
        `<div id="code01"></div>
        <div class="skin">
        <div class="eye left"></div>
        <div class="eye right"></div>
            <div class="nose">
                <div class="yuan"></div>
            </div>
        <div class="face left"></div>
        <div class="face right"></div>
        <div class="mouth">
            <div class="up">
                <div class="lip left"></div>
                <div class="lip right"></div>
            </div>
            <div class="down">
                <div class="yuan1">
                    <div class="yuan2"></div>
                </div>
            </div>
        </div>
    </div>
    <style id="style01"></style>
    `
    let code01 = document.querySelector("#code01")
    let style01 = document.querySelector("#style01")
    string =
        `
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
#code01::-webkit-scrollbar{
    width: 10px;
    height: 1px;
}
#code01::-webkit-scrollbar-thumb {
    border-radius: 10px;
     -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: #535353;
}
#code01::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 10px;
    background: #EDEDED;
}
#code01{
    width: 30%;
    height: 100vh;
    position: fixed;
    z-index: 1;
    overflow: auto;
}
.skin{
    position: relative;
    background: #f5dc00;
    height: 100vh;
}
.nose{
    border: 10px solid black;
    border-color: black transparent;
    border-bottom: none;
    width: 0px;
    height: 0px;
    position: relative;
    left: 50%;
    top: 200px;
    margin-left: -10px;
    z-index: 10;
}
.nose:hover{
    transform-origin: 50% 100%;
    animation: wave 1s infinite;
}
@keyframes wave{
    0%{transform: rotate(0deg);}
    25%{transform: rotate(-30deg);}
    50%{transform: rotate(0deg);}
    75%{transform: rotate(30deg);}
    100%{transform: rotate(0deg);}
}
.yuan{
    position: absolute;
    width: 20px;
    height: 6px;
    top: -13px;
    left: -10px;
    border-radius: 50%;
    background: black;
}
.eye{
    position: absolute;
    border: 2px solid #000;
    width: 64px;
    height: 64px;
    left: 50%;
    top: 150px;
    margin-left: -32px;
    background: #2e2e2e;
    border-radius: 50%;
}
.eye::before{
    content: "";
    display: block;
    border: 4px solid black;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: white;
    position: relative;
    left: 9px;
}
.eye.left{
    transform: translateX(-150px);
}
.eye.right{
    transform: translateX(150px);
}
.mouth{
    width: 220px;
    height: 200px;
    position: absolute;
    left: 50%;
    margin-left: -110px;
    top: 230px;
}
.mouth .up{
    position: relative;
    top: -5px;
    z-index: 5;
}
.mouth .up .lip{
    border: 4px solid black;
    height: 30px;
    width: 110px;
    border-top: none;
    border-right: none;
    border-left: none;
    background: #f5dc00;
}
.mouth .up .lip.left{
    border-radius: 0 0 0 50%;
    transform: rotate(-15deg);
    position: relative;
}
.mouth .up .lip.right{
    border-radius: 0 0 50% 0;
    transform: rotate(15deg);
    margin-left: 110px;
    position: absolute;
    bottom: 0;
}
.mouth .down{
    position: absolute;
    height: 250px;
    width: 100%;
    top: 10px;
    overflow: hidden;
    z-index: 1;
}
.mouth .down .yuan1{
    border: 4px solid black;
    width: 100%;
    height: 1000px;
    position: absolute;
    bottom: 50px;
    left: 0;
    border-radius: 50%;
    background: darkred;
    overflow: hidden;
}
.mouth .down .yuan1 .yuan2{
    width: 200px;
    height: 300px;
    position: absolute;
    background: #ff485f;
    bottom: -150px;
    left: 50%;
    margin-left: -100px;
    border-radius: 50%;
}
.face{
    position: absolute;
    left: 50%;
    border: 4px solid black;
    width: 88px;
    height: 88px;
    top: 300px;
    margin-left: -44px;
    border-radius: 50%;
    background: red;
}
.face.left{
    transform: translateX(-200px);
}
.face.right{
    transform: translateX(200px);
}
/*
 * 
 * 鼻子那边可以动的嗷
 * 
**/
`
    string2 = ""
    step6()
}
let step6 = () => {
    setTimeout(() => {
        if (string[n] === "\n") {
            string2 += "<br>"
        } else if (string[n] === " ") {
            string2 += "&nbsp;"
        } else {
            string2 += string[n]
        }
        code01.innerHTML = string2
        style01.innerHTML = string.substring(0, n);
        code01.scrollTo(0, 99999)
        if (n < string.length - 1) {
            n += 1
            step6()
        }
    }, 10)
};
let string3 =
    `//中嘞,现在来添加一个按钮button
let button = document.createElement("button")
button.type = "button"
button.id = "click"
border01.appendChild(button)
let click = document.querySelector("#click")
click.innerHTML = "点俺"
click.addEventListener('click',function(){
    code.innerHTML = ""
    jscode.innerHTML = ""
    text.innerHTML = ""
    border01.innerHTML = ""
    step4()
})
`
let string4 = ""
let m = 0;
let jsCode = ""
let speed01 = 50
let step2 = () => {
    setTimeout(() => {
        if (string3[m] === "\n") {
            string4 += "<br>"
        } else if (string3[m] === " ") {
            string4 += "&nbsp;"
        } else {
            string4 += string3[m]
        }
        // if(string3[m] === "$"){
        //     speed01 = 100
        // }else if(string3[m] === "%"){
        //     speed01 = 10
        // }
        jscode.innerHTML = string4
        if (m < string3.length - 1) {
            m += 1
            step2()
        } else {
            jsCode = string3.substring(0, m)
            var val = new Function(jsCode)
            val()
        }
    }, speed01)
}
// let step2lock = ()=>{
//     setTimeout(()=>{
//         step2()
//     },1000)    //10000记得改
// }
// step2lock();
let string5 =
    `<h2>我是谁</h2>
<p>姓名:施嘉宇</p>
<p>性别:男</p>
<p>出生日期:2000.03.31</p>
<p>籍贯:江苏省泰州市靖江市</p>
<p>爱好:打电动、看书、捣腾前端网页、女</p>
<table id="table">
    <thead>
        <tr>
            <th colspan="4">喜欢的游戏和书籍</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><img src="../image/740130_library_600x900.jpg" alt="破晓传说"></td>
            <td><img src="../image/502500_library_600x900.jpg" alt="皇牌空战7"></td>
            <td><img src="../image/632360_library_600x900.jpg" alt="雨中冒险2"></td>
            <td><img src="../image/582010_library_600x900.jpg" alt="怪猎:世界"></td>
        </tr>
        <tr>
            <td>破晓传说</td>
            <td>皇牌空战7</td>
            <td>雨中冒险2</td>
            <td>怪猎:世界</td>
        </tr>
        <tr>
            <td><img src="../image/live.jpg" alt="《活着》"></td>
            <td><img src="../image/1942.jpg" alt="《温顾1942》"></td>
            <td><img src="../image/santi.jpg" alt="《三体》"></td>
            <td><img src="../image/wenhuakulv.jpg" alt="《文化苦旅》"></td>
        </tr>
        <tr>
            <td>《活着》</td>
            <td>《温顾1942》</td>
            <td>《三体》</td>
            <td>《文化苦旅》</td>
        </tr>
    </tbody>
</table>
`
let string6 = ""
let b = 0
let textcontent = ""
let speed02 = 50
let step3 = () => {
    setTimeout(() => {
        if (string5[b] === "\n") {
            string6 += "<br>"
        } else if (string5[b] === " ") {
            string6 += "&nbsp;"
        } else if (string5[b] === "<") {
            string6 += "&lt;"
        } else if (string5[b] === ">") {
            string6 += "&gt;"
        } else {
            string6 += string5[b]
        }
        text.innerHTML = string6
        border01.innerHTML = string5.substring(0, b)
        text.scrollTo(0, 9999)
        if (b < string5.length - 1) {
            b += 1
            step3()
        } else {
            step()
        }
    }, speed02)
}
let step3lock = () => {
    setTimeout(() => {
        step3()
    }, 1000)    //10000记得改
}
step3lock();
