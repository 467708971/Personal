let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = 
`/* 天地未分之前，元气混而为一
 * 遂称：太极
**/
#div1{
    border: 1px solid black;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 后太极一分为二，谓之
 * 阴
 * 阳
 * 形如两鱼，相辅相生
**/
#div1::after{
    border:1px solid red;
    height: 50%;
    width: 50%;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background-color: white;
    border: none;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);}
#div1::before{
    border:1px solid green;
    height: 50%;
    width: 50%;
    left: 50%;
    transform: translateX(-50%);
    background-color: black;
    border-radius: 50%;
    border:none;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1{
    animation: div11 infinite 8s linear;
}
@keyframes div11{
    0%{
        transform:rotate(0deg)
    }
    100%{
        transform:rotate(360deg)
    }
}
/* 阴阳轮转
 * 周而复始
 * 渐有四象
 * 四象更迭
 * 又出八卦
**/
#bagua{
    animation: div111 5s;
    animation-fill-mode: forwards;
}
@keyframes div111{
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}
`;
let string2 = "";
let n = 0;
let step = ()=>{
    setTimeout(()=>{
        if(string[n] === "\n"){
            string2 += "<br>";
        }else if(string[n] === " "){
            string2 += "&nbsp;";
        }else{
            string2 += string[n];
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0,n);
        window.scrollTo(0,99999);
        html.scrollTo(0,99999);
        if(n < string.length - 1){
            n += 1;
            step();
        }
    },10);

};
step();
document.body.addEventListener('touchmove', function(e){
    e.preventDefault();
}, { passive: true });//改成false就是禁止拖动屏幕了
