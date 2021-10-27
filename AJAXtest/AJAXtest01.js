let n = 1
test06.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', `page0${n+1}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200){
            const array = JSON.parse(request.response)
            array.forEach(item=>{
                const li = document.createElement('li')
                li.textContent = item.id
                xxx.appendChild(li)
            })
            n+=1
        }
    }
    request.send()
}
test05.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', 'AJAX02.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const object = JSON.parse(request.response)
            myName.textContent = object.name
            console.log(object)
        }
    }
    request.send()
}
test04.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', 'AJAX02.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        }
    }
    request.send()
}
test03.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', 'AJAX02.html')
    request.onload = () => {
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    }
    request.onerror = () => { }
    request.send()
}
test02.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "AJAX02.js")
    request.onload = () => {
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = () => { }
    request.send()
}
test01.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "AJAXtest01.css");
    request.onload = () => {
        const style = document.createElement('style')
        style.innerHTML = request.response
        document.head.appendChild(style)
    };
    request.onerror = () => { };
    request.send();
}

