button01.onclick = ()=>{
    document.getElementById('a01').classList.add('visiable')
    document.getElementById('a02').classList.remove('visiable')
    document.getElementById('a03').classList.remove('visiable')
}
button02.onclick = ()=>{
    document.getElementById('a02').classList.add('visiable')
    document.getElementById('a01').classList.remove('visiable')
    document.getElementById('a03').classList.remove('visiable')

}
button03.onclick = ()=>{
    document.getElementById('a03').classList.add('visiable')
    document.getElementById('a02').classList.remove('visiable')
    document.getElementById('a01').classList.remove('visiable')
}