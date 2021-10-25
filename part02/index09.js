const $siteList = $('.siteList')
const $lastLi = $siteList.find('li.last')
const x = localStorage.getItem('x')
const xObject = JSON.parse(x)

window.hashMap = xObject || [
    {logo:'S11',url:'https://www.bilibili.com/blackboard/activity-gMw1DlvxeG.html?spm_id_from=333.337.0.0'},
    {logo:'B',url:'https://www.bilibili.com'},
    {logo:'P',url:'https://www.pixilart.com'},
    {logo:'G',url:'https://github.com/'},
    {logo:'码',url:'https://xiedaimala.com/'},
    {logo:'麦',url:'https://www.mcdonalds.com.cn/'},
    {logo:'原',url:'https://bbs.mihoyo.com/ys/'}
]
const removeX = (url)=>{
    return url.replace('https://','')
    .replace('http://','')
    .replace('www.','')
    .replace(/\/.*/,'')
}
const render = ()=>{
    $siteList.find('li:not(.last)').remove();
    hashMap.forEach((node,index)=>{
        const $li = $(`<li>
        <div class="site">
            <div class="logo">${node.logo}</div>
            <div class="link">${removeX(node.url)}</div>
            <div class="close">
                <svg class="icon">
                    <use xlink:href="#icon-close"></use>
                </svg>
            </div>
        </div>
        </li>`).insertBefore($lastLi)
        $li.on('click',()=>{
            window.open(node.url)
        })
        $li.on('click','.close',(e)=>{
            e.stopPropagation()
            hashMap.splice(index,1)
            render()
        })
    })
}

render()

$('.addButton')
    .on('click', () => {
        let url 
        layer.prompt({
            title: '请输入相关网址',
          }, function(value, index){
            logo = idcode.value
            url = value;
            if (url.indexOf('http') != 0) {
                url = 'https://' + url;
            }
            if(logo === idcode.value && logo){
                logo = logo;
            }else{
                logo = removeX(url)[0].toUpperCase()
            }
            hashMap.push({
                logo:logo,
                url:url
            });
            render()
            layer.close(index);
          });
          $(".layui-layer-content").append("<br/><input id= \"idcode\" class=\"layui-layer-input\" placeholder=\"输入简称(一个字)\"/ value='' >")
        render()
    });


window.onbeforeunload = ()=>{
    const string = JSON.stringify(hashMap)
    localStorage.setItem('x',string)
}