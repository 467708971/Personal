import "./app4.css"
import $ from "jquery"

let $colorchange = $(".colorchange")

$colorchange.on('mouseenter', () => {
    $colorchange.addClass('active')
}).on('mouseleave', () => {
    $colorchange.removeClass('active')
})