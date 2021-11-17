import "jquery"
import $ from "jquery"

let n = 0
let a = 0
let key = 0
let $page01 = $("#page01")
let $page02 = $("#page02")
let $body = $("body")
let $text01 = $("#text01")


var check = () => {
    setTimeout(() => {
        if ($text01[0].innerText === "方人也") {
            scroll()
        } else {
            check()
        }
    }, 3000)
}
check()

var change = () => {
        if (n === -1) {
            a += innerHeight
            if (a > document.body.clientHeight) {
                a -= innerHeight
            }
            window.scrollTo(0, a)
        } else if (n === 1) {
            a -= innerHeight
            if (a < 0) {
                a = 0
            }
            window.scrollTo(0, a)
        }
        console.log(a)
    }
    // -1下降,1上升
const throttle = (func, wait) => {
    let last = 0;
    return () => {
        const current_time = +new Date();
        if (current_time - last > wait) {
            func.apply(this, arguments);
            last = +new Date();
        }
    };
};

function scroll() {
    $(document).on("mousewheel DOMMouseScroll", function(e) {
        var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1))
        if (delta > 0) {
            n = 1
            throttle(change(), 3000)
        } else if (delta < 0) {
            n = -1
            throttle(change(), 3000)
        }
    })
}