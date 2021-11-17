import "./app1.css"
import $ from "jquery"

let $button1 = $("#add")
let $button2 = $("#minus")
let $button3 = $("#multiply")
let $button4 = $("#except")
let $number = $("#number")
const n = localStorage.getItem("n")
$number.text(n || 100);

$button1.on("click",()=>{
    let n = parseInt($number.text())
    n++
    localStorage.setItem("n",n)
    $number.text(n)
})
$button2.on("click",()=>{
    let n = parseInt($number.text())
    n--
    localStorage.setItem("n",n)
    $number.text(n)
})
$button3.on("click",()=>{
    let n = parseInt($number.text())
    n*=2
    localStorage.setItem("n",n)
    $number.text(n)
})
$button4.on("click",()=>{
    let n = parseInt($number.text())
    n/=2
    localStorage.setItem("n",n)
    $number.text(n)
})