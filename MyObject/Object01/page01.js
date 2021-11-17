import "./page01.css"
import $ from "jquery"

let $body = $("body")
let $page01 = $("#page01")
let $center01 = $("#center01")
let $leftpart = $("#leftpart")
let $rightpart = $("#rightpart")
let $text01 = $("#text01")
let $icon00 = $(".icon00")
$text01.on('click', () => {
    $center01.addClass("rotate")
    $leftpart.addClass("leftmove")
    $rightpart.addClass("rightmove")
    $text01.addClass("textchange")
    setTimeout(() => {
        $text01[0].innerHTML = "方人也"
        setTimeout(() => {
            $icon00.addClass("show")
            $leftpart.addClass("none")
            $rightpart.addClass("none")
            setTimeout(() => {
                $icon00.addClass("move")
            }, 1000)
        }, 1000)
    }, 1000)
})