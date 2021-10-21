const test = dom.find('#test03')[0];
console.log(test);

dom.style(test01,{outline:'1px solid red',color:'green',backgroundColor:'yellow'})
dom.style(test02,'background-color','pink')


dom.each(test01.children,(a)=>{
    dom.style(
        a,{outline:'1px solid green',color:'purple'}
    )
})