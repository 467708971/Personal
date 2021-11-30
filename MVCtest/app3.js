import "./app3.css"
import $ from "jquery"

let $square = $("#app3 .square")
let localkey = 'app3.active'
let active = localStorage.getItem(localkey) === 'yes'

$square.toggleClass('active', active)
$square.on('click', () => {
    if ($square.hasClass('active')) {
        $square.removeClass('active')
        localStorage.setItem(localkey, 'no')
    } else {
        $square.addClass('active')
        localStorage.setItem(localkey, 'yes')
    }
})