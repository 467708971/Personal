import "./app2.css"
import $ from "jquery"
let $tabBar = $("#app2 .tab-bar")
let $content = $("#app2 .tab-content")
let index = localStorage.getItem('app2.index') || 0

$tabBar.on('click', 'li', (e) => {
    let $li = $(e.currentTarget)
    $li.addClass("selected").siblings().removeClass("selected")
    let index = $li.index()
    localStorage.setItem('app2.index', index)
    $content.children().eq(index).addClass("active").siblings().removeClass("active")
})
$tabBar.children().eq(index).trigger('click')