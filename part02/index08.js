const div = dom.find('#test01>.test11')[0]
dom.style(div,'color','red')

const divList = dom.find('#test01') 
dom.each(divList, (n)=> console.log(n))