import $ from "jquery"

let n = localStorage.getItem("n")
$("#count").html(n || 0)
let speed = 100
let rate = 1
var add = () => {
    let value = $("progress").val()
    $("progress").val(value + 1)
    let score = parseInt($("#count").html())
    if (value >= 100) {
        $("progress").val(0)
        score += rate
        localStorage.setItem("n", score)
        $("#count").html(score)
    }
    setTimeout(() => {
        add()
    }, speed)
}
add()