let mid = document.getElementById('mid');
let tree = document.getElementById('tree');
let mannumber = document.getElementById('Mancount');
let n = 0;



mid.onclick = function(){
    console.log('233');
    n++;
    mannumber.innerHTML = n;
    mid.classList.add('big');
    setTimeout(()=>{
        mid.classList.remove('big');
    },100)
}